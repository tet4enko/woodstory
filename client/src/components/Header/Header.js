import React from 'react';
import jQuery from 'jquery';
import './Header.scss';
import background from './header_background.png';

import woodLogo from './logos/woodstory.png';
import tavridaLogo from './logos/tavridamedia.png';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props;
        const button = (name, slug) => {
            return <li className="menu-item" onClick={() => this.props.onMenuItemClick(slug)}>{name}</li>;
        };
    
        return (
            <header className="Header block">
                <img className="background" src={background} alt="YouWoodStory – картины на дереве"/>
                <h1 className="hidden">YouWoodStory – картины на дереве</h1>
                <div className={`menu-wrapper ${props.touchMenuShow ? 'touch-show' : ''}`}>
                    <ol className="menu">
                        {button('РАБОТЫ', 'Examples')}
                        {button('ЦЕНЫ', 'Price')}
                        {button('ЗАКАЗАТЬ', 'Order')}
                        {button('О НАС', 'Introduction')}
                        {button('ОТЗЫВЫ', 'Feedback')}
                    </ol>
                    <div className="logos">
                        <a href="https://www.instagram.com/you.wood.story/" target="_blank">
                            <img className="logo" src={woodLogo} alt="YouWoodStory" />
                        </a>
                        <a href="https://www.instagram.com/tavridamedia/" target="_blank">
                            <img className="logo" src={tavridaLogo} alt="Таврида-Медиа – рекламное агенство"/>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
