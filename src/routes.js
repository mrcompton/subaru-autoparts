import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Parts from './components/Parts/Parts'
import About from './components/About/About'
import Contact from './components/Contact/Contact'


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Auth}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/parts' component={Parts}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
    </Switch>

)