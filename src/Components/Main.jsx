import React, { useState } from 'react'
import './Main.css'




const Main = () => {
  let[uoo,setuoo]=useState()
  let data=new Date().toLocaleTimeString();
  setInterval(() => {
    setuoo(data+1)
  }, 1000);
  return (
    <div>
   
      <div className="contanier">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                      
                        <h1 className='same' id='rama1'>Being happy never goes out of style</h1>
                        <p className='same'>{uoo}</p>
                        <p className='same'>You are the sum total of everything you've ever seen, heard, eaten, smelled, been told, forgot - it's all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive</p>
                    </div>
                    <div className="col-lg-6">
                        <img id='imggg' src="https://laracasts.com/images/signup-banner-main-illustration@2x.png"  alt="server problem" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                      <p></p>
                      <h1 className=''>Rosa Parks</h1>
                      
                       <h3>CREDIT: SOUTHERN LIVING</h3>
<p>
"I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom." — Rosa Parks
                      </p>
                    </div>
                    </div>
            </div>
  </div>
    </div>
  )
}

export default Main
