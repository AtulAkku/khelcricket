import React from 'react'
import { FaMobile, FaSearchLocation } from 'react-icons/fa'

const Contact = () => {
  return (
    <>

      <section className="secti on g-0 conta iner bg-black text-light " id="contact">
        <div className="top-hea der text-center">
          {/* <h1>Get in touch</h1> */}

        </div>
        <div className="row w-100">
          <div className="col">
            <div className="p-5  mt-5 d-flex justify-content-center align-items-center">
              <div>
                <h2>Find Us </h2>
                <small className='mb-3'>Your hustle for parties ends here !</small>
                <p><FaSearchLocation />
                  <span className="p-3">H-65 Sector-63 Near Noida Electronic City Metro Station</span>
                </p>
                <p><FaMobile /><span className='p-3'>+91 85631365132</span></p>
              </div>
            </div>
          </div>
          <div className="col container p-5 m-2 shadow rounded ">
            <form>
              <div className="row">
                <div className="col">
                  <label htmlFor="formGroupExampleInput">Name</label>
                  <input type="text" className="form-control" placeholder="Full name" />
                </div>
                <div className="col">
                  <label htmlFor="formGroupExampleInput">E-mail</label>
                  <input type="text" className="form-control" placeholder="Email address" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Query</label>
                <textarea type="text" className="form-control" id="formGroupExampleInput" placeholder="Submit Query" />
              </div>
              <div className="d-flex justify-content-end p-3"><button className="btn btn-outline-light" type="submit">Send Query</button></div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact