import React from 'react'
import './Secand.css'

import Menu from './api'

const Secand = () => {
 

  return (
    <div>


       <h1 className='mana'>Top Movies</h1>
 <div id="vijay">

  {Menu.map((curEle)=>{
  const{id,name,cate,lorem}=curEle;
  return(

    <div class="card uniqe" style={{width: "18rem"}} >
  <img src={name} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{cate} </h5>
    <p class="card-text"> This is {id} in Best hollywood movies {lorem} </p>
    <a href="/abudfi" class="btn btn-primary">Download</a>
  </div>
</div>



  )


  })

  }
   

    </div>
 </div>

  )
}

export default Secand
