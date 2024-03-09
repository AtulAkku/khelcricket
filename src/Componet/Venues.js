import React from 'react'

const venueObject = [
  {
    "object_id": "1",
    "object-title": "MCC Cricket Ground",
    "description": "MCC Cricket Ground, Sector - 99, Gurugram",
    "image-url": "../../img/location/mcc.png",
  },
  {
    "object_id": "2",
    "object-title": "Monhan Cricket Ground",
    "description": "Mohan Cricket Ground, Kadarpur, Gurugram",
    "image-url": "../../img/location/mohan.png"
  },
  {
    "object_id": "3",
    "object-title": "Backyard Sports Club",
    "description": "Backyard Sports Club Ground, Sector 59, Gurugram",
    "image-url": "../../img/location/Backyard.png"
  },
  {
    "object_id": "4",
    "object-title": "DLC Cricket Ground",
    "description": "DLC Cricket Ground, Bandhwari, Gurugram",
    "image-url": "../../img/location/dlc.png"
  },
  {
    "object_id": "5",
    "object-title": "Gameshub Ground",
    "description": "Gameshub Ground, Baliyawas, Gurugram",
    "image-url": "../../img/location/Gameshub.png"
  },
  {
    "object_id": "6",
    "object-title": "Lord's Cricket Ground",
    "description": "Lord's of Cricket Ground, Baliyawas, Gurugram",
    "image-url": "../../img/location/Lords.png"
  }

]

const Venues = () => {
  return (
    <>
      <div className="bg-white bg-opacity-75">
        <div className="row">
          {venueObject.map((item, index) => (
            <div key={index} className="col-3">
              <a href="./venueDetails" className="btn w-100">
                <div className="card p-2" style={{ height: '400px', width:"300px", overflow: 'hidden', margin:"auto"}}>
                  <img src={item['image-url']} className="card-img-top w-100 rounded" alt={item['object-title']} style={{ objectFit: 'contain', maxHeight: '100%', height:'200px', width:"200px" }} />
                  <div className="card-body">
                    <h5 className="card-title text-center">{item['object-title']}</h5>
                    <p className="card-text text-center" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Venues