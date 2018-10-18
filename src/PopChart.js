import * as React from 'react'
import Chart from 'react-apexcharts'

class PopChart extends React.Component{
 constructor(props) {
  super(props)

 this.state = {
  btnLabel: true,
  // Apex config
  options: {
   chart: {
    background: '#f4f4f4',
    foreColor: '#333',
   },
   xaxis: {
    type: 'categories',
    categories: [
     'New York',
     'Los Angeles',
     'Houston',
     'Philadelphia',
     'Phoenix',
     'San Antonio',
     'San Diego',
     'Dallas',
     'San Jose'
    ],
    labels: {
     show: true,
     rotate: -45
    }
   },
   plotOptions: {
    bar: {
     horizontal: false,
     dataLabels: { position: 'top'} 
    }
   },
   fill: {
    colors: ['#f44336']
   },
   dataLabels: {
    enabled: false 
   },
   title: {
     text: 'Largest US Cities By Population',
     align: 'center',
     margin: 20,
     offsetY: 20,
     style: {
      fontSize: '1.4rem'
     }
   },
  },
  series: [
   {
    name: 'Population',
    data: [
     8550405,
     3971883,
     2720546,
     2296224,
     1567442,
     1563025,
     1469845,
     1394928,
     1300092,
     1026908
    ]
    
   }
  ] // series
   
  
  
 } //state
 } // constructor

rotateHandler = () => {
   
 this.setState({options: {
  ...this.state.options,
  plotOptions: {
   ...this.state.options.plotOptions,
   bar: {
    ...this.state.options.plotOptions.bar, 
     horizontal: !this.state.options.plotOptions.bar.horizontal  
   }
  }
 },
  btnLabel: !this.state.btnLabel
 })
}

 render(){
  return(
   <React.Fragment>
    <Chart 
    options={this.state.options}
    series={this.state.series}
    type="bar"
    height="450"
    width="100%"
   />
    <button onClick={this.rotateHandler}>{this.state.btnLabel === false ? 'Vertical' : 'Horizontal'}</button>
   </React.Fragment>
  )
 }
}

export default PopChart