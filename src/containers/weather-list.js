import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google-map'

class WeatherList extends Component {
  renderWeather ({ city, list }) {
    const { id, coord } = city
    const { lat, lon } = coord
    const temps = list.map((weather) => weather.main.temp)
    const pressure = list.map((weather) => weather.main.pressure)
    const humidity = list.map((weather) => weather.main.humidity)

    return (
      <tr key={id}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={temps} color='red' units='Celsius' />
        </td>
        <td>
          <Chart data={pressure} color='blue' units='hPa' />
        </td>
        <td>
          <Chart data={humidity} color='green' units='%' />
        </td>
      </tr>
    )
  }
  render () {
    console.log('weather', this.props.weather)
    const { weather } = this.props
    return (
      <div className='weather-list'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>City</th>
              <th>
                Temperature (<sup>o</sup>C)
              </th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>{weather.map(this.renderWeather)}</tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps ({ weather }) {
  return {
    weather
  }
}
export default connect(mapStateToProps)(WeatherList)
