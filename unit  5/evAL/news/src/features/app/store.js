import {createStore, combineReducers} from "redux";

import { reducer  as jobReducer }  from "./reducer.js"
import {reducer as authReducer}  from "../auth/reducer";


const rootReducer=combineReducers({
      auth:authReducer,
      app:jobReducer 
})



export const store=createStore(rootReducer);

console.log(store.getState())