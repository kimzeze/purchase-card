import React from 'react';
import './style.css';

import PurchageView from './components/PurchageView';
import Delivery from './components/Delivery';
import CountButton from './components/CountButton';
import OrderTotal from './components/OrderTotal';

export default function App() {
  return (
    <div className="App">
      <PurchageView />
      <Delivery />
      <CountButton />
      <OrderTotal />
      {/* <h1>아좌아좌~! 김도현 18:20분 시작</h1> */}
    </div>
  );
}
