
import {
    placesInIndia,
    placesInDubai,
    placesInNewZealand,
  } from "./destinationData";
  
  class DestinationService {
    static getAllPlacesInIndia() {
      return placesInIndia;
    }
  
    static getAllPlacesInDubai() {
      return placesInDubai;
    }
    static getAllPlacesInNewZealand() {
        return placesInNewZealand;
      }
  
  }
  
  export default DestinationService;
  