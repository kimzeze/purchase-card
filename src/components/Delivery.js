import React from "react";

export const Delivery = () => {
  return (
    <div className="delivery">
      <div className="delivery__info">
        <span className="delivery__type">택배 배송</span>
        <span className="line"></span>
        <span className="delivery__price">3,000원</span>
        <span className="delivery__payment"> (주문시 결제)</span>
      </div>
      <span className="delivery__max">10개마다 부과</span>
    </div>
  );
};

export default Delivery;
