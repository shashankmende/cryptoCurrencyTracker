// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrencyTracker extends Component {
  state = {cryptoList: []}

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log('data=', data)
    const updateData = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      currencyLogo: each.currency_logo,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))
    console.log('update data', updateData)
    this.setState({
      cryptoList: updateData,
    })
  }

  render() {
    const {cryptoList} = this.state
    return (
      <div className="bg-container">
        <CryptocurrenciesList />
        <ul className="items-container">
          <div className="header-container">
            <h1>Coin Type</h1>
            <div className="usd-euro-container">
              <h1>USD</h1>
              <h1>EURO</h1>
            </div>
          </div>
          {cryptoList.map(each => (
            <CryptocurrencyItem item={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default CryptocurrencyTracker
