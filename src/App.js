// Import go here
import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Links, Route} from 'react-router-dom';
import Nav from './Components/Nav'
import Home from './Components/Home'
import PizzaBuild from './Components/PizzaBuild'
import Order from './Components/Order'

// Adding initial states here
const initialPizza = {}
const initialErrors = {}


const App = () => {
  // Adding states here
  const [,] = useState()
  const [,] = useState()


  return (
    <Router>
    <div>
      <Nav />
      <Route exact path='/Home' component={Home} />
      <Route exact path='/Home' component={PizzaBuild}/>
      <Route exact path='/Home' component={Order}/>
    </div>
    </Router>
  );
};
export default App;
