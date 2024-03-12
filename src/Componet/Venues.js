import React, { useState } from 'react'
import VenueModal from './partials/VenueModal';
import { FaLocationArrow } from "react-icons/fa6";

const venueObject = [
  {
    "object_id": "1",
    "object-title": "MCC Cricket Ground",
    "location": "Sector - 99, Gurugram, Haryana",
    "image-url": "../../img/location/mcc.png",
    "pricing": "3000"
  },
  {
    "object_id": "2",
    "object-title": "Mohan Cricket Ground",
    "location": "Kadarpur, Gurugram, Haryana",
    "image-url": "../../img/location/mohan.png",
    "pricing": "2500"
  },
  {
    "object_id": "3",
    "object-title": "Backyard Sports Club",
    "location": "Sector 59, Gurugram, Haryana",
    "image-url": "../../img/location/Backyard.png",
    "pricing": "2500"
  },
  {
    "object_id": "4",
    "object-title": "DLC Cricket Ground",
    "location": "Bandhwari, Gurugram, Haryana",
    "image-url": "../../img/location/dlc.png",
    "pricing": "2000"
  },
  {
    "object_id": "5",
    "object-title": "Gameshub Ground",
    "location": "Baliyawas, Gurugram, Haryana",
    "image-url": "../../img/location/Gameshub.png",
    "pricing": "2500"
  },
  {
    "object_id": "6",
    "object-title": "Lord's Cricket Ground",
    "location": "Baliyawas, Gurugram, Haryana",
    "image-url": "../../img/location/Lords.png",
    "pricing": "2700"
  },
  {
    "object-title": "Noida Stadium",
    "location": "Sector 21A, Noida, Uttar Pradesh 201301",
    "image-url": "../../img/CricketStadium/ns1.png",
    description: "The stadium has a state-of-the-art playing surface that meets international standards and is equipped with floodlights, allowing for day and night matches. It also has facilities for players, including locker rooms, a medical room, and a gymnasium.",
    "object_id": "7",
    "pricing": "2000"
  },
  {
    "object-title": "VOC Cricket Ground",
    "location": "Chotpur Rd, Ambedkar City, Noida, Uttar Pradesh 201304",
    "image-url": "../../img/CricketStadium/voc1.png",
    description: "V.O.C. has its own indoor cricket nets with 3 lanes and a bowling machine. Outdoors are 2 grounds; 1 being a grass square with 7 strips, the other ground is fully artificial, both the pitch and the field. Three outdoor nets complement this well-equipped accommodation.",
    "object_id": "8",
    "pricing": "3000"
  },
  {
    "object-title": "Cricket Ground",
    "location": "Sector 97, Noida, Uttar Pradesh 201303",
    "image-url": "../../img/CricketStadium/cg1.png",
    "object_id": "9",
    "pricing": "4000"
  },
  {
    "object-title": "NS Cricket Ground",
    "location": "Sector 127, Noida, Uttar Pradesh 201301",
    "image-url": "../../img/CricketStadium/ns2.png",
    description: "N S Cricket Ground is a State-of-the-art Box Cricket Ground big enough to Accommodate 6v6 Game, where we've created a haven for cricket enthusiasts of all ages and skill levels. Nestled in the heart of Noida, our cricket facility offers the perfect setting for a thrilling and action-packed cricket experience\n\nWhether you're a seasoned cricketer or just looking for a fun and engaging way to spend your time, our Box Cricket Ground has something for everyone.",
    "object_id": "10",
    "pricing": "3500"
  },
  {
    "object-title": "NSR Sports Ground",
    "location": "Sector 123, Noida, Uttar Pradesh",
    "image-url": "../../img/CricketStadium/ncr2.png",
    "object_id": "11",
    "pricing": "2500"
  },
  {
    "object-title": "Run Bhoomi cricket ground",
    "location": "Road Khel parisar, Opposite to Shree Balaji mandir, road, Sorkha, Noida, Uttar Pradesh 201301",
    "image-url": "../../img/CricketStadium/rb3.png",
    "object_id": "12",
    "pricing": "2700"
  },
  {
    "object-title": "NEWLANDS Cricket Ground",
    "location": "Asagarpur Jagir, Uttar Pradesh",
    "image-url": "../../img/CricketStadium/newlands1.png",
    description: "Newlands is arguably the most beautiful cricket ground in the world. With Table Mountain and Devil’s Peak offering the perfect backdrop for this iconic cricket stage, Newlands has much to offer visitors and Capetonians alike. Established in 1888, the ground boasts a rich history and has witnessed most of cricket's greatest players in action. Whether you come to a match, go on a stadium tour or attend an event, the rich atmosphere of Newlands will charm you and capture your heart forever.",
    "object_id": "13",
    "pricing": "3300"
  },
  {
    "object-title": "Own Cricket club ground",
    "location": "C-5, Own cricket club ground, Mamura, Phase-2, Noida, Uttar Pradesh 201305",
    "image-url": "../../img/CricketStadium/own1.png",
    "object_id": "14",
    "pricing": "2000"
  },
  {
    "object-title": "PCG cricket Ground",
    "location": "Sector 164, Noida, Uttar Pradesh 201306",
    "image-url": "../../img/CricketStadium/pcg2.png",
    "object_id": "15",
    "pricing": "3000"
  },
  {
    "object-title": "Bhangel cricket ground",
    "location": "Noida, Uttar Pradesh",
    "image-url": "../../img/CricketStadium/voc3.png",
    description: "The grounds are well-maintained and have essential facilities such as drinking water, seating arrangements, canteen, etc. Bhangel Cricket Ground in , Noida is among the grounds to play sports and exercise.",
    "object_id": "16",
    "pricing": "4000"
  },
  {
    "object-title": "BHARAT Cricket Ground",
    "location": "Amrapali Leisure Valley, Greater Noida, Uttar Pradesh 201009",
    "image-url": "../../img/CricketStadium/bharat1.png",
    description: "Bharat Cricket Ground Shivaji Park or pitch is a part of M.C.A . It has its own restroom in pavilion and good side on view of the match.",
    "object_id": "17",
    "pricing": "3500"
  },
  {
    "object-title": "M.V Sports Cricket Ground",
    "location": "Asagarpur Jagir, Uttar Pradesh 201301",
    "image-url": "../../img/CricketStadium/mv1.png",
    "object_id": "18",
    "pricing": "2500"
  },
  {
    "object-title": "DND Cricket Ground",
    "location": "New Friends Colony, New Delhi, Delhi 110096",
    "image-url": "../../img/CricketStadium/dnd1.png",
    "object_id": "19",
    "pricing": "2700"
  },
  {
    "object-title": "Sundial Cricket Ground",
    "location": "New Friends Colony, New Delhi, Delhi 110014",
    "image-url": "../../img/CricketStadium/sundial1.png",
    "object_id": "20",
    "pricing": "3300"
  },
  {
    "object-title": "Picnic Hut Cricket Ground",
    "location": "Ashok Vihar III, Ashok Vihar, Delhi, 110052",
    "image-url": "../../img/CricketStadium/pcg2.png",
    "object_id": "21",
    "pricing": "2000"
  } 

]

const Venues = () => {
  const [showModal, setShowModal] = useState(false);
  const [venue, setVenue] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
    setVenue()
  };
  const handleVenueModal = (item) => {
    setShowModal(true);
    setVenue(item);
  }
  return (
    <>
    <div className="container">
        {showModal && <VenueModal handleCloseModal={handleCloseModal} showModal={showModal} venue={venue} />}
          <div className="row p -5">
            {venueObject.map((item, index) => (
              <div key={index} className="col-lg-3 col-12 venue-card p-3">
                <div className="card hover bg-transparent" onClick={() => handleVenueModal(item)}>
                  <img src={item['image-url']} className="card-img-top img-fluid" alt={item['object-title']} />
                  <br/>
                  <div className="card-body">
                    {/* Initially show only the title */}
                    <div className="additional-info">
                    <h5 className="card-title text-center popins py-2">{item['object-title']}</h5>
                      {/* <hr /> */}
                    {/* Additional information shown on hover */}
                      <p className="card-text text-center">
                        <FaLocationArrow /> {item.location}
                      </p>
                      {/* <hr /> */}
                      <p className="card-text text-center">Pricing: {item.pricing} ₹ Onwards</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </>
  )
}

export default Venues