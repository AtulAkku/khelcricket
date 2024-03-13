import React from 'react'
import Lottie from 'react-lottie';
import Card from '../animations/card.json';

const PaymentConfirm = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Card,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",

    }
  }
  return (
    <>
      <div class="offcanvas offcanvas-start bg-nav text-white popins w-50" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header py-3">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Confirm Your Booking Payment</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div>
          <Lottie
            options={defaultOptions}
            height={200}
            width={200}
          />
        </div>
        <div class="offcanvas-body py-0">
          <div className=''>
            <div className='bg-white text-dark'>
              Booking Details
            </div>
          </div>
          <div className='row py-1'>
            <div className="col">
              <table className='text-start m-auto'>
                <tbody>
                  <tr>
                    <td>Venue</td>
                    <td>-</td>
                    <td>Mohan Cricket Gorund</td>
                  </tr>
                  <tr>
                    <td>Date</td>
                    <td>-</td>
                    <td>13-03-2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col">
              <table className='m-auto text-start w-100'>
                <tbody>
                  <tr>
                    <td>Booking Charges</td>
                    <td>-</td>
                    <td className='text-end'>2000.00 ₹</td>
                  </tr>
                  <tr>
                    <td>GST</td>
                    <td>-</td>
                    <td className='text-end'>360.00 ₹</td>
                  </tr>
                  <tr className='border-top'>
                    <td>Total</td>
                    <td>-</td>
                    <td className='text-end'>2360.00 ₹</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className=''>
            <div className='bg-white text-dark'>
              Enter Card Details
            </div>
            <div className='m-auto w-75'>
              <form className='text-start my-3'>
                <div class="mb-1">
                  <label for="exampleInputEmail1" class="form-label">Card Number</label>
                  <input type="text" class="form-control" id="exampleInputEmail1"
                    placeholder='1234 5678 9012 3456'
                    aria-describedby="emailHelp" />
                </div>
                <div class="mb-1">
                  <label for="exampleInputPassword1" class="form-label">Name on Card</label>
                  <input type="text" class="form-control"
                    placeholder='Ex. Gol D Roger'
                    id="exampleInputPassword1" />
                </div>
                <div className='row'>
                  <div className="col">
                    <div class="mb-1">
                      <label for="exampleInputPassword1" class="form-label">Expiry Date</label>
                      <input type="text" class="form-control"
                        placeholder='01/24'
                        id="exampleInputPassword1" />
                    </div>
                  </div>
                  <div className="col">
                    <div class="mb-1">
                      <label for="exampleInputPassword1" class="form-label">Security Code</label>
                      <input type="text" class="form-control"
                        placeholder='XXX'
                        id="exampleInputPassword1" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* <div class="dropdown mt-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
              Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div> */}
            <div className='d-flex justify-content-evenly'>
              <button className='btn border-light text-white'>Cancel</button>
              <button className='btn border-light text-white'>Confirm Payment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentConfirm