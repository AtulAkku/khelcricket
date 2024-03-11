import React, { useState } from 'react'
import VenueModal from './partials/VenueModal';

const venueObject = [
  {
    "object_id": "1",
    "object-title": "MCC Cricket Ground",
    "location": "MCC Cricket Ground, Sector - 99, Gurugram",
    "image-url": "../../img/location/mcc.png",
  },
  {
    "object_id": "2",
    "object-title": "Mohan Cricket Ground",
    "location": "Mohan Cricket Ground, Kadarpur, Gurugram",
    "image-url": "../../img/location/mohan.png"
  },
  {
    "object_id": "3",
    "object-title": "Backyard Sports Club",
    "location": "Backyard Sports Club Ground, Sector 59, Gurugram",
    "image-url": "../../img/location/Backyard.png"
  },
  {
    "object_id": "4",
    "object-title": "DLC Cricket Ground",
    "location": "DLC Cricket Ground, Bandhwari, Gurugram",
    "image-url": "../../img/location/dlc.png"
  },
  {
    "object_id": "5",
    "object-title": "Gameshub Ground",
    "location": "Gameshub Ground, Baliyawas, Gurugram",
    "image-url": "../../img/location/Gameshub.png"
  },
  {
    "object_id": "6",
    "object-title": "Lord's Cricket Ground",
    "location": "Lord's of Cricket Ground, Baliyawas, Gurugram",
    "image-url": "../../img/location/Lords.png"
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
      {showModal && <VenueModal handleCloseModal={handleCloseModal} showModal={showModal} venue = {venue} />}
      <div className="bg-white">
        <div className="row p -5">
          {venueObject.map((item, index) => (
            <div key={index} className="col-lg-3 col-12">
              <div className="card hover m-2" onClick={() => { handleVenueModal(item) }}>
                <img src={item['image-url']} className="card-img-top img-fluid" alt={item['object-title']} />
                <div className="card-body">
                  <h5 className="card-title text-center">{item['object-title']}</h5>
                  <p className="card-text text-center">{item.location}</p>
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