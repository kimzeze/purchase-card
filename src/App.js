import React, { useState } from "react";
import "./style.css";

/* import PurchageView from "./components/PurchageView";
import Delivery from "./components/Delivery";
import CountButton from "./components/CountButton";
import OrderTotal from "./components/OrderTotal";
import PurchageButton from "./components/PurchageButton"; */

import {
  PurchageView,
  Delivery,
  CountButton,
  OrderTotal,
  PurchageButton,
} from "./components/index";

export default function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="App">
      <PurchageView />
      <Delivery />
      <CountButton count={count} setCount={setCount} />
      <OrderTotal count={count} setCount={setCount} />
      <PurchageButton />
      {/* <h1>아좌아좌~! 김도현 18:20분 시작</h1> */}
    </div>
  );
}
