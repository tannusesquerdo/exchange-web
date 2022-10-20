import {useQuery} from '@tanstack/react-query';

const getRates = async (currency_code) => {
    const response = await fetch(
      `https://exchange-api-tannus.herokuapp.com/exchange/${currency_code}/rates_for`
    );
    const data = await response.json();
    return data;
}

function useRates(currency_code) {
  return useQuery(["rates"], () => getRates(currency_code), 
  { refetchOnWindowFocus: false, cacheTime: 86400 });
}

export default useRates;