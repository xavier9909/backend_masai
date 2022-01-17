import { loadData, saveData } from "../../utils/localstorage";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_USER } from "./actionType";


const initState={token:loadData("token")||"",isAuth:false}

export const reducer=(state=initState,{type,payload})=>{

switch(type){

    case LOGIN_SUCCESS:
        saveData("token",payload)
        return {
            ...state,
            isAuth:true,
            token:payload,
            
        };
    case LOGIN_FAILURE:{
        saveData("token","")
         return {
             ...state,
             isAuth:false,
             token:""
         }
    }    
    default:
        return state;   
    
}





};