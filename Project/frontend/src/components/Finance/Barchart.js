import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'
import React from 'react'

export default function Barchart({chartData}) {
  return (
    <Bar data={chartData} options={
      {
        scales: {
          y:
            {
              min: 0,
              max: 100,              
              grace: '5%',
              ticks:{
                stepSize: 5,
                callback: function(values, index){
                  
                  return values+' K'                  
                },  
              }
            },
          x:
            {
              
            },
        },
      }
    } />
  )
}
