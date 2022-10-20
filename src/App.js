import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import { Spinner } from 'react-bootstrap';

import './App.css';
import ExchangeRate from './components/ExchangeRate';
import useRates from './hooks/useRates'

function App() {
  const [fromCurrency, setFrom] = useState('USD');
  const [toCurrency, setTo] = useState('CAD');
  const { isFetching, refetch, isRefetching } = useRates(fromCurrency);

  const onSelectTo = (code) => {
    setTo(code);
  }

  const onSelectFrom = (code) => {
    setFrom(code);
  }

  React.useEffect(() => {
    refetch()
  }, [fromCurrency, refetch]);

  return (
    <div className="App">
      <p className='py-3 mb-0 text-center'>
        Currency Converter
      </p>
      <header className="App-header">
        <div className='col-xs-12 col-sm-10 col-lg-3'>
          <Card border='light' bg='light' text='dark' className={isFetching && !isRefetching ? 'text-center' : ""} >
            {isFetching && !isRefetching ? <Spinner animation="border" variant="info" /> : <ExchangeRate 
              from={fromCurrency} 
              to={toCurrency}
              setFrom={onSelectFrom} 
              setTo={onSelectTo} />}
          </Card>
        </div>
      </header>
    </div>
  );
}

export default App;
