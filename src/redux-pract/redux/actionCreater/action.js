// import store from "../store"


// export const buycake=(dispatch, getState)=>{
// store.dispatch({type:"Buy_CAKE"})
// }
import {SET_LOADING,FETCH_COUNTRYLIST} from '../../constantType'
const country=['Indai','AMERIKA','uk','us','Brajil','Norway','jarmany','poland']


// const thunkFunction = (dispatch, getState) => {

// export const getcountryList=(dispatch,getState)=>{
       
//     dispatch(fetchCon(country))

   
// }


// export const getcountryList=()=>{
//     return{
//         type:FETCH_COUNTRYLIST,
//         payload:country
//     }   
// }


export const getcountryList=()=>async(dispatch)=>{
  dispatch({
      type:FETCH_COUNTRYLIST,
      payload:country
  })
}

export const searchdata=(data)=>(dispatch,getState)=>{
  let ar=[];
 
  getState.country && getState.country.forEach(element => {
    if(element.toUpperCase().includes(data.toUpperCase))
    {
     ar.push(element)
    }
  });
 console.log('searchdata action')
 console.log(ar)
}