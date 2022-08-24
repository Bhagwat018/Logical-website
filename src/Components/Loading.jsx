import React from 'react'
import './Layout.css'

const Loading = () => {
  return (
    <div className='rama'>
      <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Name</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Name"/>
  </div>
 
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Madhya Pradesh...</option>
      <option>...</option>
    </select>
  </div>
 
  
  <div className="col-12">
    <button type="submit" className="btn btn-sm btn-primary japan">Login</button>
  </div>
</form>
    </div>
  )
}

export default Loading
