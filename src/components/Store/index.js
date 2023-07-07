
import { createStore } from "redux";
  const intialstate={
    counter:0,
  }
const counterReducer = (state=intialstate, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    case "incrementbypayload":
      return {
        counter: state.counter + action.value,
      };
    case "decrementbypayload":
      return {
        counter: state.counter - action.value,
      };

    default:
      return state;
  }
};


const store = createStore(counterReducer);


export  default store