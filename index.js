const path = require('path');

const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const gmail = require('gmail-send');
const pino = require('express-pino-logger')();

const app = express();

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
        const send = gmail({
            user: 'woodstorysender',
            pass: 'woodstorysender228',
            to:   ['tavrida.media@mail.ru', 'trissenkov@gmail.com'],
            subject: 'Заказ с woodstory.ru',
        });

        send({
            html: `
                Имя: ${req.body.name}<br/>
                Почта: ${req.body.email}<br/>
                Телефон: ${req.body.phone}<br/>
                Текст собщение: ${req.body.comment}<br/>
            `,  
        }, (error, result, fullResult) => {
            console.log(result);
            if (error) {
                req.log.error(req.body, 'send order error :(');
                res.status(500);
            } else {
                req.log.info(req.body, 'send order success :)');
            }

            res.end();
        })
    })

    .get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build/index.html'));
    });

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
