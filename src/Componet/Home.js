import React, { useEffect } from 'react'
import Carousel from './Carousel'
import Hero from './Hero'
import Contact from './Contact'
import LowerNav from './partials/LowerNav'
import { useLocation } from 'react-router-dom'
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

      <Features />
      <Carousel images={images} />
      {/* <HorizontalNav /> */}
      <Hero data={data} />
      <Contact />
    </>
  )
}

export default Home
