import React from 'react';
import { Bar } from 'react-chartjs-2';
import urlBar from '../anual-result.json'


const DashboardBarChartBar = () => {
    const data = {
      labels: urlBar.map(item => item.label),
      datasets: [{
          label: "Azul",
          data: urlBar.map(item => item.value),
          backgroundColor: "#18A0FB"
        }],
        options: {
          legend: {
              display: false,
          }
      }
    };
    return <Bar data={data} />;
  };

  export default class Dashboard extends React.PureComponent {
    renderDashboardStatistics = () => {};
    
    render() {
        return (
            <div style={{position:"relative", maxWidth:600, maxHeight:550}}>
                <DashboardBarChartBar options={{
                    responsive: true
                    }}/> 
            </div>
            
        );
      }
    }