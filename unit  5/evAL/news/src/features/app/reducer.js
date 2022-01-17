
import { GET_JOBS,ADD_JOB,ADD_JOB_ERROR,ADD_JOB_SUCCESS, ADD_JOB_LOADING ,APPLY_JOB,FILTER_JOB,SORT_JOB,GET_JOB_SUCCESS} from "./actionType"


const init={jobs:[],loading:false,error:false}
export const reducer=(state=init,{type,payload})=>{

switch(type){

    case ADD_JOB:
        return {
            ...state,
            jobs:[...state.jobs,payload],
        }

    case ADD_JOB_LOADING:     
          return {
            ...state,
            loading:true,
            error:false
        }
    case ADD_JOB_ERROR:
            return {
                ...state,
                error:true,
                loading:false
            }   

            case ADD_JOB_SUCCESS:
                return {
                    ...state,
            jobs:[...state.todos,payload],
            error:false,
            loading:false
                } 
            
            
case GET_JOBS:
    return {
        ...state,
        jobs:payload,
        loading:false
    }

                case GET_JOB_SUCCESS:
                    return {
                        ...state,
                        jobs:payload,
                        loading:false
                    }   

    case FILTER_JOB:
        return {
            ...state,
            jobs:state.jobs.filter((e)=>(e.location===payload)),
            loading:false,
            error:false
        }
    case SORT_JOB:
        return {
            ...state,
            jobs:state.jobs.filter((a,b)=>(a.salary=b.salary)),
            loading:false,
            error:false
        }    
        case APPLY_JOB:
            return {
                ...state,
                jobs:state.jobs.filter((e)=>(e.id===payload))
            };          
                
    default:
        return state;    

}





};