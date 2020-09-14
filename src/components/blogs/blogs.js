import React from 'react'
import './style.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.min.css'
import '../assets/css/global.css'
import '../assets/css/style.css'

class Blogs extends React.Component {
    render() {
        return (
            <>
                <section class="section blog_section wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                    <div class="container">
                        <div class="section-header underline">
                            <h3 class="section-heading">Blogs And Articles</h3>
                            <p>32  of the top online psychic readers available for you. Choose yours!</p>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-4">
                                <div class="blog_box">
                                    <div class="wrap">
                                        <img class="blog-image" src={require("../assets/images/others/img1.jpg")} alt="..." />
                                    </div>
                                    <div class="text">
                                        <h3 class="title">
                                            What is a Clairaudient?
						</h3>
                                        <p class="other"><span class='posted_by'>Posted By <strong>Psychis</strong></span><span class="pull-right date">02/14/2019</span></p>
                                        <p class="desc">Exceptional adviser with spirituality and religious matters. 4.99 stars out of 5 stars. Extraordinary Reviews</p>
                                        <p><a href="#" class="btn">Continue Reading <i class="fa fa-angle-right"></i> <i class="fa fa-angle-right"></i></a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-4">
                                <div class="blog_box">
                                    <div class="wrap">
                                        <img class="blog-image" src={require("../assets/images/others/img2.jpg")} alt="..." />
                                    </div>
                                    <div class="text">
                                        <h3 class="title">
                                            All You Need to Know About Clairvoyant Readings
						</h3>
                                        <p class="other"><span class='posted_by'>Posted By <strong>Psychis</strong></span><span class="pull-right date">02/14/2019</span></p>
                                        <p class="desc">Exceptional adviser with spirituality and religious matters. 4.99 stars out of 5 stars. Extraordinary Reviews</p>
                                        <p><a href="#" class="btn">Continue Reading <i class="fa fa-angle-right"></i> <i class="fa fa-angle-right"></i></a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-4">
                                <div class="blog_box">
                                    <div class="wrap">
                                        <img class="blog-image" src={require("../assets/images/others/img3.jpg")} alt="..." />
                                    </div>
                                    <div class="text">
                                        <h3 class="title">
                                            Can a Psychic Really Predict the Future?
						</h3>
                                        <p class="other"><span class='posted_by'>Posted By <strong>Psychis</strong></span><span class="pull-right date">02/14/2019</span></p>
                                        <p class="desc">Exceptional adviser with spirituality and religious matters. 4.99 stars out of 5 stars. Extraordinary Reviews</p>
                                        <p><a href="#" class="btn">Continue Reading <i class="fa fa-angle-right"></i> <i class="fa fa-angle-right"></i></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Blogs;