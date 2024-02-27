import '../../App.css'
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import SearchAndWishlist from '../../destination/SearchAndWishlist';



function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <SearchAndWishlist />
      <Footer />
    </>
  );
}

export default Home;