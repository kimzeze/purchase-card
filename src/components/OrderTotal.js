import React, { useState, useEffect } from 'react';

const OrderTotal = ({ props }) => {
  // const [prevCount, totalCount] = useState(1);
  const [prevValue, totalValue] = useState(6370);
  console.log(props);

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div className="OrderTotal">
      <div className="priceInfo">
        <span className="priceInfo__text">총 상품 금액</span>
        <button className="priceInfo__button" onClick="">
          ?
        </button>
      </div>
      <div className="totalPrice">
        <span className="totalPrice__count">총 수량 1개</span>
        <span className="line"></span>
        <span className="totalPrice__value">원</span>
      </div>
    </div>
  );
};

export default OrderTotal;
