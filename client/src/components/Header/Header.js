import React from 'react';
import './Header.css';
import background from './header_background.png';

function Header() {
    const button = (name, slug) => {
        return <li className="menu-item">{name}</li>;
    };

    return (
        <header className="Header block">
            <img className="background" src={background} />
            <div className="menu-wrapper">
                <ol className="menu">
                    {button("РАБОТЫ")}
                    {button("ЦЕНЫ")}
                    {button("ЗАКАЗАТЬ")}
                    {button("О НАС")}
                    {button("ОТЗЫВЫ")}
                </ol>
            </div>
        </header>
    );
}

export default Header;
