import React from 'react';
import './Introduction.css';
import background from './introduction_background.png';

function Header() {
    return (
        <div className="Introduction">
            <img className="background" src={background} />
            <div className="text-wrapper">
                <div className="header">О нас</div>
                <span className="text">
                    <span className="red">Дорогой друг</span>
                    {
                        `, мы благодарим тебя за то, что ты решил увековечить 
                        важный момент своей жизни в фотографии на дереве. В наше 
                        время просто вставить понравившиеся изображение в рамку, 
                        является слишком банальным и обыденным, к тому же, обычная 
                        фоторамка не всегда обладает внушающим размером и редко 
                        может удивить Вас и ваших гостей. Согласимся, что заказ картины 
                        у художника будет выглядеть довольно странно и не современно, 
                        более того, в большинстве своём это может весомо ударить по 
                        семейному бюджету. Но наша дружная команда нашла выход из 
                        этой непростой ситуации. Картина на дереве - это кардинально 
                        новый и современный элемент декора, который прекрасно 
                        вписывается в любой интерьер. Команда `
                    }
                    <span className="red">«YOU WOOD STORY»</span>
                    {
                        `, 
                        надеятся, что картина станет отличным подарком для Вас и ваших 
                        близких.`
                    }
                </span>
            </div>
        </div>
    );
}

export default Header;