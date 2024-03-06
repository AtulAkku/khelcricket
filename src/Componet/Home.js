import React from 'react'
import Carousel from './Carousel'
import Hero from './Hero'
import Contact from './Contact'
import HorizontalNav from './partials/HorizontalNav'
import LowerNav from './partials/LowerNav'


const images = [
    '../../img/carousel/sports.jpg',
    '../../img/carousel/Screenshot_20240306-012635~2.png',
    '../../img/carousel/Screenshot_20240306-012901~2.png',
    '../../img/carousel/Screenshot_20240306-013223~2.png',
    '../../img/carousel/Screenshot_20240306-013653~2.png',
    '../../img/carousel/Screenshot_20240306-013909~2.png',
    '../../img/carousel/Screenshot_20240306-014223~2.png'
  ]
  const data = [
    {
      "description":"MCC Cricket Ground, Sector - 99, Gurugram",
      "image-url":"../../img/location/mcc.png"
    },
    {
      "description":"Mohan Cricket Ground, Kadarpur, Gurugram",
      "image-url":"../../img/location/mohan.png"
    },
    {
      "description":"Backyard Sports Club, Sector 59, Gurugram",
      "image-url":"../../img/location/Backyard.png"
    },
    {
      "description":"DLC Cricket Ground, Bandhwari, Gurugram",
      "image-url":"../../img/location/dlc.png"
    },
    {
      "description":"Gameshub Cricket Ground, Baliyawas, Gurugram",
      "image-url":"../../img/location/Gameshub.png"
    },
    {
      "description":"Lord's of Cricket Ground, Baliyawas, Gurugram",
      "image-url":"../../img/location/Lords.png"
    }
    
  ]

const Home = () => {
    return (
        <>
          <LowerNav/>
            <Carousel images={images} />
            {/* <HorizontalNav /> */}
            <Hero data={data} />
            <Contact/>
        </>
    )
}

export default Home
