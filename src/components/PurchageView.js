import React from "react";

const PurchageView = () => {
  return (
    <div className="product">
      <img
        src="/assets/productImage.svg"
        alt="상품 이미지"
        className="product__img"
      />
      <h1 className="product__title">
        래피젠 코로나 자가 검사 키트 <br></br> 2개입X1박스
      </h1>
      <div className="product__price">
        <span className="discountRate">88%</span>
        <div className="price">
          <span className="fixedPrice">56,750원</span>
          <span className="discountPrice">6,370원</span>
        </div>
      </div>
    </div>
  );
};

export default PurchageView;
