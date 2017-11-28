import React from 'react';
import { Carousel } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import ShowProducts from './ShowProducts'
import SingleProduct from './SingleProduct'
import RegisterForm from './RegisterForm'
import Checkout from './Checkout'
import ConfirmedOrder from './ConfirmedOrder'


const Main = (props) => (
  <div className="Main">
  	<Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/products' component={ShowProducts}/>
      <Route exact path='/products/:productTitle' render={(props) => ( <SingleProduct {...props} addToCart={props.addToCart}/> )} />
      <Route exact path='/registration' component={RegisterForm}/>
      <Route exact path='/checkout' component={Checkout}/>
      <Route exact path='/confirmedorder' component={ConfirmedOrder}/>
    </Switch>
   </div>

)

export default Main

