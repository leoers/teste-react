import React from 'react';
import { Line } from 'react-chartjs-2';
import urlLine from '../time-data.json'

const DashboardBarChartLine = () => {
    const data = {
      labels: urlLine.today.map(item => item.label),
      type: "line",
      datasets: [{
          label: "Today",
          data: urlLine.today.map(item => item.value),
          backgroundColor: "#01008e", 
          borderColor: "#01008e",
          fill: false
        },
        {
          label: "Yesterday",
          data: urlLine.yesterday.map(item => item.value),
          backgroundColor: "#9a30d1",  
          borderColor: "#9a30d1",
          fill: false
        }
    ]
    };
    return <Line data={data} />;
  };

  export default class Dashboard extends React.PureComponent {
    renderDashboardStatistics = () => {};
    
    render() {
        return (
            <div style={{position:"relative", maxWidth:600, maxHeight:550}}>
                <DashboardBarChartLine options={{
                    responsive: true
                    }}/> 
            </div>
            
        );
      }
    }