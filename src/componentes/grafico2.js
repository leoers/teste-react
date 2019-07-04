import React from 'react';
import { Pie } from 'react-chartjs-2';
import urlPie from '../anual-percentage.json'


const DashboardBarChartPie = () => {
    const data = {
      labels: urlPie.map(item => item.label),
      datasets: [{
          data: urlPie.map(item => item.value),
          backgroundColor: ["#18A0FB", "#1BC47D", "#d0cffe"],
          
        },
    ]
    };
    return <Pie data={data} />;
  };

  export default class Dashboard extends React.PureComponent {
    renderDashboardStatistics = () => {};
    
    render() {
        return (
            <div style={{position:"relative", maxWidth:600, maxHeight:550}}>
                <DashboardBarChartPie options={{
                    responsive: true
                    }}/> 
            </div>
            
        );
      }
    }