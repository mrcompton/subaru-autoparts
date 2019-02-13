import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './TopNav.css'
const TopNav = (props) => {
    return (
        <div className='outer-container'>
            <div >
                <div className='inner-container'>
                    <div className='logo-container'>
                        <img className="store-logo" src="https://wmmr.com/wp-content/uploads/sites/15/2015/10/Subaru-Logo-Stacked-copy.png" alt="Logo"></img>
                        <Link to ='/' className='logo-title'><div>SubaruAutoParts.com</div></Link>
                        
                        <div className='button-container'>
                            
                            <Link to='/login'><button className="btn-account">My Account</button></Link>
                            <Link to='/cart'><button className='btn-cart'>My Cart</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default withRouter(TopNav)