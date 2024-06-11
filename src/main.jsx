import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/globalStyles.scss';
import { RoutesForApplication } from './routes/index.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesForApplication />
    </BrowserRouter>
  </React.StrictMode>,
)
