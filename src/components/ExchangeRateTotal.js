import React from 'react'

const ExchangeRateTotal = ({ammount, rate, to, from}) => {
  const numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: to
    }).format(value);

  return (
    <div>
      <div>Exchange Rate</div>
      <span className='ammount' data-testid="ammount-total">{numberFormat(ammount*parseFloat(rate))}</span>
      <p className='text-small'>That's 1 {from} = {rate} {to}</p>
    </div>
  )
}

export default ExchangeRateTotal