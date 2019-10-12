import React from 'react';
import './Introduction.scss';
import background from './introduction_background.png';
import balar from './balar.png';

function Header() {
    return (
        <div className="Introduction block">
            <img className="background" src={background} />
            <div className="content-wrapper">
                <div className="header">О нас</div>
                <div className="content">
                    <img className="balar" src={balar}></img>
                    <ul className="text">
                        <li className="item green">Более 3х лет на рынке</li>
                        <li className="item red">Налаженный процесс производства позволяет нам гарантировать минимальный срок изготовления</li>
                        <li className="item green">Сделано более 2000 картин</li>
                        <li className="item red">Более 1200 довольный клиентов</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
