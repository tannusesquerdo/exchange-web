import React from 'react';
import { fireEvent, render, waitForDomChange, debug, waitForElement } from '@testing-library/react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

import App from './App';
import ExchangeRate from './components/ExchangeRate';
import ExchangeRateTotal from './components/ExchangeRateTotal';

it('capture ammount changes', async () => {
  const queryClient = new QueryClient();
  const utils = render(<QueryClientProvider client={queryClient}>
                          <App>
                            <ExchangeRate />
                          </App>
                        </QueryClientProvider>)
  await waitForDomChange();
  const input = utils.getByTestId('input-ammount');
  fireEvent.change(input, {target: {value: 100}});
  expect(input.value).toEqual("100");
})

it('check rate calculation in CAD', async () => {
  const utils = render(<ExchangeRateTotal ammount={1000} rate="1.376877" from="USD" to="CAD" />)

  const total = utils.findByTestId('ammount-total')

  expect((await total).textContent).toEqual("CA$1,376.88");

})

it('check rate calculation in BRL', async () => {
  const utils = render(<ExchangeRateTotal ammount={1000} rate="5.269958" from="USD" to="BRL" />)

  const total = utils.findByTestId('ammount-total')

  expect((await total).textContent).toEqual("R$5,269.96");

})
