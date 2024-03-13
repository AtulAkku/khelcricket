import React, { useState } from 'react'
import VenueModal from './partials/VenueModal';
import { FaLocationArrow } from "react-icons/fa6";
import Login from './Login';
import { useNavigate } from 'react-router';

const venueObject = [
  {
    "object_id": "1",
    "object-title": "MCC Cricket Ground",
    "location": "Sector - 99, Gurugram, Haryana",
    "description": "Welcome to MCC Cricket Ground, where cricketing dreams come alive. Nestled in the heart of Gurugram, this ground offers top-notch facilities and a vibrant atmosphere for players and spectators alike. With its well-maintained pitches and welcoming ambiance, every match here is a memorable experience. Restrooms available.",
    "link": "https://maps.app.goo.gl/yxaB8cxuEqeBXZar7",
    "image-url": ["mcc.png"],
    "pricing": "3000"
  },
  {
    "object_id": "2",
    "object-title": "Mohan Cricket Ground",
    "location": "Kadarpur, Gurugram, Haryana",
    "description": "Step onto the fields of Mohan Cricket Ground and immerse yourself in the joy of cricket. Located amidst the serene surroundings of Gurugram, this ground offers excellent playing conditions and modern amenities. Whether you're a seasoned player or a cricket enthusiast, Mohan Cricket Ground promises an unforgettable experience. Restrooms available.",
    "link": "https://maps.app.goo.gl/KBC471Q33dpY9v6w9",
    "image-url": ["mohan.png"],
    "pricing": "2500"
  },
  {
    "object_id": "3",
    "object-title": "Backyard Sports Club",
    "location": "Sector 59, Gurugram, Haryana",
    "description": "Welcome to Backyard Sports Club, your ultimate destination for cricketing fun and excitement. Situated in the heart of Gurugram, this club offers a warm and welcoming atmosphere for players of all levels. With its well-equipped facilities and friendly environment, every visit to Backyard Sports Club is a delight. Restrooms available.",
    "link": "https://maps.app.goo.gl/GaGF3BnAQWneEATY8",
    "image-url": ["Backyard.png"],
    "pricing": "2500"
  },
  {
    "object_id": "4",
    "object-title": "DLC Cricket Ground",
    "location": "Bandhwari, Gurugram, Haryana",
    "description": "Experience the thrill of cricket at DLC Cricket Ground, where every match is a celebration of sportsmanship and teamwork. Located in Bandhwari, Gurugram, this ground offers spacious fields and modern amenities for players and spectators. Whether you're playing or cheering from the sidelines, DLC Cricket Ground promises an unforgettable experience. Restrooms available.",
    "link": "https://maps.app.goo.gl/iDwukVintLdPhJzf7",
    "image-url": ["dlc.png"],
    "pricing": "2000"
  },
  {
    "object_id": "5",
    "object-title": "Gameforest Ground",
    "location": "Baliyawas, Gurugram, Haryana",
    "description": "Join us at Gameforest Ground for a day filled with cricketing excitement and joy. Situated amidst the scenic beauty of Gurugram, this ground offers excellent facilities and a vibrant atmosphere for players and fans. Whether you're honing your skills or cheering for your favorite team, Gameshub Ground is the place to be. Restrooms available.",
    "link": "https://maps.app.goo.gl/7CPn73Sb82CHppUf6",
    "image-url": ["Gameshub.png"],
    "pricing": "2500"
  },
  {
    "object_id": "6",
    "object-title": "Lord's Cricket Ground",
    "location": "Baliyawas, Gurugram, Haryana",
    "description": "Welcome to Lord's Cricket Ground, where cricketing passion meets unparalleled beauty. Nestled amidst the picturesque surroundings of Gurugram, this ground offers world-class facilities and a charming ambiance for players and spectators alike. Whether you're playing a match or simply enjoying the game, Lord's Cricket Ground promises an unforgettable experience. Restrooms available.",
    "link": "https://maps.app.goo.gl/jx5tTCURGs4sbLQX6",
    "image-url": ["Lords.png"],
    "pricing": "2700"
  },
  {
    "object-title": "Noida Stadium",
    "location": "Sector 21A, Noida, Uttar Pradesh 201301",
    "image-url": ["noidas1.png","noidas2.png"],
    "description": "The stadium has a state-of-the-art playing surface that meets international standards and is equipped with floodlights, allowing for day and night matches. It also has facilities for players, including locker rooms, a medical room, and a gymnasium.",
    "object_id": "7",
    "link": "https://www.google.com/maps/dir/28.6325464,77.4357733/Noida+Stadium,+Sector+21A,+Noida,+Uttar+Pradesh+201301",
    "pricing": "2000"
  },
  {
    "object-title": "VOC Cricket Ground",
    "location": "Chotpur Rd, Ambedkar City, Noida, Uttar Pradesh 201304",
    "image-url": ["voc1.png","voc3.png"],
    "description": "V.O.C. has its own indoor cricket nets with 3 lanes and a bowling machine. Outdoors are 2 grounds; 1 being a grass square with 7 strips, the other ground is fully artificial, both the pitch and the field. Three outdoor nets complement this well-equipped accommodation.",
    "object_id": "8",
    "link": "https://www.google.com/maps/dir/28.6315394,77.4445412/VOC+Cricket+Ground,+Chotpur+Rd,+Ambedkar+City,+Noida,+Uttar+Pradesh+201304",
    "pricing": "3000"
  },
  {
    "object-title": "Cricket Ground",
    "location": "Sector 97, Noida, Uttar Pradesh 201303",
    "image-url": ["cg1.png"],
    "object_id": "9",
    "link": "https://www.google.com/maps/dir/28.6325464,77.4357733/G9Q3%2B9XF+Cricket+Ground,+Sector+97,+Noida,+Uttar+Pradesh+201303",
    "description": "Welcome to Cricket Ground, where every match is a celebration of sportsmanship and camaraderie. Whether you're a seasoned player or a spectator, you'll find yourself immersed in the excitement. Restrooms available.",
    "pricing": "4000"
  },
  {
    "object-title": "NS Cricket Ground",
    "location": "Sector 127, Noida, Uttar Pradesh 201301",
    "image-url": ["ns2.png","ns1.png"],
    "description": "N S Cricket Ground is a State-of-the-art Box Cricket Ground big enough to Accommodate 6v6 Game, where we've created a haven for cricket enthusiasts of all ages and skill levels. Nestled in the heart of Noida, our cricket facility offers the perfect setting for a thrilling and action-packed cricket experience\n\nWhether you're a seasoned cricketer or just looking for a fun and engaging way to spend your time, our Box Cricket Ground has something for everyone.",
    "link": "https://www.google.com/maps/dir/28.6325464,77.4357733/NS+Cricket+Ground,+Sector+127,+Noida,+Uttar+Pradesh+201301",
    "object_id": "10",
    "pricing": "3500"
  },
  {
    "object-title": "NSR Sports Ground",
    "location": "Sector 123, Noida, Uttar Pradesh",
    "image-url": ["ncr2.png","ncr1.png"],
    "object_id": "11",
    "description": "Come and play at NSR Sports Ground, where every game is an adventure waiting to happen. With its spacious fields and modern amenities, it's the ultimate destination for cricket lovers. Restrooms available.",
    "link": "https://www.google.com/maps/dir/28.6325464,77.4357733/NCR+Sports+Ground,+Sector+123,+Noida,+Uttar+Pradesh",
    "pricing": "2500"
  },
  {
    "object-title": "Run Bhoomi cricket ground",
    "location": "Road Khel parisar, Opposite to Shree Balaji mandir, road, Sorkha, Noida, Uttar Pradesh 201301",
    "image-url": ["rb3.png","rb1.png","rb2.png"],
    "description": "Welcome to Run Bhoomi cricket ground, where every match is a journey of excitement and joy. With its scenic surroundings and top-notch facilities, it's the perfect place to play your favorite sport. Restrooms available.",
    "link": "https://www.google.com/maps/dir/28.6325464,77.4357733/Run+Bhoomi+cricket+ground,+road+Khel+parisar,+Opposite+to+Shree+Balaji+mandir,+road,+Sorkha,+Noida,+Uttar+Pradesh+201301",
    "object_id": "12",
    "pricing": "2700"
  },
  {
    "object-title": "NEWLANDS Cricket Ground",
    "location": "Asagarpur Jagir, Uttar Pradesh",
    "image-url": ["newlands1.png","newlands2.png"],
    "description": "Newlands is arguably the most beautiful cricket ground in the world. With Table Mountain and Devil’s Peak offering the perfect backdrop for this iconic cricket stage, Newlands has much to offer visitors and Capetonians alike. Established in 1888, the ground boasts a rich history and has witnessed most of cricket's greatest players in action. Whether you come to a match, go on a stadium tour or attend an event, the rich atmosphere of Newlands will charm you and capture your heart forever.",
    "link": "https://www.google.com/maps/dir/28.6325464,77.4357733/G8HW%2BWGF+NEWLANDS+CRICKET+GROUND,+Asagarpur+Jagir,+Uttar+Pradesh",
    "object_id": "13",
    "pricing": "3300"
  },
  {
    "object-title": "Own Cricket club ground",
    "location": "C-5, Own cricket club ground, Mamura, Phase-2, Noida, Uttar Pradesh 201305",
    "image-url": ["own1.png","own2.png"],
    "description": "Welcome to Own Cricket club ground, your home away from home for cricketing adventures. With its welcoming atmosphere and excellent facilities, it's the perfect place to enjoy the game with friends and family. Restrooms available.",
    "link": "https://www.google.com/maps/dir/28.6325464,77.4357733/4,+C-5,+Own+cricket+club+ground,+C-5,+4,+Chotpur+Rd,+Mamura,+Phase-2,+Noida,+Uttar+Pradesh+201305",
    "object_id": "14",
    "pricing": "2000"
  },
  {
    "object-title": "PCG cricket Ground",
    "location": "Sector 164, Noida, Uttar Pradesh 201306",
    "image-url": ["pcg2.png"],
    "description": "Experience the magic of cricket at PCG cricket Ground, where every match is a thrilling spectacle. With its lively atmosphere and top-notch facilities, it's the ultimate destination for cricket enthusiasts. Restrooms available.",
    "link": "https://www.google.com/maps/dir/28.6325464,77.4357733/FCGP%2B36J+PCG+cricket+Ground,+Sector+164,+Noida,+Uttar+Pradesh+201306",
    "object_id": "15",
    "pricing": "3000"
  },
  {
    "object-title": "BHARAT Cricket Ground",
    "location": "Amrapali Leisure Valley, Greater Noida, Uttar Pradesh 201009",
    "image-url": ["bharat1.png"],
    "description": "Bharat Cricket Ground Shivaji Park or pitch is a part of M.C.A . It has its own restroom in pavilion and good side on view of the match.",
    "link": "https://www.google.com/maps/dir/28.6325464,77.4357733/HCP9%2B5V5+BHARAT+CRICKET+GROUND,+Amrapali+Leisure+Valley,+Greater+Noida,+Uttar+Pradesh+201009",
    "object_id": "17",
    "pricing": "3500"
  },
  {
    "object-title": "M.V Sports Cricket Ground",
    "location": "Asagarpur Jagir, Uttar Pradesh 201301",
    "image-url": ["mv1.png"],
    "description": "Step onto the fields of M.V Sports Cricket Ground and experience the joy of cricket like never before. With its welcoming atmosphere and excellent facilities, it's the perfect destination for cricket enthusiasts of all ages. Restrooms available.",
    "link": "https://www.google.com/maps/dir/28.6325464,77.4357733/G86X%2B3X+M.V+Sports+Cricket+Ground,+Asagarpur+Jagir,+Uttar+Pradesh+201301",
    "object_id": "18",
    "pricing": "2500"
  },
  {
    "object-title": "DND Cricket Ground",
    "location": "New Friends Colony, New Delhi, Delhi 110096",
    "image-url": ["dnd1.png","dnd2.png"],
    "description": "Experience the magic of cricket at DND Cricket Ground, where every match is a thrilling adventure. With its vibrant atmosphere and top-notch facilities, it's the ultimate destination for cricket lovers. Restrooms available.",
    "link": "https://www.google.com/maps/dir/28.6325464,77.4357733/H7JV%2B98R+DND+cricket+Ground,+New+Friends+Colony,+New+Delhi,+Delhi+110096",
    "object_id": "19",
    "pricing": "2700"
  },
  {
    "object-title": "Sundial Cricket Ground",
    "location": "New Friends Colony, New Delhi, Delhi 110014",
    "image-url": ["sundial1.png"],
    "description": "Welcome to Sundial Cricket Ground, where every match is a journey of excitement and joy. With its scenic surroundings and excellent facilities, it's the perfect place to play your favorite sport. Restrooms available.",
    "link": "https://www.google.com/maps/dir/28.6325464,77.4357733/H7MH%2BF8G+Sundial+Cricket+Ground,+New+Friends+Colony,+New+Delhi,+Delhi+110014",
    "object_id": "20",
    "pricing": "3300"
  },
]

const Venues = () => {
  const [showModal, setShowModal] = useState(false);
  const [venue, setVenue] = useState([]);
  const navigate = useNavigate();
  const handleCloseModal = () => {
    setShowModal(false);
    setVenue()
  };
  const handleVenueModal = (item) => {
    navigate('/venueDetails', {state : {item}})
  }
  return (
    <>
      <div className="container">
        {/* <Login/> */}
        {showModal && <VenueModal handleCloseModal={handleCloseModal} showModal={showModal} venue={venue} />}
        <div className="row">
          {venueObject.map((item, index) => (
            <div key={index} className="col-lg-3 col-12 p-3">
            <div className="venue-card hover rounded shadow popins" onClick={() => handleVenueModal(item)}>
              <img src={item['image-url']} className="img-fluid" alt={item['object-title']} />
              <br />
              <div className="additional-info">
                <div className="card-title h6 text-center py-2">{item['object-title']}</div>
                <p className="card-text text-center">
                  <FaLocationArrow /> {item.location}
                </p>
                <p className="card-text text-center">Pricing: {item.pricing} ₹ Onwards</p>
              </div>
            </div>
          </div>
        //   <div key={index} className="col-lg-3 col-12 venue-card p-3">
        //   <div className="c ard hover bg-transparent" onClick={() => handleVenueModal(item)}>
        //     <img src={item['image-url']} className="card-img-top img-fluid" alt={item['object-title']} />
        //     <br />
        //     {/* Initially show only the title */}
        //     <div className="additional-info">
        //       <h5 className="card-title text-center popins py-2">{item['object-title']}</h5>
        //       {/* <hr /> */}
        //       {/* Additional information shown on hover */}
        //       <p className="card-text text-center">
        //         <FaLocationArrow /> {item.location}
        //       </p>
        //       {/* <hr /> */}
        //       <p className="card-text text-center">Pricing: {item.pricing} ₹ Onwards</p>
        //     </div>

        //   </div>
        // </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Venues