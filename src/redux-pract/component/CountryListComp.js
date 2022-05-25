import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getcountryList,searchdata} from '../redux/actionCreater/action'
import  './style.css'

 class CountryListComp extends Component {
   
  constructor(props)
   {
     super(props)
     this.state={
      mcountry:[] 
     }
   }
   
   handleSearch=(e)=>{
    let ar=[];  
    this.props.searchdata(e.target.value)
        
    let sarchval=e.target.value.toUpperCase();
    console.log(this.props.mycountry)

    this.props.mycountry && this.props.mycountry.forEach(element => {
        if(element.toUpperCase().includes(sarchval))
        {
          ar.push(element)
        }
    });
    console.log(ar)
    this.setState({mcountry:ar})
   }

   componentDidMount(){
     this.props.getcountryList();
     this.setState({mcountry:this.props.mycountry})
     console.log(this.props.mycountry)
     console.log("componentdidMount")
   }

   componentDidUpdate(prevProps){
     if(prevProps!==this.props)
     {
      this.setState({mcountry:this.props.mycountry})
     }
     console.log(this.props.mycountry)
   }

  render() {
   const{mycountry}=this.props
    return (
      <div className='container'>
         <input type='text' className='srch' onChange={this.handleSearch}>
          
         </input>
          
           <div className='tbl'>Country</div>   
          
          {
         this.state.mcountry && this.state.mcountry.map((country)=><div className='tbl'>{country}</div>)   
          }
        
      </div>
  )
  }
}

const mapstateToProps=(state)=>{
  return{
      mycountry:state.countryList
  } 
}

const mapstateToDispatch=(dispatch)=>{
   return{
       getcountryList:()=>dispatch(getcountryList()),
       searchdata:()=>dispatch(searchdata())
   }
}
export default connect(mapstateToProps,mapstateToDispatch)(CountryListComp)
