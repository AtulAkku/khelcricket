import React from 'react';
import Lottie from 'react-lottie';
import Payment from '../animations/paymentDone.json';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const PaymentSuccessfull = (props) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: Payment,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",

		}
	}
	return (
		<>
			<div className={`modal popins bg-dark bg-opacity-50 fade ${props.showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: props.showModal ? 'block' : 'none' }} >
				<div className="modal-dialog modal-dialog-centered modal-lg text-light" role="document">
					<div className="modal-content shadow border-0 bg-nav">
						<div className="modal-header d-flex justify-content-between bg-nav">
							<h5 className="modal-title">Payment Successfull <IoIosCheckmarkCircleOutline /></h5>
							<button type="button" className="close btn btn-outline-light fw-bold" onClick={props.handleCloseModal} data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="row w-100">
								<div className="col">
									<Lottie
										options={defaultOptions}
										height={300}
										width={300}
									/>
								</div>
								<div className="col d-flex flex-column align-items-center justify-content-center ">
									<table className='w-100'>
										<tbody>
											<tr>
												<td className='text-start'>Transaction Id</td>

												<td className='text-end'>{props.bookingData.bookingId}</td>
											</tr>
											<tr>
												<td className='text-start'>Payment Type</td>

												<td className='text-end'>Debit Card</td>
											</tr>
											<tr>
												<td className='text-start'>Name</td>

												<td className='text-end'>{props.bookingData.userName}</td>
											</tr>
											<tr>
												<td className='text-start'>Mobile</td>

												<td className='text-end'>{props.bookingData.userPhone}</td>
											</tr>
											<tr>
												<td className='text-start'>Email</td>

												<td className='text-end'>{props.bookingData.userEmail}</td>
											</tr>
											<tr className='border-top'>
												<td className='text-start'>Ammount Paid</td>

												<td className='text-end'>₹ {props.total}</td>
											</tr>
										</tbody>
									</table>
									<button className='btn btn-outline-light mt-4' onClick={props.handleCloseModal}> Okay </button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PaymentSuccessfull