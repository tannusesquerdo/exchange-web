import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const getRates = async (currency_code) => {
    const { data } = await axios.get(
      `https://exchange-api-tannus.herokuapp.com/exchange/${currency_code}/rates_for`
    );
    return data;
}

function useRates(currency_code) {
  return useQuery(["rates"], () => getRates(currency_code), 
  { refetchOnWindowFocus: false, cacheTime: 86400 });
}

export default useRates;