import React from "react";
import { connect } from "react-redux";
import ProductCard from "./product-card";

const data = [
  {
    id: 7,
    name: "구엘공원 입장권",
    description:
      "바르셀로나 최대의 명소, 유네스코 세계문화유산에 등재된 아름다운 구엘 공원을 방문하세요.",
    start_date: "2020-07-02",
    end_date: "2020-07-02",
    available_start_date: "2020-01-01",
    available_end_date: "2020-12-31",
    adult_price: 10000,
    youth_price: 5000,
    location: "08024 Barcelona, Spain",
    photo: "",
    category: "ticket",
    city: "Barcelona",
    country: "Spain",
    createdAt: ""
  },
  {
    id: 8,
    name: "몬세라트 투어",
    description: "몬세라트, 카탈루냐 지방의 성지",
    start_date: "2020-01-17",
    end_date: "2020-01-17",
    available_start_date: "2020-03-01",
    available_end_date: "2020-07-15",
    adult_price: 40000,
    youth_price: 40000,
    location: "08691 Barcelona Spain",
    photo: "",
    category: "tour",
    city: "Barcelona",
    country: "Spain",
    createdAt: ""
  },
  {
    id: 8,
    name: "몬세라트 투어",
    description: "몬세라트, 카탈루냐 지방의 성지",
    start_date: "2020-01-17",
    end_date: "2020-01-17",
    available_start_date: "2020-03-01",
    available_end_date: "2020-07-15",
    adult_price: 40000,
    youth_price: 40000,
    location: "08691 Barcelona Spain",
    photo: "",
    category: "tour",
    city: "Barcelona",
    country: "Spain",
    createdAt: ""
  },
  {
    id: 8,
    name: "몬세라트 투어",
    description: "몬세라트, 카탈루냐 지방의 성지",
    start_date: "2020-01-17",
    end_date: "2020-01-17",
    available_start_date: "2020-03-01",
    available_end_date: "2020-07-15",
    adult_price: 40000,
    youth_price: 40000,
    location: "08691 Barcelona Spain",
    photo: "",
    category: "tour",
    city: "Barcelona",
    country: "Spain",
    createdAt: ""
  },
  {
    id: 8,
    name: "몬세라트 투어",
    description: "몬세라트, 카탈루냐 지방의 성지",
    start_date: "2020-01-17",
    end_date: "2020-01-17",
    available_start_date: "2020-03-01",
    available_end_date: "2020-07-15",
    adult_price: 40000,
    youth_price: 40000,
    location: "08691 Barcelona Spain",
    photo: "",
    category: "tour",
    city: "Barcelona",
    country: "Spain",
    createdAt: ""
  },
  {
    id: 8,
    name: "몬세라트 투어",
    description: "몬세라트, 카탈루냐 지방의 성지",
    start_date: "2020-01-17",
    end_date: "2020-01-17",
    available_start_date: "2020-03-01",
    available_end_date: "2020-07-15",
    adult_price: 40000,
    youth_price: 40000,
    location: "08691 Barcelona Spain",
    photo: "",
    category: "tour",
    city: "Barcelona",
    country: "Spain",
    createdAt: ""
  },
  {
    id: 8,
    name: "몬세라트 투어",
    description: "몬세라트, 카탈루냐 지방의 성지",
    start_date: "2020-01-17",
    end_date: "2020-01-17",
    available_start_date: "2020-03-01",
    available_end_date: "2020-07-15",
    adult_price: 40000,
    youth_price: 40000,
    location: "08691 Barcelona Spain",
    photo: "",
    category: "tour",
    city: "Barcelona",
    country: "Spain",
    createdAt: ""
  },
  {
    id: 8,
    name: "몬세라트 투어",
    description: "몬세라트, 카탈루냐 지방의 성지",
    start_date: "2020-01-17",
    end_date: "2020-01-17",
    available_start_date: "2020-03-01",
    available_end_date: "2020-07-15",
    adult_price: 40000,
    youth_price: 40000,
    location: "08691 Barcelona Spain",
    photo: "",
    category: "tour",
    city: "Barcelona",
    country: "Spain",
    createdAt: ""
  }
];

const LikedProducts = props => {
  React.useEffect(() => {
    if (!props.customer.isLoggedIn) {
      alert("로그인 해주세요.");
      window.location.href = "/user/signup";
    }
  });

  return (
    <div className="liked-products">
      <div className="liked-products__title">찜 목록</div>
      <div className="liked-products__list">
        {data.map(productData => {
          return <ProductCard data={productData} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(LikedProducts);
