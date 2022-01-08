const  action = {type: "", payload:""}
class Store {
    constructor(reducer,init){
            this.reducer = reducer
            this.init = init
    }
getState(){
        return this.state
    }
}


const reducer = (store,action)=>{
    return store
}
const init  = {count:10}

const store = new Store(reducer,init)
console.log(store.getState());