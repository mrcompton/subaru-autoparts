import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            year: null,
            model: '',
            trim: ''

        }
    }

    handleGetYears = () => {

    }
    handleGetModels = () => {

    }
    handleGetTrims = () => {

    }
    render() {
        return (
            <div >
                <div className='home-body'>
                    <div className='picker-frame'>
                        <form className='vehicle-picker'>
                            <h2>Select Parts by Vehicle</h2>
                            <h7>Entering your vehicle information will help us find the right parts for your vehicle.</h7>
                            <div className='picker-btns'>
                                <button className='btn-year dropdown' type='dropdown'>Year</button>
                                <button className='btn-model dropdown'>Model</button>
                                <button className='btn-trim dropdown'>Trim</button>
                            </div>
                        </form>
                    </div>
                </div>
                <h1>Featured Products</h1>
                <div className='featured-products'>
                    <div>
                        <img className='products' src='https://images-na.ssl-images-amazon.com/images/I/71QpMH8TMnL._SY550_.jpg' alt='' />
                        <div>
                            <p>Oil Filters</p>
                        </div>
                    </div>
                    <div>
                        <img className='products' src='https://www.buyautoparts.com/data/all_images/sr4132x-30-00627-front-map.jpg' alt='' />
                        <div>
                            <p>Starters</p>
                        </div>
                    </div>
                    <div>
                        <img className='products' src='https://cdn.shopify.com/s/files/1/0277/9175/products/0146.jpg?v=1462986568' alt='' />
                        <div>
                            <p>Air Filters</p>
                        </div>
                    </div>
                    <div>
                        <img className='products' src='https://sep.yimg.com/ay/motorcityreman/subaru-impreza-02-03-04-05-2-0-2-5l-replacement-alternator-2.png' alt='' />
                        <div>
                            <p>Alternators</p>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Home