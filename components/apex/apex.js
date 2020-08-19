import React, { Component } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import styles from './apex.module.css'
import Donat from './donat'
import ColumnBar from './column-bar'
import Graph from './graphicBox'
import Transaction from './transactionPerson'
import Button from '../button/button'
import TextTitle from '../textTitle/text-title'

function ApexChart() {
  return (
    <div className={styles.apexBox}>
      <div className={styles.apexBoxHead}>
        <div className={styles.columnBarBox}>
          <ColumnBar />
        </div>
        <div className={styles.graphsBox}>
          <Graph graphHead="Orders" graphData="12.394" />
          <Graph graphHead="Returns" graphData="321" color="blue" />
          <Graph graphHead="Sale" graphData="458.42" color="yellow" />
        </div>
      </div>
      <div className={styles.apexBoxBottom}>
        <div className={styles.donutBox}>
          <Donat />
        </div>
        <div className={styles.personListBox}>
          <div className={styles.personListTop}>
            <TextTitle bold>Transactions</TextTitle>
            <Button>SEE ALL</Button>
          </div>
          <div>
            <div className={styles.personListHeaders}>
              <span className={styles.id}>Id</span>
              <span className={styles.name}>Name</span>
              <span className={styles.date}>Date</span>
              <span className={styles.amount}>Amount</span>
            </div>
            <div className={styles.transactionsBoxes}>
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
            </div>
          </div>
        </div>
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
