import React from 'react'
import { Link } from 'react-router-dom'
import './pricing.css'
import services from '../services'

class Pricing extends React.Component {


    purchase = (e)=>{
        console.log(e.target.name)
        let timeType = e.target.name
        services.addTime(timeType)
    }
    render() {
        return (
            <>
            <section class="price_section">
                <div class="container">
                    <div class="section-header underline">
                        <h3 class="section-heading">Our Pricing</h3>
                        <p>We are providing 5 Pricing plane for your best </p>
                        <br/>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-md-2 custom_width">
                            <div class="pricing_box">
                                <h3>Bronze </h3>
                                <ul>
                                    <li>10 minutes for <span>$29.99</span></li>
                                    <li>instead of <span>$<strike>29.99</strike></span></li>
                                    <li>You save <span>$0 </span></li>
                                </ul>
                                <a href="#" class="section-btn" onClick={this.purchase} name="bronze">Purchase</a>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-2 custom_width">
                            <div class="pricing_box">
                                <h3>Silver  </h3>
                                <ul>
                                    <li>20 minutes for <span>$55,80</span></li>
                                    <li>instead of <span>$<strike>59.80</strike></span></li>
                                    <li>You save <span>$4 </span></li>
                                </ul>
                                <a href="#" class="section-btn" onClick={this.purchase} name="silver">Purchase</a>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-2 custom_width">
                            <div class="pricing_box">
                                <h3>Gold </h3>
                                <ul>
                                    <li>30 minutes for <span>$77,70</span></li>
                                    <li>instead of <span>$<strike>89,70</strike></span></li>
                                    <li>You save <span>$12 </span></li>
                                </ul>
                                <a href="#" class="section-btn" onClick={this.purchase} name="gold">Purchase</a>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-2 custom_width">
                            <div class="pricing_box">
                                <h3>Platinum</h3>
                                <ul>
                                    <li>45 minutes for <span>$107,55</span></li>
                                    <li>instead of <span>$<strike>134,55</strike></span></li>
                                    <li>You save <span>$27 </span></li>
                                </ul>
                                <a href="#" class="section-btn" onClick={this.purchase} name="platinum">Purchase</a>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-2 custom_width">
                            <div class="pricing_box">
                                <h3>Diamond</h3>
                                <ul>
                                    <li>45 minutes for <span>$131,40</span></li>
                                    <li>instead of <span>$<strike>179,40</strike></span></li>
                                    <li>You save <span>$48 </span></li>
                                </ul>
                                <a href="#" class="section-btn" onClick={this.purchase} name="diamond">Purchase</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            </>
            )
        }
    }
export default Pricing;