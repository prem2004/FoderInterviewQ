import React,{useEffect, useState} from 'react'

let obj={
  id: 1,
  pid: null,
  children: [
      {
          id: 2,
          pid: 1,
          children:[{ id:4, pid:2, children:[{id:6, pid:4}]}]
      },
      {id:3, pid:1, children:[{id:5, pid:3}]}
  ]
} 


 


const Home = () => {
const[expand,setExpand]=useState(false)

 const renderData=(obj)=>{
    let total;
    for (const key in obj) {
      if(Array.isArray(obj[key]))
      {
         let ln=obj[key].length;
         for(let i=0;i<ln;i++){
          renderData(obj[key][i])
         }
      }else{
        
       }
    }
   return total
  }

  return(
    <div>
     {
      renderData(obj)
     }
    </div>
  )

}

export default Home
  