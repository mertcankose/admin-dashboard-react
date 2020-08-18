import React, { Component } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import styles from './apex.module.css'

var state = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: 'donut',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  },
}

function ApexChart() {
  return (
    <div className={styles.apexBox}>
      <div className={styles.donutBox}>
        <Chart options={state.options} series={state.series} type="donut" />
      </div>
      <div className={styles.donutBox}>
        <Chart options={state.options} series={state.series} type="donut" />
      </div>
    </div>
  )
}

export default ApexChart

/*
import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

*/
