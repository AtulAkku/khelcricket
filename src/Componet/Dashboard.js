import React from 'react'

const Dashboard = () => {
    return (
        <>
            
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">User Information</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            
                            <form className="g-0 p-3">
            <div className="row">
              <div className="form-group col-md-6">
                <label className="ms-1" htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email"  onChange={(e) => { }} /> <div id="emailError" className="invalid-feedback"></div>
              </div>
              {/* <div className="form-group col-md-6">
                <label className="ms-1" htmlFor="email">Email</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                  </div>
                </div>
              </div> */}

              <div className="form-group col-md-6">
                <label className="ms-1" htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Name"  onChange={(e) => {  }} /> <div id="nameError" className="invalid-feedback"></div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="ms-1" htmlFor="phoneNo">Phone Number</label>
                <input type="text" className="form-control" id="phoneNo" placeholder="Phone Number"  onChange={(e) => {  }} /> <div id="phoneNoError" className="invalid-feedback"></div>
              </div>
              <div className="form-group col-md-6">
                <label className="ms-1" htmlFor="pinCode">Pin Code</label>
                <input type="text" className="form-control" id="pinCode" placeholder="Pin Code"   /> <div id="pinCodeError" className="invalid-feedback"></div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="ms-1" htmlFor="city">City</label>
                <input type="text" className="form-control" id="city" placeholder="City"  readOnly/>
              </div>
              <div className="form-group col-md-6">
                <label className="ms-1" htmlFor="state">State</label>
                <input id="state" className="form-control" readOnly/>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="ms-1" htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password"  onChange={(e) => {  }} /> <div id="passwordError" className="invalid-feedback"></div>
              </div>
              <div className="form-group col-md-6">
                <label className="ms-1" htmlFor="conPassword">Password</label>
                <input type="password" className="form-control" id="conPassword" placeholder="Confirm Password"  onChange={(e) => { }} /> <div id="conPasswordError" className="invalid-feedback"></div>
              </div>
            </div>
            <div className="mt-2">
              <a href="/login" className='text-decoration-none'>Already Registered? Login!</a>
            </div>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn bg-nav px-5 fs-6" >Update</button>
            </div>
          </form>

                            <a href="#" className="btn btn-primary">Update</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard