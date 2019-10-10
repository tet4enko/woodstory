/* global $ */

import React, { Component } from 'react';
import './Order.css';
import background from './order_background.png';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import jQuery from 'jquery';

class Order extends Component {

    constructor(props) {
        super(props);

        this.state = {
            validated: false,
            submitting: false,
            submited: false
        };
    }

    submit(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!this.checkValidity()) {
            this.setState({
                validated: true
            });
        } else {
            this.setState({
                submitting: true
            });
            jQuery.post('/api/order', this.getData())
                .done(() => {
                    this.setState({
                        submited: true
                    })
                })
                .fail(() => {
                    alert('Что-то пошло не так:( Позвоните нам по телефону, указанному на сайте')
                })
                .always(() => {
                    this.setState({
                        submitting: false
                    });
                });
        }
    }

    checkValidity() {
        const data = this.getData();

        return Object.keys(data).every(item => data[item]);
    }
    

    getData() {
        return {
            name: this.refs.formName.value,
            email: this.refs.formEmail.value,
            phone: this.refs.formPhone.value,
            comment: this.refs.formComment.value
        };
    }

    render() {
        return (
            <div className={`Order block ${this.state.submited ? 'submited' : ''}`}>
            <img className="background" src={background} />
            <div className="content-wrapper">
                <div className="header">Заказать</div>

                <div className="submit-success-message green">
                    <div>Спасибо за заказ!</div>
                    <div>В ближайшее время мы свяжемся с Вами :)</div>
                </div>

                <Form validated={this.state.validated} className="form lite-green">
                    <Form.Group as={Row} controlId="formBasicName">
                        <Col sm={10}>
                            <Form.Control required size="lg" type="text" placeholder="Введите имя" ref="formName"/>
                            <Form.Control.Feedback type="invalid">
                                Укажите имя, пожалуйста.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicEmail">
                        <Col sm={10}>
                            <Form.Control required size="lg" type="email" placeholder="Введите email" ref="formEmail"/>
                            <Form.Control.Feedback type="invalid">
                                Укажите почту, пожалуйста.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicPhone">
                        <Col sm={10}>
                            <Form.Control required size="lg" type="tel" placeholder="Введите телефон" ref="formPhone"/>
                            <Form.Control.Feedback type="invalid">
                                Укажите телефон, пожалуйста.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicComment">
                        <Col sm={10}>
                            <Form.Control required size="lg" as="textarea" rows="4" placeholder="Введите описание" ref="formComment"/>
                            <Form.Control.Feedback type="invalid">
                                Укажите комментарий, пожалуйста.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Button disabled={this.state.submitting} size="lg" variant="primary" type="submit" onClick={this.submit.bind(this)}>
                        Отправить
                    </Button>
                </Form>
            </div>
        </div>
        );
    }
}

export default Order;
