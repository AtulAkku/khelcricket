import React from 'react'
import Carousel from './partials/Carousel'
import Hero from './partials/Hero'
import Contact from './partials/Contact'
import LowerNav from './partials/LowerNav'
import Features from './partials/Features'


const images = [
  // '../../img/carousel/sports.jpg',
  '../../img/carousel/img1.png',
  '../../img/carousel/img2.png',
  '../../img/carousel/img3.png',
  '../../img/carousel/img4.png',
  '../../img/carousel/img5.png'
  // '../../img/carousel/Screenshot_20240306-014223~2.png'
]
const data = [
  {
    "name" : "MCC Cricket Ground",
    "description": "MCC Cricket Ground, Sector - 99, Gurugram",
    "image-url": "../../img/location/mcc.png"
  },
  {
    "name" : "Mohan Cricket Ground",
    "description": "Mohan Cricket Ground, Kadarpur, Gurugram",
    "image-url": "../../img/location/mohan.png"
  },
  {
    "name" : "Backyard Sports Club",
    "description": "Backyard Sports Club, Sector 59, Gurugram",
    "image-url": "../../img/location/Backyard.png"
  },
  // {
  //   "description": "DLC Cricket Ground, Bandhwari, Gurugram",
  //   "image-url": "../../img/location/dlc.png"
  // },
  // {
  //   "description": "Gameshub Ground, Baliyawas, Gurugram",
  //   "image-url": "../../img/location/Gameshub.png"
  // },
  // {
  //   "description": "Lord's of Cricket Ground, Baliyawas, Gurugram",
  //   "image-url": "../../img/location/Lords.png"
  // }

]

const Home = () => {
  return (
    <>
      <LowerNav />
      <div className="row popins my-5 bg-white py-5">
                
                <div className="col-12 col-lg-6 bg-white d-flex justify-content-center p-3">
                    <div className='learnworlds-laptop black realistic'>
                        <div className='lw-screen-content d-flex justify-content-center'>
                            <video src='video/KHEL.mp4' className='rounded shadow align-items-center' width="65%" controls ></video>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 bg-white justify-content-center d-flex align-items-center text-start fs-1">
                    <div className="ps-5">Experience the future of cricket venue bookings at KHEl!</div>
                </div>
            </div>
      <Carousel images={images} />
      <Features />
      <Hero data={data} />
      {/* <HorizontalNav /> */}
      <Contact />
    </>
  )
}

export default Home
