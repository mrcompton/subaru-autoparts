import React, { Component } from 'react'
import './About.css'

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        return (
            <div className='about'>
                <div className='about-items'>
                    <h2>In vehicula quam. Quis est cursus varius.</h2>
                    <img className='about-imgs' src='https://www.simeonemuseum.org/wp-content/uploads/events/simeone-museum-subaru-justy-bonneville-05.jpg' alt='race'/>
                    <p5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla, est eu semper faucibus, velit odio dictum libero, ut luctus sapien velit sit amet libero.</p5>
                    <img className='about-imgs' src='https://3d-car-shows.com/wp-content/uploads/2014/06/Subaru_Racing_Drivers.jpg' alt=''/>
                    <p5>Vivamus ac placerat ligula. Duis dictum erat vitae interdum rutrum. Nam quis lobortis ipsum. Vestibulum dictum felis magna, non accumsan massa bibendum a. Pellentesque tristique ante nec magna malesuada tincidunt. Nullam efficitur felis lacus, nec dapibus erat convallis eu. Vivamus gravida cursus maximus.</p5>
                    <img className='about-img-wide' src='https://secure-akns.subaru.com/content/media/mp_video_768/WhySubaruService_PF.jpg' alt=''/>
                    <p5>Sed nec orci rutrum velit aliquam sagittis non id velit. Etiam et lobortis urna, quis tristique dui. Pellentesque commodo mollis ante, id varius urna aliquet vel. Nunc ut fermentum magna. Proin nec pretium erat. Suspendisse suscipit lacus bibendum metus pulvinar, ut lacinia nisl eleifend.</p5>
                </div>
            </div>
        )
    }
}

export default About