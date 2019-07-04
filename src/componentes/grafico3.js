import React from 'react';
import { Line } from 'react-chartjs-2';
import url from '../time-data.json'

const DashboardBarChart = () => {
    const data = {
      labels: url.today.map(item => item.label),
      type: "line",
      datasets: [{
          label: "Today",
          data: url.today.map(item => item.value),
          backgroundColor: "#01008e", 
          borderColor: "#01008e",
          fill: false
        },
        {
          label: "Yesterday",
          data: url.yesterday.map(item => item.value),
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
                <DashboardBarChart options={{
                    responsive: true
                    }}/> 
            </div>
            
        );
      }
    }