

function Reducer(state,action) {
  switch(action.type){
    case "SUCCESS" : 
        return {...state,
        user : action.payload.items,
        totalCount : action.payload.total_count<20 ? action.payload.total_count :  Math.ceil(action.payload.total_count/10),
        loading: false,
        error : false,
        }
    case "LOADING" : 
     return {
        ...state,
        loading : true,
        error: false
     }    
    case "ERROR":
    return {
        ...state,
        error:true,
        loading : false
    }
    default:
        return state
  }
}

export default Reducer
