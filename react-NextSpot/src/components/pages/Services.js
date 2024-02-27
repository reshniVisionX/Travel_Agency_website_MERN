import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './services.css';
import './CheckIn';

const tourPackages = [
  {
    image: "https://pix8.agoda.net/hotelImages/125/1258071/1258071_17082221240055597437.jpg?ca=6&ce=1&s=312x235&ar=16x9",
    title: "Maldive Islands",
    description: "Maldives Discovery Cruise takes you to the islands of Guraidhoo, Fulidhoo, and Gulhi. At each island, you have the freedom to snorkel, speak to the locals, and do some island-specific activities.",
    cost: "₹ 912",
    days: "3 days",
  },
  {
    image: "https://cdn.getyourguide.com/img/tour/642b822b5c386.png/97.jpg",
    title: "Mount Toubkal Climbing Trek",
    description: "Climb to the summit of Mount Toubkal, the highest mountain in North Africa, on a 3-day trek from Marrakech. Visit ancient Berber villages, see waterfalls, and admire views of the Atlas Mountains.",
    cost: "₹ 14,102",
    days: "20 days",
  },
  {
    image:"https://www.holidify.com/images/bgImages/PAMUKALLE.jpg",
          title:"Pamukkale",
          description:"It is very famous for its travertines (hot water springs) which is a magical site with turquoise pools and snow-white cliffs. It is one of the most photogenic places in the world.",
          cost:"₹ 54,749",
          days:"8 days",
  },
  {
    image:"https://www.holidify.com/images/bgImages/LONDON.jpg",
    title:"London",
    description:" London is a global metropolis and one of the most visited cities in the world. London is a vibrant and diverse city, offering a multicultural atmosphere and a melting pot of different cuisines, languages, and customs.",
    cost:"₹ 22,500",
    days:"7 days",
  },
  {
    image:"https://cdn.discover-the-world.com/app/uploads/2019/07/argentina-patagonia-perito-moreno-glacier-adstk.jpg",
    title:"Patagonia, Argentina and Chile",
    description:" Explore the breathtaking landscapes of Patagonia, featuring stunning glaciers, mountains, and unique wildlife. Embark on hiking trails, go ice trekking on glaciers, and experience the untouched beauty of this South American region.",
    cost:"₹ 9,200",
    days:"4 days",
  },
  {
    image:"https://cdn.getyourguide.com/img/tour/648c63c903882.jpeg/98.jpg",
    title:"Alanya: Tandem Paragliding Flight to Cleopatra Beach",
    description:"Experience the one-of-a-kind feeling of flying during a tandem paragliding experience in Alanya. Soar like a bird over the coast to Cleopatra Beach, crossing over slopes and the sea along the way.",
    cost:"₹ 8,700",
    days:"1 day",
  },
  {
    image:"https://cdn.getyourguide.com/img/tour/62a7d7383afd5.jpeg/97.jpg",
    title:"NYC: City Climb Skyscraping Experience Ticket",
    description:"Climb out of your comfort zone at the highest open-air building ascent in the world. Scale the outside of a 1,200 ft skyscraper then lean out from the highest outdoor platform in NYC.",
    cost:"₹ 1,23,000",
    days:"1 day",
  },
  {
    image:"https://cdn.getyourguide.com/img/tour/b0f704908c8713c5.jpeg/97.jpg",
    title:"Dubai: Premium Safari, Camel Ride & Al Khayma Camp 3-Buffets",
    description:"Set out for an exciting desert safari across the red dunes of Dubai. Enjoy 3 different Emirati, Moroccan, and Arabian buffet dinners with live bread and BBQ stations, stargazing, and camp activities.",
    cost:"₹ 90,234",
    days:"3 days",
  },
 
];

const Package = ({ image, title, description, cost, days }) => (
  <div className="package">
    <img src={image} alt={title} className="package-image" />
    <h2 className="package-title">{title}</h2>
    <p className="package-description">{description}</p>
    <p className="package-cost">{cost}</p>
    <p className="package-days">{days}</p>
    <Link
      to={{
        pathname: '/check-in',
        state: { image, title, cost, days },
      }}
    >
      Book Now
    </Link>
  </div>
);

const Services = () => (
  <div className="services-page">
    <div className="sidebar">
      <ul>
        <li>Tours</li>
        <li>Flights</li>
        <li>Accommodations</li>
        <li>Cruises</li>
        <li>Travel Guides and Resources</li>
        <li>Special Offers</li>
        <li>Customer Testimonials</li>
        <li>Cancellation and Refund Policies</li>
        <li>FAQ</li>
      </ul>
    </div>
    <div className="content">
      <h1 className="services">Services</h1>
      <h1 className="services-title">Services</h1>
      <div className="packages">
        {tourPackages.map((tourPackage, index) => (
          <Package
            key={index}
            image={tourPackage.image}
            title={tourPackage.title}
            description={tourPackage.description}
            cost={tourPackage.cost}
            days={tourPackage.days}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Services;
