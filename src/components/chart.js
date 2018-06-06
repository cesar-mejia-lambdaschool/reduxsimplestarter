import React from 'react'
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines'
import _ from 'lodash'

const average = (data) => {
  return _.round(_.sum(data) / data.length)
}

const Chart = (props) => {
  return (
    <div className='chart'>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='mean' />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  )
}

export default Chart
