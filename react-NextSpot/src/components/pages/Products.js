import React, { useState } from 'react';
import '../../App.css';
import './Products.css';

const bloggers = [
  {
    name: 'Sushant',
    profileImage: 'https://tse2.mm.bing.net/th?id=OIP.UfE-M6M2oX0v6Oy5aHEpDgHaHv&pid=Api&P=0&h=180',
    content: "Disney World, the magical kingdom in Orlando, Florida, enchants visitors with iconic characters, thrilling rides, and enchanting parades. It's a dream come true for families and Disney fans. The park's immersive experiences and fairy tale atmosphere make it a must-visit destination. Embark on adventures, meet beloved characters, and create lasting memories.",
  },
  {
    name: 'Sadie',
    profileImage: 'https://tse2.mm.bing.net/th?id=OIP.8LVhUPFFIuVKcnTRi_OYwAHaHa&pid=Api&P=0&h=180',
    content: "Maldives, a tropical paradise, boasts crystal-clear waters, overwater bungalows, and vibrant coral reefs. It's a haven for snorkeling and diving enthusiasts. The Maldivian culture and warm hospitality make it an idyllic destination. Explore pristine beaches, soak up the sun, and indulge in luxury resorts.",
  },
  {
    name: 'Holland',
    profileImage: "https://tse4.mm.bing.net/th?id=OIP.DWcjhgvpPmdXeYuOKGE_xQHaHa&pid=Api&P=0&h=180",
    content: "Santorini, a Greek island in the Aegean Sea, is a breathtaking escape with its iconic blue-domed churches and stunning sunsets over the caldera. From exploring charming villages like Oia to savoring local cuisine, it's a paradise for romantics and wanderers. Dive into crystal-clear waters, visit ancient ruins, and immerse yourself in the unique culture of this enchanting destination.",
  },
  {
    name: 'Natly',
    profileImage: 'https://tse4.mm.bing.net/th?id=OIP.xtixqzChZ5KfzieRuzuXAgHaHa&pid=Api&P=0&h=180',
    content: "Kyoto, Japan's cultural heart, beckons with its serene temples, historic geisha districts, and lush bamboo groves. It's a place where tradition meets modernity. Explore Kyoto's imperial palaces, savor matcha in traditional teahouses, and witness the beauty of cherry blossoms in spring. Experience the essence of Japan's rich heritage and embrace the tranquility of this ancient city.",
  },
  {
    name: 'Kristen',
    profileImage: "https://tse2.mm.bing.net/th?id=OIP.I07jil4CwTfBsc4XZ6YnCQHaK9&pid=Api&P=0&h=180",
    content: "Marrakech, the vibrant 'Red City' of Morocco, dazzles visitors with its bustling souks, ornate palaces, and the scent of spices in the air. Dive into the sensory overload of Jemaa el-Fnaa square, get lost in the winding alleys of the Medina, and discover the beauty of Moroccan architecture. Marrakech offers an immersive journey into the exotic, a blend of history and modernity.",
  },
  {
    name: 'Vitran',
    profileImage: 'https://tse1.mm.bing.net/th?id=OIP.U8ECj42altbvD-iw8YQNcgHaFf&pid=Api&P=0&h=180',
    content: "Machu Picchu, the 'Lost City of the Incas,' is a marvel of ancient engineering and breathtaking landscapes. Hidden in the Andes mountains of Peru, this UNESCO World Heritage site offers a glimpse into Incan civilization. Hike the Inca Trail, witness the sunrise over the ruins, and be captivated by the mystique of this archaeological wonder that's a testament to human ingenuity.",
  },
  {
    name: 'Cassie',
    profileImage: 'https://tse3.mm.bing.net/th?id=OIP.3U37TuFuhF0tGodE-VARegHaGW&pid=Api&P=0&h=180',
    content: "Dubai, a city of superlatives in the United Arab Emirates, is synonymous with luxury, futuristic architecture, and world-class shopping. Explore the world's tallest building, the Burj Khalifa, relax on pristine beaches, and embark on a desert safari. Dubai's skyline is a testament to innovation, while its traditional souks and culture offer a fascinating contrast, making it a dynamic destination for travelers.",
  }
 
];

export default function Blog() {
  const [formData, setFormData] = useState({
    name: '',
    profileImage: '',
    content: '',
    contact: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="body1">
      <h1 className="blog">Bloggers SpotX...!</h1>
      <div className="blogger-container">
        {bloggers.map((blogger, index) => (
          <div key={index} className={index % 2 === 0 ? 'blogger-left' : 'blogger-right'}>
            <div className='blogger-profile'>
              <img src={blogger.profileImage} alt={blogger.name} />
              <h2>{blogger.name}</h2>
              <p>{blogger.content}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="blog-form-container">
        <h2>Add a new Blogger and Blog...</h2>
        Name Of the Blogger :
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        /><br/><br/>
        Update Profile :
        <input
          type="text"
          name="profileImage"
          placeholder="Profile Image URL"
          value={formData.profileImage}
          onChange={handleInputChange}
        /><br/><br/>
        Share Your Experiences :
        <textarea
          name="content"
          placeholder="Description"
          value={formData.content}
          onChange={handleInputChange}
        /><br/><br/>
        Enter your Number : 
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleInputChange}
        /><br/><br/>
        <button type='submit'>Switch to my blog</button><br/><hr></hr><br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
