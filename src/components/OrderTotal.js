import React, { useState, useEffect } from "react";
import CountButton from "./CountButton";

const OrderTotal = (props) => {
  const [prevValue, totalValue] = useState(6370);
  // const count = props.count;

  // useEffect(() => {
  //   console.log(props);
  // }, []);

  return (
    <div className="orderTotal">
      <div className="priceInfo">
        <span className="priceInfo__text">총 상품 금액</span>
        <button className="priceInfo__button">?</button>
      </div>
      <div className="totalPrice">
        <span className="totalPrice__count">총 수량 1개</span>
        <span className="line"></span>
        <span className="totalPrice__value">{prevValue}원</span>
      </div>
    </div>
  );
};

export default OrderTotal;
