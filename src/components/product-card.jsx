import React from "react";

const ProductCard = ({ data }) => {
  const [liked, setLiked] = React.useState(false);

  const handleClick = () => {
    window.location.href = `/product/${data.id}`;
  };
  // console.log(data);

  const currencyFormat = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const addToLikes = (event) => {
    event.stopPropagation();
    // window.location.href = `/user/likes`;
    setLiked(!liked);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="product-card-top">
        <div className="product-card-top__photo">
          <img src={`http://localhost:8181/image/${data.photo}`} alt="Tour" />
        </div>
        <div className="product-card-top__heart">
          {liked ? (
            <>
              <svg
                id="color"
                className="product-card-top__heart-red"
                onClick={addToLikes}
                enable-background="new 0 0 24 24"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m11.466 22.776c.141.144.333.224.534.224s.393-.08.534-.224l9.594-9.721c4.001-4.053 1.158-11.055-4.532-11.055-3.417 0-4.985 2.511-5.596 2.98-.614-.471-2.172-2.98-5.596-2.98-5.672 0-8.55 6.984-4.531 11.055z"
                  fill="#f44336"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                className="product-card-top__heart-empty"
                onClick={addToLikes}
                id="regular"
                enableBackground="new 0 0 24 24"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m11.466 22.776c.141.144.333.224.534.224s.393-.08.534-.224l9.594-9.721c2.491-2.523 2.491-6.63 0-9.154-1.21-1.226-2.819-1.901-4.532-1.901s-3.321.675-4.531 1.9l-1.065 1.08-1.065-1.079c-1.21-1.226-2.819-1.901-4.531-1.901-1.713 0-3.322.675-4.532 1.901-2.491 2.524-2.491 6.631 0 9.153zm-8.527-17.822c.926-.937 2.157-1.454 3.464-1.454 1.308 0 2.538.517 3.463 1.455l1.599 1.62c.281.285.786.285 1.067 0l1.599-1.621c.928-.937 2.158-1.454 3.465-1.454 1.308 0 2.538.517 3.464 1.454 1.917 1.943 1.917 5.104 0 7.048l-9.06 9.181-9.061-9.182c-1.917-1.942-1.917-5.104 0-7.047z" />
              </svg>
            </>
          )}
        </div>
      </div>
      <div className="product-card-bottom">
        <div className="product-card-bottom__title">{data.name}</div>
        <div className="product-card-bottom__review">
          <span className="stars">⭐️ 4.5</span>
          <span className="reviews">(200개의 후기)</span>
        </div>
        <div className="product-card-bottom__price">
          {/* currencyFormat */ data.adult_price}원 / 1인
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
