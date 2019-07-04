import React from 'react';
import { Pie } from 'react-chartjs-2';
import url from '../anual-percentage.json'


const DashboardBarChart = () => {
    const data = {
      labels: url.map(item => item.label),
      datasets: [{
          data: url.map(item => item.value),
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
                <DashboardBarChart options={{
                    responsive: true
                    }}/> 
            </div>
            
        );
      }
    }