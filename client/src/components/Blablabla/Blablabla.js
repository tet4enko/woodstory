import React, { Component } from 'react';
import './Blablabla.scss';

class Blablabla extends Component {
    render() {
        return (
            <div className="Blablabla green">
                <p>Вас приветствует дружная команда мастерской <span className="red">youwoodstory</span>, которая всегда готова прийти к вам на помощь и изготовить потрясающий подарок для вашей второй половинки, друзей или родственников !</p>
                <p className="red">Почему именно мы?</p>
                <ol>
                    <li><p>Мы занимаемся изготовлением картин на дереве уже более 5 лет.</p></li>
                    <li><p>У нас своё собственное производство.</p></li>
                    <li><p>Мы всегда тщательно подходим к выбору материалов и изготавливаем изделия только из экологически чистого сырья.</p></li>
                    <li><p>Лучшее соотношение цены и качества на картины на дереве и досках на рынке!</p></li>
                    <li><p>Дружная команда, которая с удовольствием ответит на все ваши вопросы, и поможет с выбором изделия!</p></li>
                </ol>
                <p>Наш японский станок <span className="red">Mimaki</span> создан специально для того , чтобы переносить Печать ваших фотографий на доски в максимально возможном качестве и разрешении.</p>
                <p>Смотрите фото наших работ , и торопитесь поскорее заказать наш шедевр !!</p>
            </div>
        );
    }
}

export default Blablabla;
