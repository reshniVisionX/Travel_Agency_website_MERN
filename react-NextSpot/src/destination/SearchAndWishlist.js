import React, { useState, useEffect } from "react";
import DestinationService from "./destinationService";
import "./SearchAndWishlist.css";

const SearchAndWishlist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allPlaces, setAllPlaces] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const places = [
      ...DestinationService.getAllPlacesInIndia(),
      ...DestinationService.getAllPlacesInDubai(),
      ...DestinationService.getAllPlacesInNewZealand(),
    ];

    setAllPlaces(places);
  }, []);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  useEffect(() => {
    const filteredResults = allPlaces.filter((place) =>
      place.placeName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchTerm, allPlaces]);

  const addToWishlist = (place) => {
    if (!wishlist.find((item) => item.placeName === place.placeName)) {
      const newWishlist = [...wishlist, place];
      setWishlist(newWishlist);
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    }
  };

  const removeFromWishlist = (place) => {
    const updatedWishlist = wishlist.filter((item) => item.placeName !== place.placeName);
    setWishlist(updatedWishlist);
    
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="search-and-wishlist-container">
      <h1>Search Your NextSpot...!</h1>
      <br></br>
      <div className="inputBox">
      <input
        type="text"
        placeholder="Search places..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /></div>
      <div className="places-container">
        {(searchTerm === "" ? allPlaces : searchResults).map((place, index) => (
          <div key={index} className="place-card">
            <h3 className="place-name">{place.placeName}</h3>
            <p className="place-cost">Cost: {place.cost}</p>
            <img
              src={place.image}
              alt={place.placeName}
              className="place-image"
              onClick={() => addToWishlist(place)}
            />
            <div className="place-buttons">
              <button className="add-to-favorite" onClick={() => addToWishlist(place)}>
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2>Wishlist</h2>
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
    </div>
  );
};

export default SearchAndWishlist;