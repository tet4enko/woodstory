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
    const stagePic = (img, index, label, alt) => {
        return <div className={`stage stage${index} green`}>
            <img className="pic" src={img} alt={alt}></img>
            <h3 className="hidden">{label}</h3>
        </div>;
    };
    const arrow = <img className="arrow" src={arrowPic} alt="Следующий этап работы"></img>;

    return (
        <div className="Stages block">
            <img className="background" src={background} />
            <div className="content-wrapper">
                <h2 className="header">Этапы работы</h2>
                <div className="content">
                    {stagePic(stage1, 1, 'Дизайн', 'Этап один – подготовка дизайна')}
                    {arrow}
                    {stagePic(stage2, 2, 'Производство', 'Этап два – производство')}
                    {arrow}
                    {stagePic(stage3, 3, 'Печать', 'Этап три – печать изображения на древесине')}
                    {arrow}
                    {stagePic(stage4, 4, 'Упаковка', 'Этап четыре – упаковка картины')}
                    {arrow}
                    {stagePic(stage5, 5, 'Доставка', 'Этап пять – доставка картины')}
                </div>
            </div>
        </div>
    );
}

export default Stages;
