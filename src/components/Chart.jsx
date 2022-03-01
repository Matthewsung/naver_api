import {
  XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
  BarChart,
  Bar
} from 'recharts';
//style
import styled from 'styled-components'

const ChartComponent = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`
const Chart = ({ finalData }) => {
  
  return (
    <>
      <ChartComponent>
        <BarChart
          width={1040}
          height={300}
          data={finalData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
          />
          <XAxis 
            dataKey="period" 
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar 
            dataKey="teen" 
            fill="#c8d182" 
            barSize={20}
          />
          <Bar 
            dataKey="twe" 
            fill="#de8274" 
            barSize={20}
          />
          <Bar 
            dataKey="third" 
            fill="#8884d8" 
            barSize={20}
          />
          <Bar 
            dataKey="forth" 
            fill="#626971" 
            barSize={20}
          />
          <Bar 
            dataKey="fifth" 
            fill="#84335c" 
            barSize={20}
          />
          <Bar 
            dataKey="sixth" 
            fill="#1d2057" 
            barSize={20}
          />
        </BarChart>
      </ChartComponent>
    </>
  )
}

export default Chart;