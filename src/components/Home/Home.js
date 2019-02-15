import React, { Component } from 'react'
import PartsModal from '../PartsModal/PartsModal'
import './Home.css'
import {connect} from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalShow: false
        }
    }

    handleGetYears = () => {

    }
    handleGetModels = () => {

    }
    handleGetTrims = () => {

    }
    render() {
        let modalClose = () => this.setState({ modalShow: false })
        return (
            <div >
                <div className='home-body'>
                    <div className='picker-frame'>
                        <form className='vehicle-picker'>
                            <h2>Select Parts by Vehicle</h2>
                            <p>Entering your vehicle information will help us find the right parts for your vehicle.</p>
                            <div className='picker-btns'>
                                <button className='dropdown' onClick={() => this.setState({ modalShow: true })}>Year</button>
                                <button className='dropdown' onClick={() => this.setState({ modalShow: true })}>Model</button>
                                <button className='dropdown' onClick={() => this.setState({ modalShow: true })}>Trim</button>
                                <PartsModal show={this.state.modalShow} onHide={modalClose}/>
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

const mapToProps = (reduxState) => {
    const {year, model, trim} = reduxState
    return{
      year,
      model,
      trim
    }
  }
  export default connect(mapToProps)(Home)