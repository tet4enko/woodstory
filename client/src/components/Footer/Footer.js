import React from 'react';
import './Footer.scss';
import background from './footer_background.png';

import vk from './pics/vk.png';
import inst from './pics/inst.png';
import mail from './pics/mail.png';
import phone from './pics/phone.png';

function Header() {
    return (
        <div className="Footer block">
            <img className="background" src={background} />
            <div className="content-wrapper">
                <div className="content">
                    <a className="phone" target="_blank" href="tel:+79780790979 "><img className="ico" src={phone}/></a>
                    <a className="mail" target="_blank" href="mailto:tavrida.media@mail.ru"><img className="ico" src={mail}/></a>
                    <a className="inst" target="_blank" href="https://www.instagram.com/you.wood.story/"><img className="ico" src={inst}/></a>
                </div>
            </div>
        </div>
    );
}

export default Header;
