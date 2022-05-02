import { LOGIN } from "./actions";

const init = {};

export const reducer = (store,{ type, payload }) => {
  switch (type) {
    case LOGIN:
      return {...store,log:payload}
    default:
      return store;
  }
};
