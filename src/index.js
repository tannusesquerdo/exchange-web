import React from 'react';
import ReactDOM from 'react-dom';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'currency-flags/dist/currency-flags.min.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
