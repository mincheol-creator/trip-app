import React from "react";

import "../scss/styles.scss";

import API from "../API";

class ProductPage extends React.Component {
  componentDidMount() {
    const id = "1";
    API.selectProduct(id).then(response => {
      if (response.data.message) {
        alert("조회 되었습니다!");
        this.setState({
          productData: response.data.productData
        });
      } else {
        alert("조회 실패했습니다");
      }
    });
  }

  handleClick = () => {
    return alert();
  };

  constructor() {
    super();
    this.state = {
      productData: ""
      // dummy data
      /* productData: {
        id: 1,
        name: "루브르 집중 투어",
        description:
          "소장품의 수와 질 면에서 메트로폴리탄 미술관과 대영박물관과 함께 세계적으로 손꼽히는 박물관, 루브르! 모두의 트립에서 전문적인 가이드와 함께하세요!",
        start_date: "2020-01-03",
        end_date: "2020-01-03",
        available_start_date: "2020-01-01",
        available_end_date: "2020-04-30",
        adult_price: 35000,
        youth_price: 25000,
        location: "Rue de Rivoli, 75001 Paris, France",
        photo: "",
        category: "tour",
        city: "Paris",
        country: "France",
        createdAt: ""
      } */
    };
  }

  render() {
    /*     const {
      id,
      name,
      description,
      start_date,
      end_date,
      available_start_date,
      available_end_date,
      adult_price,
      youth_price,
      location,
      photo,
      category,
      city,
      country,
      createdAt
    } = this.state.productData; */
    return (
      <div className="product">
        <section className="product-main">
          상품명 : {this.state.productData.name}
          <br /> 설명 : {this.state.productData.description}
          <br /> 시작 날짜 : {this.state.productData.start_date}
          <br /> 종료 날짜 : {this.state.productData.end_date}
          <br />
          이용 가능 시작 날짜 : {this.state.productData.available_start_date}
          <br /> 이용 가능 종료 날짜 :{" "}
          {this.state.productData.available_end_date}
          <br /> 위치 : {this.state.productData.location}
          <br /> 사진 : {this.state.productData.photo}
          <br />
          종류 : {this.state.productData.category}
          <br /> 도시 : {this.state.productData.city}
          <br /> 나라 : {this.state.productData.country}
          <br />
        </section>
        <section className="product-side">
          <div className="product-side__price">
            어른 가격 : {this.state.productData.adult_price}
            <br /> 어린이 가격 : {this.state.productData.youth_price}
          </div>
          <button onClick={this.handleClick}>구매하기</button>
          <button>🤍 찜 목록에 넣기</button>
        </section>

        {/* <Slick /> */}
        {/*  */}
      </div>
    );
  }
}
export default ProductPage;
