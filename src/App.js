// Import go here
import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Links, Route} from 'react-router-dom';
import Nav from './Components/Nav'
import Home from './Components/Home'
import PizzaBuild from './Components/PizzaBuild'
import Order from './Components/Order'
import axios from "axios";
import formSchema from './Validation/formSchema'
import * as yup from 'yup';

// Adding initial states here
const initialPizzaOrder = {
  name: '', 
  size: '',
  sauce: '', 
  specinst: '', 
  toppings: {pepperoni: false, sausage: false, pineapple: false, onion: false,}}

const initialErrors = {
  name: '',
  size: '',
  sauce:'',
};

const initialDisabled = true;
const initialOrder = {name: '', sauce: '', size: '', specinst: ''}

const App = () => {
  // Adding states here
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [pizzaOrder, setPizzaOrder] = useState(initialPizzaOrder)
  const [newOrder, setNewOrder] = useState(initialOrder)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getYourOrder = () => {
    axios.get( 'https://reqres.in/api/users')
    .then(res => {
      setNewOrder(res.data)
    })
    .catch(err => {
      console.log('Could not get your order')
    })
  }
  const postYourOrder = yourOrder => {
    axios.post('https://reqres.in/api/users', yourOrder)
    .then(res => {
      setNewOrder(res.data)
      
    })
    .catch(err => {
      console.log('Could not post your order')
    })
    .finally(() => {
      setPizzaOrder(initialPizzaOrder)
    })
  }
// Event handler
const updatePizzaOrder = e => {
  const name = e.target.name
  const value = e.target.value

  yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
    setPizzaOrder({
      ...pizzaOrder,
      [name]: value
    })
}

const updateCheckBox = e => {

    const { name } = e.target
    const { checked } = e.target

    setPizzaOrder({
      ...pizzaOrder, 
      toppings: {...pizzaOrder.toppings, 
        [name]: checked, 
      }
    })
  }

  
  const onSubmit = evt => {
    evt.preventDefault()

    const yourOrder = {
      name: pizzaOrder.name.trim(),
      size: pizzaOrder.size.trim(),
      sauce: pizzaOrder.sauce.trim(),
      specinst: pizzaOrder.specinst.trim()
    }
    postYourOrder(yourOrder)
  }

  useEffect(()=> {
    getYourOrder()
  },[])

  useEffect(() => {
    formSchema.isValid(pizzaOrder)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [pizzaOrder])
  
  return (
    <Router>
    <div>
      <Nav />
      <Route exact path='/Home' component={Home} />
      <Route exact path='/BuildYourOwn'><PizzaBuild 
      pizzaOrder={pizzaOrder}
      updatePizzaOrder={updatePizzaOrder}
      updateCheckBox={updateCheckBox} 
      disabled={disabled} 
      onSubmit={onSubmit} 
      errors={formErrors} /></Route>
      <Route exact path='/YourOrder'><Order order={newOrder}/></Route>
    </div>
    </Router>
  );
};
export default App;
