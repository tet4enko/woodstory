/* global $ */

import React, { Component } from 'react';
import './Price.css';
import background from './price_background.png';
import background2 from './price_background2.png';

import size1 from './prices/size1.png';
import size2 from './prices/size2.png';
import size3 from './prices/size3.png';
import size4 from './prices/size4.png';
import size5 from './prices/size5.png';
import size6 from './prices/size6.png';
import size7 from './prices/size7.png';

import price1 from './prices/price1.png';
import price2 from './prices/price2.png';
import price3 from './prices/price3.png';
import price4 from './prices/price4.png';
import price5 from './prices/price5.png';
import price6 from './prices/price6.png';
import price7 from './prices/price7.png';

import mobilePrice1 from './prices/small_price1.png';
import mobilePrice2 from './prices/small_price2.png';
import mobilePrice3 from './prices/small_price3.png';
import mobilePrice4 from './prices/small_price4.png';
import mobilePrice5 from './prices/small_price5.png';
import mobilePrice6 from './prices/small_price6.png';
import mobilePrice7 from './prices/small_price7.png';

const prices = { price1, price2, price3, price4, price5, price6, price7 };

class Price extends Component {

    constructor(props) {
        super(props);

        this.state = {
            index: 1,
            animatePrice: false
        };
    }

    componentDidMount() {
        $('#price-slider').sliderPro({
            width: 400,
            height: 400,
            buttons: false,
            arrows: true,
            imageScaleMode: 'contain',
            autoplay: false,
            fadeArrows: false,
            gotoSlide: (event) => {
                this.setState({
                    index: event.index + 1,
                    animatePrice: true
                });

                setTimeout(() => {
                    this.setState({
                        animatePrice: false
                    });
                }, 350);
            }
        });
    }

    render() {
        return (
            <div className="Price">
            <img className="background" src={background} />
            <img className="background2" src={background2} />
            <div className="content-wrapper">
                <div className="header">Цены</div>
                <div className="mobile-prices-wrapper">
                    <img className="mobile-price" src={mobilePrice1}></img>
                    <img className="mobile-price" src={mobilePrice2}></img>
                    <img className="mobile-price" src={mobilePrice3}></img>
                    <img className="mobile-price" src={mobilePrice4}></img>
                    <img className="mobile-price" src={mobilePrice5}></img>
                    <img className="mobile-price" src={mobilePrice6}></img>
                    <img className="mobile-price" src={mobilePrice7}></img>
                </div>
                <div className="slider-wrapper">
                    <div class="slider-pro" id="price-slider">
                        <div class="sp-slides">
                            <div class="sp-slide">
                                <img class="sp-image" src={size1}/>
                            </div>

                            <div class="sp-slide">
                                <img class="sp-image" src={size2}/>
                            </div>

                            <div class="sp-slide">
                                <img class="sp-image" src={size3}/>
                            </div>

                            <div class="sp-slide">
                                <img class="sp-image" src={size4}/>
                            </div>

                            <div class="sp-slide">
                                <img class="sp-image" src={size5}/>
                            </div>

                            <div class="sp-slide">
                                <img class="sp-image" src={size6}/>
                            </div>

                            <div class="sp-slide">
                                <img class="sp-image" src={size7}/>
                            </div>
                        </div>
                    </div>
                    <div className="current-price">
                        <img class={`current-price-img ${this.state.animatePrice ? 'animate' : ''}`} src={prices[`price${this.state.index}`]}/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Price;
