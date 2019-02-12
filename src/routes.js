import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import Cart from './components/Cart/Cart'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Auth}/>
        <Route path='/cart' component={Cart}/>
    </Switch>

)