// MySpots.js

import React from "react";
import "./SearchAndWishlist.css";


const MySpots = ({ removeFromWishlist, location }) => {
    console.log("Received wishlist in MySpots:", wishlist);

  const wishlist = location.state?.wishlist || [];
  
    if (!wishlist || wishlist.length === 0) {
      return <p>No spots in your wishlist.</p>;
    }
  

  return (
    <div>
      <h2>My Spots</h2>
      {wishlist.length > 0 ? (
        <div className="wishlist-container">
          {wishlist.map((item, index) => (
            <div key={index} className="wishlist-item">
              <img src={item.image} alt={item.placeName} className="wishlist-image" />
              <div className="wishlist-buttons">
                <p>{item.placeName}</p>
                <p>{item.cost}</p>
                <button
                  className="remove-from-favorite"
                  onClick={() => removeFromWishlist(item)}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No spots in your wishlist.</p>
      )}
    </div>
  );
};

export default MySpots;
