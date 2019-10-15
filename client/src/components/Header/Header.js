import React from 'react';
import './Header.scss';
import background from './header_background.png';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props;
        const button = (name, slug) => {
            return <li className="menu-item">{name}</li>;
        };

        console.log(props);
    
        return (
            <header className="Header block">
                <img className="background" src={background} />
                <div className={`menu-wrapper ${props.touchMenuShow ? 'touch-show' : ''}`}>
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
}

export default Header;
