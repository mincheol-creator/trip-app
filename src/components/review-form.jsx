import React from "react";

import { ReactComponent as Star } from "../assets/star-empty.svg";
import { ReactComponent as FullStar } from "../assets/star-full.svg";
import API from "../API";

const ReviewForm = ({ data }) => {
  const [stars, setStars] = React.useState(0);
  const _content = React.useRef();
  const [option, setOption] = React.useState("");
  const [optionList, setOptionList] = React.useState([]);

  React.useEffect(() => {
    if (data.length > 1) {
      setOptionList(data);
      setOption(data[0].orders[0].product_id);
    }
  }, []);

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
    const product_id = option; // product_id
    const star = stars; // 별점 개수
    const content = _content.current.value; // 리뷰내용
    const order_number = data.filter(data => {
      return data.orders[0].product_id === product_id;
    })[0].orders[0].order_number;
    API.addReview(product_id, star, content, order_number).then(response => {
      if (response.data.message) {
        alert("후기가 작성되었습니다!");
        setStars(0);
      } else {
        alert("후기 작성에 실패했습니다. 다시 시도해주세요");
      }
    });
  };

  return (
    <section className="review">
      {data.length > 1 ? (
        <>
          <header>여행 후기</header>
          <div className="review-form-container">
            <form action="" className="review-form" onSubmit={submitReview}>
              <div className="review-product">
                <label htmlFor="">상품 선택</label>
                <select
                  name="product"
                  id="product-select"
                  value={option}
                  onChange={e => setOption(e.target.value)}
                >
                  {optionList.map(option => {
                    return (
                      <option value={option.orders[0].product_id}>
                        {option.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="review-star">
                <label htmlFor="">별점</label>
                <div className="stars">{renderStar()}</div>
              </div>

              <div className="review-content">
                <label htmlFor="">후기 내용</label>
                <textarea
                  type="textarea"
                  name="title"
                  className="review-form__textarea"
                  ref={_content}
                />
              </div>
              <button type="submit" className="review-form__btn">
                작성하기
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="review-alert-text">작성 할 후기가 없습니다.</div>
      )}
    </section>
  );
};

export default ReviewForm;

/*
    option value에 product id 
*/
