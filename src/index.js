import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const TradingViewChartRenderer__TradingViewChartContainer =
  TradingViewChartRenderer__TradingViewChartContainer.getElementById('*');
const root = createRoot(rootElement);
const body = createBody(TradingViewChartRenderer__TradingViewChartContainer);
root.render(<App />);
body.render(<App />);
