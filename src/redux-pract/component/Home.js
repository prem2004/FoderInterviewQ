import React,{useState,useEffect} from 'react'

const Home = (props) => {
  const[expand,setExpand]=useState(false)
  const{explorer}=props;

  useEffect(()=>{
   console.log(props)
  },[])


  if(explorer.isFolder)
  {
  return (
     <div style={{paddingLeft:'15px', color:'yellow', background:'black'}}>
        <span onClick={() => setExpand(!expand)}>{props.explorer.name}
          <br/>
        </span>
       {expand && <div style={{paddingLeft:'15px'}}>
          {explorer.items.map((exp) =>{
            return <Home key={exp.name} explorer={exp}/> 
           })
          }
        </div>
       }
    </div>
  ) 
}else{
  return <span style={{color:'green'}}>{explorer.name} <br/></span>
}
}

export default Home