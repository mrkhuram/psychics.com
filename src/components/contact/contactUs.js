import React from 'react'
import {Link} from 'react-router-dom'
import './contact.css'

class ContactUs extends React.Component {
    render() {
        return (
            <>
            <section class="section contact-us">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-md-4">
                            <ul class="list-group">
                                {/* <li class="list-group-item">
                                <div class="row">
                                    <div class="col-xs-10">
                                        <h5>Address</h5>
                                        <p>Peoples Colony #2 , .
                                        </p>
                                    </div>
                                    <div class="col-xs-2">
                                        <i class="fa fa-map-marker pull-right"></i>
                                    </div>
                                </div>
                            </li> */}
                            <li class="list-group-item">
                                <div class="row">
                                    <div class="col-xs-10">
                                        <h5>Email</h5>
                                        <p><a href="mailto:mrkhuram00@gmail.com">mrkhuram00@gmail.com</a></p>
                                    </div>
                                    <div class="col-xs-2">
                                        <i class="fa fa-envelope pull-right"></i>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row">
                                    <div class="col-xs-10">
                                        <h5>Phone</h5>
                                        <p><a href="mailto:1-202-555-0190">+92-343-776-1535</a></p>
                                    </div>
                                    <div class="col-xs-2">
                                        <i class="fa fa-phone pull-right"></i>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <h5>Find Us On</h5>
                                        <p>
                                            <a href="#"><i class="fa fa-facebook-square"></i></a>
                                            <a href="#"><i class="fa fa-twitter-square"></i></a>
                                            <a href="#"><i class="fa fa-instagram"></i></a>
                                            {/* <a href="#"><i class="fa fa-pinterest-square"></i></a> */}
                                        </p>
                                    </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-md-8">
                            <form action="http://localhost/action_page.php">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Full Name" id="name"/>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email" id="email"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Username" id="name"/>
                            </div>
                            <div class="form-group hide">
                                <input type="text" class="form-control" placeholder="Phone" id="phone"/>
                            </div>
                            {/* <div class="form-group">
                                <p class="p"><i class="fa fa-info-circle"></i> <i>If you are a registered client</i></p>
                            </div> */}
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Subject" id="phone"/>
                            </div>
                            <div class="form-group">
                                <textarea  class="form-control" rows="5" placeholder="Message" ></textarea>
                            </div>
                            <div class="form-group">
                                <div class="g-recaptcha" data-sitekey="6LfPW6oUAAAAABCMHpaOfLPrqBTzSFJuRW8-mk7S"></div>
                            </div>
                            <button type="submit" class="btn btn-default site-btn"
                                style={{textTransform: 'capitalize'}}
                            >Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                </section>
            </>
        )
    }
}

export default ContactUs