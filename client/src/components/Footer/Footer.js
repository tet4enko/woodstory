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
                <h2 className="header">Связаться с нами</h2>
                <div className="content">
                    <a className="mail" target="_blank" href="mailto:tavrida.media@mail.ru"><img className="ico" src={mail} alt="Почта YouWoodStory"/></a>
                    <a className="inst" target="_blank" href="https://www.instagram.com/you.wood.story/"><img className="ico" src={inst} alt="Instagram YouWoodStory"/></a>
                    <a className="vk" target="_blank" ><img className="ico" src={vk} alt="VK YouWoodStory"/></a>
                </div>
            </div>
        </div>
    );
}

export default Header;
