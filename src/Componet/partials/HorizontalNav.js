import React from 'react';
const HorizontalNav = () => {
  return (
    <div className="container w-100">
      <div className="m-2 mx-3 p-5 mx-auto text-light rounded">
      <h3 className="text-center">Services</h3>
      <hr />
      <div className="scrollmenu d-flex flex-row justify-content-between p-3">
        <div className="nav flex-column scrollmenu-item">
          <img src="../../img/services/bDay.png" alt="123" />
          <p className="item-text">Birthday Parties 
          
          </p>
        </div>
        <div className="nav flex-column scrollmenu-item dropdown">
          <img src="../../img/services/destination.png" alt="123" />
          <p className="item-text">Travels</p>
          
        </div>
        <div className="nav flex-column scrollmenu-item dropdown">
          <img src="../../img/services/sports.png" alt="123" />
          <p className="item-text">Sports Events</p>
          
        </div>
        <div className="nav flex-column scrollmenu-item dropdown">
          <img src="../../img/services/wedding.png" alt="123" />
          <p className="item-text">Wedding Ceremony</p>
          
        </div>
        <div className="nav flex-column scrollmenu-item">
          <img src="../../img/services/work.png" alt="123" />
          <p className="item-text">Office Bash</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HorizontalNav;
