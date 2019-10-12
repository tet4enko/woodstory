import React from 'react';
import './Stages.scss';
import background from './stages_background.png';

import stage1 from './pics/stage1.png';
import stage2 from './pics/stage2.png';
import stage3 from './pics/stage3.png';
import stage4 from './pics/stage4.png';
import stage5 from './pics/stage5.png';
import arrowPic from './pics/arrow.png';

function Stages() {
    const stagePic = (img, index) => {
        return <div className={`stage stage${index} green`}>
            <img className="pic" src={img}></img>
        </div>;
    };
    const arrow = <img className="arrow" src={arrowPic}></img>;

    return (
        <div className="Stages block">
            <img className="background" src={background} />
            <div className="content-wrapper">
                <div className="header">Этапы работы</div>
                <div className="content">
                    {stagePic(stage1, 1, 'Дизайн', 'Подготовка вашего макета под печать')}
                    {arrow}
                    {stagePic(stage2, 2, 'Производство', 'Обработка и грунтовка древесины')}
                    {arrow}
                    {stagePic(stage3, 3, 'Печать', 'Нанесение изображения на поверхность изделия')}
                    {arrow}
                    {stagePic(stage4, 4, 'Упаковка', 'Упаковка готовое картины в подарочную бумагу')}
                    {arrow}
                    {stagePic(stage5, 5, 'Доставка', 'Бесплатная доставка по Крыму')}
                </div>
            </div>
        </div>
    );
}

export default Stages;
