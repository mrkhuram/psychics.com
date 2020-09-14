import React from 'react'
import {Link} from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return (
            <>
        <section class="section footer">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-6  col-md-3" >
                            <img src={require("../assets/images/logo2.png")}/>
                            <p class='logo_text'>Guru Psychics Is A Leading Community For Online Psychics. Having A Reading With Our Gurus Is Simple And Effective. We Offer Special And Helpful Readings Through The Guidance Of Our Readers Who Are Verified Experts.</p>
                        </div>
                        <div class="col-xs-6  col-md-3">
                           
                        </div>
                        <div class="col-xs-6  col-md-3">
                            
                        </div>
                        <div class="col-xs-6  col-md-3">
                            <h4>Company</h4>
                            <ul class="links">
                                <li><Link to="/AboutUs">About us</Link></li>
                                <li><Link to="/WhyUs">Why us</Link></li>
                                <li><Link to="/contactUs">Contact us</Link></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><Link to="/Pricing">Pricing</Link></li>
                            </ul>
                        </div>
                        {/* <div class="col-xs-6  col-md-3">
                            <h4>Services</h4>
                            <ul class="links">
                                <li><a href="#">psychic readings</a></li>
                                <li><a href="#">love & relationships</a></li>
                                <li><a href="#">life questions</a></li>
                                <li><a href="#">TAROT READINGS</a></li>
                                <li><a href="#">Spiritual Readings</a></li>
                                <li><a href="#">Psychic Mediums</a></li>
                            </ul>
                        </div> */}
                        {/* <div class="col-xs-12  col-md-3">
                            <div class="box">
                                <h4>Featured Apps</h4>
                                <p>The apps will be launch as soon as possible</p>
                                <p class='footer-icon'><a href="#"><i class="fa fa-apple"></i></a><a href="#"><i class="fa fa-android"></i></a></p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section class="footer_bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <p>   <a href="#">Term Of Use</a> | <a href="#">Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}

                
export default Footer;