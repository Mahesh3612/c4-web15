import { createStore } from "redux";
import { reducer } from "./reducer";


const init = {log:true}
export const store = createStore(reducer,init);
