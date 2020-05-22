// Import go here
import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Links, Route} from 'react-router-dom';
import Nav from './Components/Nav'
import Home from './Components/Home'
import PizzaBuild from './Components/PizzaBuild'
import Order from './Components/Order'
import axios from "axios";
import formSchema from '../src/Validation/formSchema'
import * as yup from 'yup'

// Adding initial states here
const initialValues = {size: '', sauce: '', toppings: {pepperoni: false, sausage: false, pineapple: false, onion: false}, specialinstructions: ''}
const initialErrors = {}
const initialDisabled = true;


const App = () => {
  // Adding states here
  
  const [errors, setErrors] = useState(initialErrors)
  const [values, setValues] = useState(initialValues)
  const [yourOrder, setYourOrder] = useState('')
  const [disabled, setDisabled] = useState(initialDisabled)

  const onSubmit = evt => {
    evt.preventDefault()
    const yourOrder = {
      name: values.name.trim(),
      size: values.size.trim(),
      sauce: values.sauce.trim(),
      specialinstructions: values.specialinstructions.trim()
    }
  }
  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setErrors({
          ...errors,
          [name]: ''
        })
      })
      .catch(err => {
        setErrors({
          ...errors,
          [name]: err.errors[0]
        })
      })
    }
  const getYourOrder = () => {
    axios.get( 'https://reqres.in/api/users')
    .then(res => {
      setYourOrder(res.data)
    })
  }

  const postYourOrder = yourOrder => {
    axios.post(`https://reqres.in/api/users`, yourOrder)
    .then(res => {
      setYourOrder(res.data, ...yourOrder)
    })
    .catch(err => {
      debugger
    })
    .finally(() => {
      setValues(initialValues)
    })
  }
  useEffect(() => {
    // 🔥 STEP 11- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(values)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [values])
 
  return (
    <Router>
    <div>
      <Nav />
      <Route exact path='/Home' component={Home} />
      <Route exact path='/BuildYourOwn' component={<PizzaBuild onInputChange={onInputChange} values={values} disabled={disabled} onSubmit={onSubmit}/>}/>
      <Route exact path='/Home' component={Order}/>
    </div>
    </Router>
  );
};
export default App;
