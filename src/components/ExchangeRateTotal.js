import React from 'react'

const ExchangeRateTotal = ({ammount, rate, currency}) => {
  const numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency
    }).format(value);

  return (
    <div>
      <div>Exchange Rate</div>
      <span className='ammount'>{numberFormat(ammount*parseFloat(rate))}</span>
    </div>
  )
}

export default ExchangeRateTotal