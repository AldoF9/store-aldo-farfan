import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StoreApp } from './storeApp';

//? UI imports
import 'primereact/resources/themes/soho-dark/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './styles/index.css';
import Header from "./components/Header/Header.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <Header></Header>
      <StoreApp />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
);
