const path = require('path');

const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const gmail = require('gmail-send');
const pino = require('express-pino-logger')();

const config = require('./modules/config');

const app = express();

const email = {
    user: 'woodstorysender',
    pass: 'woodstorysender228',
    to:   ['tavrida.media@mail.ru', 'trissenkov@gmail.com'],
};

app
    .use(compression())
    .use(express.static(path.join(__dirname, 'client/build')))
    .use(express.static(path.join(__dirname, 'client/node_modules/slider-pro/dist')))
    .use(express.static(path.join(__dirname, 'client/node_modules/slider-pro/libs')))

    .use(bodyParser.json({ limit: '10Mb' }))
    .use(bodyParser.urlencoded({ extended: true, limit: '10Mb' }))

    .use(pino)

    .get('/ping', (req, res) => {
        req.log.info('Ping success!');

        res.send('Pong! ').end();
    })

    .post('/api/order/', (req, res) => {
        const send = gmail(Object.assign({}, email, {
            subject: 'Заказ с woodstory.ru',
        }));

        send({
            html: `
                Имя: ${req.body.name}<br/>
                Почта: ${req.body.email}<br/>
                Телефон: ${req.body.phone}<br/>
                Текст собщение: ${req.body.comment}<br/>
            `,  
        }, (error, result) => {
            if (error) {
                req.log.error(req.body, 'send order error :(');
                res.status(500);
            } else {
                req.log.info(req.body, 'send order success :)');
            }

            res.end();
        })
    })

    .post('/api/call/', (req, res) => {
        const send = gmail(Object.assign({}, email, {
            subject: 'Запрос обратного звонка с woodstory.ru',
        }));

        send({
            html: `
                Телефон: ${req.body.phone}<br/>
            `,  
        }, (error) => {
            if (error) {
                req.log.error(req.body, 'send call error :(');
                res.status(500);
            } else {
                req.log.info(req.body, 'send call success :)');
            }

            res.end();
        })
    })

    .get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build/index.html'));
    });

const port = process.env.PORT || config.port;
app.listen(port);

console.log('App is listening on port ' + port);
