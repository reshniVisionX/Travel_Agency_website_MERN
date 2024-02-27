import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import Cards from './components/Cards';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import login from './components/pages/login';
import CheckIn from './components/pages/CheckIn';
import Destination from './destination/SearchAndWishlist';
import MySpots from './destination/MySpots';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Products} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/login" component={login} />
          <Route path="/check-in" component={CheckIn} />
          <Route path="/destination" component={Destination} />
          <Route path="/MySpots" component={MySpots} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
