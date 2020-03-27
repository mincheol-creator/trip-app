import CustomerActionTypes from "./customer.types";

/*
 * 초기 STATE 값
 */
const INITIAL_STATE = { customer: "" };

/*
 * REDUCER에서 특정 ACTION TYPE일 때 실행할 함수
 */
// const addItemToCart = (prevItems, newItem) => {
//   //   prevItems.push(newItem); // 여기요 선생님!!! 여기가 문제였어!!!ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
//   console.log(prevItems);
//   if (!!prevItems.find(({ name }) => name === newItem)) {
//     return {
//       cart: prevItems.map(item =>
//         item.name === newItem ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     };
//   }
//   return { cart: [...prevItems, { name: newItem, quantity: 1 }] }; // 이렇게 새 array를 생성했어야 한다
// };

const addCustomer = (prevState, newState) => {
  console.log(newState);
  return newState;
};

/*
 * REDUCER (switch로 ACTION TYPE별로 새로운 STATE를 리턴할 함수 분리)
 */
const customerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CustomerActionTypes.ADD_CUSTOMER:
      return addCustomer(state.customer, action.payload);

    default:
      return state;
  }
};

export default customerReducer;

// 미친 ㅠㅠㅠㅠㅠ push 쓰면 안되는거였다!!!!!
// 리덕스는 절대로!!! 절대로!!! prevState를 직접 바꾸면 안됨!!! 안된다고!!!!!
// ...로 새 어레이를 만들던가 했어야했음. 왜 로거에 prev랑 next랑 같은 값이었는지 알겠네
