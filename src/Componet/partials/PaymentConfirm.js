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
        <div class="offcanvas-header">
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
        <div class="offcanvas-body">
          <div className='my-4'>
            <div className='bg-white text-dark'>
              Booking Details
            </div>
          </div>
          <div className='row'>
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
              <table className='m-auto text-start'>
                <tbody>
                  <tr>
                    <td>Booking Charges</td>
                    <td>-</td>
                    <td>₹ 2000.00</td>
                  </tr>
                  <tr>
                    <td>GST</td>
                    <td>-</td>
                    <td>₹ 360.00</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>-</td>
                    <td>₹ 2360.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='my-4'>
            <div className='bg-white text-dark'>
              Enter Card Details
            </div>
            <div className='m-auto w-100'>
              <form>
                {/* <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
                  </div>
                </div> */}
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">Card Number:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword" placeholder='XXXX XXXX XXXX XXXX'  />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">Name on Card</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword" placeholder="XXX"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">CVV:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword" placeholder="XXX"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">exp:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword" placeholder="XXX"/>
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