/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import './bar.scss'
import { Bar, XAxis, CartesianGrid, YAxis, BarChart, ResponsiveContainer, Tooltip, Legend } from 'recharts';



const BarChartComponent = ({ aspect, title, votes }) => {


  const [data, setData] = useState([])

  useEffect(() => {
    console.log(votes)
    setData(votes.candidates)
  }, [])



  return (
    <div className='chart'>
      <div className="title">{title}</div>

      <ResponsiveContainer width="100%" aspect={aspect}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amout" fill="#8884d8" maxBarSize={25} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartComponent