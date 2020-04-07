import React from "react";

const ReviewForm = () => {
  return (
    <div className="review-form-container">
      <form action="" className="review-form">
        <div className="stars" data-rate="1"></div>
        <textarea type="textarea" name="title" className="review-textarea" />
        <button type="submit">작성하기</button>
      </form>
    </div>
  );
};

export default ReviewForm;

/*
<select name="product" id="product-select">
<option value="">런던 워킹 투어</option>
<option value="">해리포터 스튜디오 티켓</option>
</select>
*/
