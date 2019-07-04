import React, {Component} from 'react'

export default class Fade extends Component {
    grafOneTwo = () => {
        let grafico = document.querySelector('.grafico-one')
        let graficoTwo = document.querySelector('.grafico-two')
        let title = document.querySelector('.title')
        let titleTwo = document.querySelector('.title-two')
        let graficoThree = document.querySelector('.grafico-three')
        title.style.display = "none";
        grafico.style.display = "none";
        graficoTwo.style.display = "none";
        titleTwo.style.display = "block";
        graficoThree.style.display = "block";
    }

    grafThree = () => {
        let grafico = document.querySelector('.grafico-one')
        let graficoTwo = document.querySelector('.grafico-two')
        let title = document.querySelector('.title')
        let titleTwo = document.querySelector('.title-two')
        let graficoThree = document.querySelector('.grafico-three')
        title.style.display = "block";
        grafico.style.display = "block";
        graficoTwo.style.display = "block";
        titleTwo.style.display = "none";
        graficoThree.style.display = "none";
    }

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>Semantix</li>
                        <li class="active page1" onClick={this.grafThree}><i class="fas fa-circle-notch"></i><p>Page 1</p></li>
                        <li class="page2"><i class="fas fa-leaf" onClick={this.grafOneTwo}></i><p>Page 2</p></li>
                    </ul>
                </nav>
            </div>
            )
        }
}
    



