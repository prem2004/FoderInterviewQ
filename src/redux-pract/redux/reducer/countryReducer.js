import {SET_LOADING,FETCH_COUNTRYLIST} from '../../constantType'

const initialstate={
    loading:false,
    countryList:[]
}

const countryReducer=(state=initialstate,action)=>{
switch(action.type)
{
    case SET_LOADING:
        return{
            ...state,
            loading:action.payload
        }

      case FETCH_COUNTRYLIST :
          return{
           ...state,
           countryList:action.payload,
           loading:false  
          }


    default:
        return state
}
}

export default countryReducer