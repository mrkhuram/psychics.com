import React from 'react'
// import '../assets/css/bootstrap.min.css'
// import '../assets/css/font-awesome.min.css'
// import '../assets/css/global.css'
// import '../assets/css/owl.carousel.min.css'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import './style.css'


class Carousel extends React.Component {
    content = [
        {
            title: 'Finding love & Happiness has never been easier',
            // image: 'https://st.depositphotos.com/1017039/4272/i/950/depositphotos_42721459-stock-photo-boy-and-girl-teens-lying.jpg',
            image: '/assets/images/banner/1.png',
            description: 'Live Chat Psychic Readings',
            button: 'Register Now',
            className: 'img1 slider-content'

        },
        {
            title: 'Finding love & Happiness has never been easier',
            // image: 'https://st.depositphotos.com/1017039/4272/i/950/depositphotos_42721459-stock-photo-boy-and-girl-teens-lying.jpg',
            image: '/assets/images/banner/2.png',
            description: 'Live Chat Psychic Readings',
            button: 'Register Now',
            className: 'img2 slider-content'


        },
        {
            title: 'Finding love & Happiness has never been easier',
            image: '/assets/images/banner/3.png',
            description: 'Live Chat Psychic Readings',
            button: 'Register Now',
            className: 'img3 slider-content'


        },
        {
            title: 'Finding love & Happiness has never been easier',
            image: '../assets/images/banner/4.png',
            description: 'Live Chat Psychic Readings',
            button: 'Register Now',
            className: 'img4 slider-content'


        },
        {
            title: 'Finding love & Happiness has never been easier',
            image: '../assets/images/banner/5.png',
            description: 'Live Chat Psychic Readings',
            button: 'Register Now',
            className: 'img5 slider-content'

        }
    ]
    render() {
        return (
            <div>


                <Slider className="slider-wrapper" style={{
                     slider: 'slider',
                     previousButton: 'previousButton',
                     nextButton: 'nextButton',
                     buttonDisabled: 'disabled',
                     track: 'track',
                     slide: 'slide',
                     hidden: 'hidden',
                     previous: 'previous',
                     current: 'current',
                     next: 'next',
                     animateIn: 'animateIn',
                     animateOut: 'animateOut',
                    
                }
            }
                autoplay='3000'
                infinite= 'true'
                >
                    {this.content.map((item, index) => (
                        <div
                            key={index}
                            className={item.className}
                        >
                            <div className="inner">
                                <p className='descOfCarousel'>{item.description}</p>
                                <h2>{item.title}</h2>
                                <button className="btnOfCarsouel">{item.button}</button>
                            </div>
                        </div>
                    ))}
                </Slider>

               
            </div>
        )
    }
}
export default Carousel;