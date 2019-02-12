import React from 'react'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'

const BottomNav = (props) => {
   return (
       <div className='bottom-nav'>
            <div className="navlinks">
                <Link to='/'><span>Home</span></Link>
                <div>Parts</div>
                <div>About</div>
                <div>Contact Us</div>
            </div>
           
           

       </div>
   )
}

export default withRouter(BottomNav)