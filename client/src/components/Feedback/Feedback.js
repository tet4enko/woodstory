import React from 'react';
import './Feedback.scss';
import background from './feedback_background.png';

import alexandra from './photos/alexandra.png';
import vasiliy from './photos/vasiliy.png';
import valeria from './photos/valeria.png';
import dmitriy from './photos/dmitriy.png'; 

class Feedback extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            more: false
        };
    }

    viewMore() {
        this.setState({
            more: true
        });
    }

    render() {
        const comment = (name, age, text, pic, side, href) => {
            return <div className={`comment ${side}`}>
                <div className="top-line" href={href} target="_blank">
                    <img className="avatar" src={pic} />
                    <div className="name green">{`${name}, ${age}`}</div>
                </div>
                <div className="description">{text}</div>
            </div>;
        };
    
        return (
            <div className={`Feedback block ${this.state.more ? 'more' : ''}`}>
                <img className="background" src={background} />
                <div className="content-wrapper">
                    <div className="header">Отзывы</div>
                    <div className="comments">
                        {comment('Александра', 21, 'Спасибо большое команде Wood Story, помогали мне с выбором размера картины. Очень понравилось качество изображения, подарочная упаковка. Спасибо большое!!!', alexandra, 'left', 'https://instagram.com/dmitry_tetchenko/')}
                        <div className="show-secondary red" onClick={this.viewMore.bind(this)}>Еще отзывы</div>
                        <div className="secondary">
                            {comment('Василий', 42, 'Заказывал картину на юбилей свадьбы для любимой жены, она была в восторге и мне тоже очень понравилось, всем рекомендую, очень оригинальный подарок к любому празднику!!!', vasiliy, 'right', 'https://instagram.com/dmitry_tetchenko/')}
                            {comment('Валерия', 19, 'Я была в шоке, когда увидела это чудо, изображение нанесено на натуральное дерево! Спасибо огромное, очень понравилось всем моим родным. Приобретали картину, как декор в дом, очень понравилось обслуживание и профессионализм команды Wood Story , всем рекомендую.', valeria, 'left', 'https://instagram.com/dmitry_tetchenko/')}
                            {comment('Дмитрий', 27, 'Всем здравствуйте, хочу поблагодарить всю команду Wood Story за оперативность, выполнили все очень быстро, красиво упаковали, доставили до двери. Рекомендую всем, очень красивый подарок для ваших родных и близких :)', dmitriy, 'right', 'https://instagram.com/dmitry_tetchenko/')}  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feedback;
