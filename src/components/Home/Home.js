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
                <h2>Popular Products</h2>
                <div className='featured-products'>
        
                 
                    <div role='button' onClick={() => this.setState({ modalShow: true })}>
                        <img className='products' src='https://images-na.ssl-images-amazon.com/images/I/41-Gys4tFRL._SL500_AC_SS350_.jpg' alt='' />
                        <div>
                            <p>Oil Filters</p>
                        </div>
                    </div> 
                  
                    <div role='button' onClick={() => this.setState({ modalShow: true })}>
                        <img className='products' src='https://sep.yimg.com/ay/motorcityreman/subaru-impreza-02-03-04-05-2-0-2-5l-replacement-alternator-2.png' alt='' />
                        <div>
                            <p>Alternators</p>
                        </div>
                    </div> 

                    <div role='button' onClick={() => this.setState({ modalShow: true })}>
                        <img className='products' src='https://www.buyautoparts.com/data/all_images/sr4132x-30-00627-front-map.jpg' alt='' />
                        <div>
                            <p>Starters</p>
                        </div>
                    </div>
                    <div role='button' onClick={() => this.setState({ modalShow: true })}>
                        <img className='products' src='https://cdn.shopify.com/s/files/1/0277/9175/products/0146.jpg?v=1462986568' alt='' />
                        <div>
                            <p>Air Filters</p>
                        </div>
                    </div>

                    <div role='button' onClick={() => this.setState({ modalShow: true })}>
                        <img className='products' src='https://neobrake.com/wp-content/uploads/2016/06/NeoBrake-Air-Disc-Brake-Pads-2.1.png' alt='' />
                        <div>
                            <p>Brake Pads</p>
                        </div>
                    </div>

                    <div role='button' onClick={() => this.setState({ modalShow: true })}>
                        <img className='products' src='https://cdn.shopify.com/s/files/1/0890/6136/products/NGK1637_a_1_grande_14d4209b-9071-44fc-be36-05088582c7bf_413x@3x.progressive.jpg' alt='' />
                        <div>
                            <p>Spark Plugs</p>
                        </div>
                    </div>

                    {/* <div role='button' onClick={() => this.setState({ modalShow: true })}>
                        <img className='products' src='https://www.ogracing.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/o/rotor-dimpled-web_7.jpg' alt='' />
                        <div>
                            <p>Rotors</p>
                        </div>
                    </div> */}
                    
                 

                    <div className='cool-pic'>
                        <img className='bottom-pic' src='https://www.marketing91.com/wp-content/uploads/2018/04/Subaru-Competitors.jpg' alt='' />
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