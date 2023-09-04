// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = item
  return (
    <li className="list-item">
      <div className="currency-name-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p>{currencyName}</p>
      </div>
      <div className="currency-value-container">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
