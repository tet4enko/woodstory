import React, { Component } from 'react';
import './Contacts.scss';

import phoneIco from './phone.png';
import instIco from './inst.png';

class Contacts extends Component {
    render() {
        return (
            <div className="Contacts">
                <a className="contact phone" target="_blank" href="tel:+79780790979">
                    <img src={phoneIco}/>(978) 079-09-79
                </a>
                <a className="contact inst" target="_blank" href="https://www.instagram.com/you.wood.story/">
                    <img src={instIco}/>you.wood.story
                </a>
            </div>
        );
    }
}

export default Contacts;
