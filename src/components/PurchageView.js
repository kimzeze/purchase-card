import React from 'react';

const PurchageView = () => {
  return (
    <div className="product">
      <img
        src="public/assets/productImage.svg"
        alt="상품 이미지"
        className="product__img"
      />
      <h1 className="product__title">래피젠 코로나 자가 검사 2개입X1박스</h1>
      <div className="product__price">
        <span className="">88%</span>
        <span className="">56,750원</span>
        <span className="">6,370원</span>
      </div>
    </div>
  );
};

export default PurchageView;
