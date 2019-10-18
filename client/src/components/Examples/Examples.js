/* global $ */

import React from 'react';
import './Examples.scss';
import background from './examples_background.png';

import pic1 from './pics/_M-pyRFtqUw.jpg';
import pic2 from './pics/1yx_f8SirY8.jpg';
import pic3 from './pics/eV6zh6uzvBY.jpg';
import pic4 from './pics/jv7EqFYsum0.jpg';
import pic5 from './pics/Oe92jsh_HuQ.jpg';
import pic6 from './pics/SehSvIbNZ6M.jpg';
import pic7 from './pics/v5TEHoBWilU.jpg';


class Examples extends React.Component {

    componentDidMount() {
        $('#my-slider').sliderPro({
            width: '100%',
            autoHeight: true,
            autoSlideSize: true,
            arrows: true,
            buttons: true,
            waitForLayers: true,
            autoplay: true,
            fadeArrows: false,
            fullScreen: true,
            thumbnailPointer: true,
            thumbnailArrows: true,
            slideDistance: 0
        });
    }

    render() {
        return (
            <div className="Examples block">
                <img className="background" src={background} />
                <div className="slider-wrapper">
                    <h2 className="header">Наши работы</h2>
                    <div class="slider-pro" id="my-slider">
                        <div class="sp-slides">
                            <div class="sp-slide">
                                <img class="sp-image" src={pic1} alt="Пример готовой картины 1"/>
                            </div>

                            <div class="sp-slide">
                                <img class="sp-image" src={pic3} alt="Пример готовой картины 2"/>
                            </div>

                            <div class="sp-slide">
                                <img class="sp-image" src={pic4} alt="Пример готовой картины 3"/>
                            </div>

                            <div class="sp-slide">
                                <img class="sp-image" src={pic2} alt="Пример готовой картины 4"/>
                            </div>

                            <div class="sp-slide">
                                <img class="sp-image" src={pic5} alt="Пример готовой картины 5"/>
                            </div>

                            <div class="sp-slide">
                                <img class="sp-image" src={pic6} alt="Пример готовой картины 6"/>
                            </div>

                            <div class="sp-slide">
                                <img class="sp-image" src={pic7} alt="Пример готовой картины 7"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Examples;
