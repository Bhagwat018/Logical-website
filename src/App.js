
import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Loading from './Components/Loading';
import Main from './Components/Main';
import Secand from './Components/Secand';

function App() {
let [data,setdata]=useState()
let [datm,setdatm]=useState()

let toyed=datm;
  setTimeout(() => {


    setdata("yes")
  
  }, 3000);
 
   
  return (
    <div>
     <Main/>
     {data==="yes"? <Secand/>:"wait data loading"}
     <div><h1>if you want to login write yes</h1></div>
     <input type="text" name="" value={datm} onChange={(e)=>setdatm(e.target.value)} id="" />
  {toyed==="yes"? <Loading/>:"   please say yes to see Login page"}
    <Footer/>
    </div>
  );
}

export default App;
