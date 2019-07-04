import React from 'react';
import ReactDOM from 'react-dom'
import Menu from './componentes/menu'
import ChartOne from './componentes/grafico1'
import ChartTwo from './componentes/grafico2'
import ChartThree from './componentes/grafico3'


const elemento = document.getElementById("root")

ReactDOM.render(
    <div class="main">
        <div class="menu">
            <Menu />
        </div>
        <div class="page-one">
            <p class="title">Page 1</p>
            <p class="title-two">Page 2</p>
            <div class="coll">
                <div class="grafico-one">
                <p>Bars Chart</p>
                    <ChartOne />
                </div>
                <div class="grafico-two">
                <p>Pie Chart</p>
                    <ChartTwo />
                </div>
                <div class="grafico-three">
                <p>Line Chart 2 Data</p>
                    <ChartThree />
                </div>
            </div>
             
        </div>
              
    </div>
, elemento)
