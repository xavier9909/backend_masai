import { GET_JOBS,ADD_JOB,ADD_JOB_SUCCESS, SORT_JOB,FILTER_JOB,APPLY_JOB , ADD_JOB_LOADING,GET_JOB_SUCCESS, ADD_JOB_ERROR} from "./actionType";


export const addjob=(data)=>{

    return {
        type:ADD_JOB,
        payload:data
    }};
    
    
    export const addJobLoading=()=>{
        return {
            type:ADD_JOB_LOADING
        }
    }

    export const addJobError=(err)=>{
        return {
            type:ADD_JOB_ERROR,
            payload:err
        }
    }
    
    export const addJobSuccess=(data)=>{
        return {
            type:ADD_JOB_SUCCESS,
            payload:data
        }
    }

    export const getJobSuccess=(data)=>{
        return {
            type:GET_JOB_SUCCESS,
            payload:data
        }
    }
    
    
    
    export const sortJob=()=>{
        return {
            type:SORT_JOB,
        }
    }

    export const filterJob=()=>{
        return {
            type:FILTER_JOB
        }
    }

    export const applyJob=(id)=>{
        return {
            type:APPLY_JOB,
            payload:id
        }
    }