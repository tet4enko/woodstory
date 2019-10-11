import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './../Header/Header';
import Introduction from './../Introduction/Introduction';
import Examples from './../Examples/Examples';
import Price from './../Price/Price';
import Feedback from './../Feedback/Feedback';
import Order from './../Order/Order';
import Stages from './../Stages/Stages';

function App() {
    return (
        <div className="App">
            <Header/>
            <Examples/>
            <Stages/>
            <Price/>
            <Order/>
            <Introduction/>
            <Feedback/>
        </div>
    );
}

export default App;
