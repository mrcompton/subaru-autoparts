import React from 'react'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'

const TopNav = (props) => {
   return (
       <div>
           <img class="store-logo" src="https://wmmr.com/wp-content/uploads/sites/15/2015/10/Subaru-Logo-Stacked-copy.png" alt="Logo"></img>
           <Link to='/login'><button>My Account</button></Link>
           <Link to='/cart'><button>Cart</button></Link>
       </div>
   )
}

export default withRouter(TopNav)