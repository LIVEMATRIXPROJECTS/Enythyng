// import React from 'react'
// import './Ads-profile.css'
// const AdsProfile = () => {
//   return (
//     <div className="sidebar">
//    <ul>

//     <li>Publish Your Ad</li>
//     <li>Your Ads</li>
//     <li>Update Ads</li>
//     <li>Delate Ad</li>
    
//    </ul>
//   </div>
//   )
// }

// export default AdsProfile


import React, { useState } from 'react';
import './Ads-profile.css';
import YourAds from '../YourAds';
// import DeleteAd from './DeleteAd';
import UpdateAd from './UpdateAd';
import PublishAd from './PublishAd';

const AdsProfile = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li onClick={() => setSelectedOption('PublishYourAd')}>Publish Your Ad</li>
          <li onClick={() => setSelectedOption('yourAds')}>Your Ads</li>

          <li onClick={() => setSelectedOption('UpdateAds')}>Update Ads</li>

          {/* <li onClick={() => setSelectedOption('DelateAds')}>Delate Ads</li> */}

          {/* Add more options */}
        </ul>
      </div>
      <div className="main-content">
        {selectedOption === 'PublishYourAd' &&  <PublishAd/>}
        {selectedOption === 'yourAds' && <YourAds />}
        {selectedOption === 'UpdateAds' &&  <UpdateAd/>}

        {/* {selectedOption === 'DelateAds' && <DeleteAd/>} */}

        
       
       

        {/* Add more conditional rendering for other options */}
      </div>
    </div>
  );
};

export default AdsProfile;