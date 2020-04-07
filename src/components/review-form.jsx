import React from "react";

import { ReactComponent as Star } from "../assets/star-empty.svg";
import { ReactComponent as FullStar } from "../assets/star-full.svg";

const ReviewForm = () => {
  const [stars, setStars] = React.useState(0);
  const _content = React.useRef();

  const renderStar = () => {
    let stars_arr = [];

    for (let i = 1; i < stars + 1; i++) {
      stars_arr.push(
        <FullStar
          id={stars_arr.length + 1}
          className="star"
          onClick={e => countStar(e)}
        />
      );
    }
    for (let i = 1; i < 6 - stars; i++) {
      stars_arr.push(
        <Star
          id={stars_arr.length + 1}
          className="star"
          onClick={e => countStar(e)}
        />
      );
    }

    return stars_arr;
  };

  const countStar = e => {
    return setStars(e.target.id * 1);
  };

  const submitReview = event => {
    event.preventDefault();
    console.log(stars);
    console.log(_content.current.value);
  };

  return (
    <>
      <section className="review">
        <header>여행 후기</header>
        <div className="review-form-container">
          <form action="" className="review-form" onSubmit={submitReview}>
            <label htmlFor="">별점</label>
            <div className="stars">{renderStar()}</div>

            <label htmlFor="">후기 내용</label>
            <textarea
              type="textarea"
              name="title"
              className="review-form__textarea"
              ref={_content}
            />
            <button type="submit" className="review-form__btn">
              작성하기
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ReviewForm;

/*
<select name="product" id="product-select">
<option value="">런던 워킹 투어</option>
<option value="">해리포터 스튜디오 티켓</option>
</select>
*/
