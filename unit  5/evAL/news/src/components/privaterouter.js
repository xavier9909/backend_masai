import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";



export const PrivateRoute=({children})=>{

    const {token,isAuth}=useSelector(state=> ({token:state.auth.token, isAuth:state.auth.isAuth }));
    console.log(token)

    if(!(token.length>2)) {return <Navigate to={"/login"}/>}

    
    return children
}