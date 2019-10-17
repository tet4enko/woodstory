import React from 'react';
import logo from './logo.svg';
import './App.scss';

import jQuery from 'jquery';

import FaBars from 'react-icons/lib/fa/bars';
import FaPhone from 'react-icons/lib/fa/phone';

import Header from './../Header/Header';
import Introduction from './../Introduction/Introduction';
import Examples from './../Examples/Examples';
import Price from './../Price/Price';
import Feedback from './../Feedback/Feedback';
import Order from './../Order/Order';
import Stages from './../Stages/Stages';
import Footer from './../Footer/Footer';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CallModal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props;
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Запрос обратного звонка
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form validated={props.validated} className="form lite-green">
                        <Form.Group as={Row} controlId="formBasicPhone">
                            <Col sm={10}>
                                <Form.Control disabled={props.disabled} required size="lg" type="tel" placeholder="Введите телефон" ref="phone"/>
                                <Form.Control.Feedback type="invalid">
                                    Укажите телефон, пожалуйста.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button disabled={props.disabled} variant="secondary" className="cancel-button" onClick={props.onHide}>Отмена</Button>
                    <Button disabled={props.disabled} variant="primary" className="go-button" onClick={(function() { this.props.onCall(this.refs.phone.value); }).bind(this)}>Запросить</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            modalValidated: false,
            modalDisabled: false,

            touchMenuShow: false
        };

        jQuery(window.document).one('scroll', () => {
            this.refs.App.setAttribute('data-scrolled', 'yes')
        });
    }

    setModalShow(value) {
        this.setState({
            modalShow: value
        });
    }

    setTouchMenuShow(value) {
        console.log('set ' + value);
        this.setState({
            touchMenuShow: value
        });
    }

    toggleTouchMenuShow() {
        this.setState({
            touchMenuShow: !this.state.touchMenuShow
        });
    }

    call(phone) {
        
        if (!phone) {
            this.setState({ modalValidated: true });
        } else {
            this.setState({ modalDisabled: true, modalValidated: false });

            jQuery.post('/api/call', { phone })
                .done(() => {
                    this.setState({
                        modalDisabled: false,
                        modalShow: false
                    });
                })
                .fail(() => {
                    this.setState({
                        modalDisabled: false
                    });

                    alert('Что-то пошло не так:( Позвоните нам по телефону, указанному на сайте')
                });
        }
    }

    onMenuItemClick(slug) {
        this.setState({ touchMenuShow: false });

        setTimeout(() => {
            let scrollTop = jQuery(`.${slug}`).offset().top;

            if (document.body.clientWidth <= 850) {
                scrollTop -= this.refs.touchHeader.clientHeight;
            }

            jQuery('html, body').animate({ scrollTop }, 1000);
        }, 100);
    }

    goTop() {
        jQuery('html, body').animate({ scrollTop: 0 }, 1000);
    }

    render() {
        return (
            <div className={`App ${this.state.touchMenuShow ? 'touch-menu-show' : ''}`} ref="App">
                <div className="touch-header" ref="touchHeader">
                    <FaBars className="ico" onClick={() => this.toggleTouchMenuShow()}/>
                    <div itemscope itemtype="http://schema.org/LocalBusiness">
                        <div className="schema-name" itemprop="name">Beach Bunny Swimwear</div>
                        <span><a className="phone-link" href="tel:+79780790979 ">(978) 079-09-79</a></span>
                    </div>
                    <FaPhone className="ico" onClick={() => this.setModalShow(true)}/>
                </div>
                <Header onMenuItemClick={this.onMenuItemClick.bind(this)} touchMenuShow={this.state.touchMenuShow}/>
                <Examples/>
                <Stages/>
                <Price/>
                <Order/>
                <Introduction/>
                <Feedback/>
                <Footer/>
                <div className="call-great" onClick={() => this.setModalShow(true)}></div>
                <div className="go-top" onClick={this.goTop.bind(this)}></div>
                <CallModal disabled={this.state.disabled} validated={this.state.modalValidated} show={this.state.modalShow} onCall={this.call.bind(this)} onHide={() => this.setModalShow(false)}/>
            </div>
        );
    }
}

export default App;
