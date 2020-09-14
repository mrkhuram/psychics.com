import React from 'react'
import { Link } from 'react-router-dom';

class HomePanel extends React.Component {
    render() {
        return (
            <>

                <div class="welcome_section">
                    <div class="row first_row">
                        <div class="col-md-3 wow flipInY" data-wow-delay="0.1s">
                            <Link to="/admin/reader" className='link'>
                                <div class="box">
                                    <div class="col-xs-4 col">
                                        <p class="icon color1"><i class="fa fa-users"></i></p>
                                    </div>
                                    <div class="col-xs-8 col">
                                        <h2 class="section-title" >Readers</h2>
                                        <p>459</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-md-3 wow flipInY" data-wow-delay="0.3s">
                            <Link to="/admin/client" className='link'>
                                <div class="box">
                                    <div class="col-xs-4 col">
                                        <p class="icon color2"><i class="fa fa-users"></i></p>
                                    </div>
                                    <div class="col-xs-8 col">
                                        <h2 class="section-title" >Clients</h2>
                                        <p>2,301</p>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div class="col-md-3 wow flipInY" data-wow-delay="0.5s">
                            <Link to="/admin/blogs-and-articals" className='link'>
                                <div class="box">
                                    <div class="col-xs-4 col">
                                        <p class="icon color3"><i class="fa fa-files-o"></i></p>
                                    </div>
                                    <div class="col-xs-8 col">
                                        <h2 class="section-title" >Blogs/Article</h2>
                                        <p>401</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-md-3 wow flipInY" data-wow-delay="0.5s">
                            <Link to="/admin/announcement" className='link'>
                                <div class="box">
                                    <div class="col-xs-4 col">
                                        <p class="icon color4"><i class="fa fa-bullhorn"></i></p>
                                    </div>
                                    <div class="col-xs-8 col">
                                        <h2 class="section-title" >Announcements</h2>
                                        <p>189</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="welcome_section">
                    <div class="row first_row">
                        <div class="col-md-3 wow flipInY" data-wow-delay="0.1s">
                            <div class="box">
                                <div class="col-xs-4 col">
                                    <p class="icon color1"><i class="fa fa-shopping-cart"></i></p>
                                </div>
                                <div class="col-xs-8 col">
                                    <h2 class="section-title">Today Purchase</h2>
                                    <p>Rs.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 wow flipInY" data-wow-delay="0.3s">
                            <div class="box">
                                <div class="col-xs-4 col">
                                    <p class="icon color2"><i class="fa fa-dollar"></i></p>
                                </div>
                                <div class="col-xs-8 col">
                                    <h2 class="section-title">Today Sale</h2>
                                    <p>Rs.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 wow flipInY" data-wow-delay="0.5s">
                            <div class="box">
                                <div class="col-xs-4 col">
                                    <p class="icon color3"><i class="fa fa-bar-chart"></i></p>
                                </div>
                                <div class="col-xs-8 col">
                                    <h2 class="section-title">Today Saving</h2>
                                    <p>Rs. </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 wow flipInY" data-wow-delay="0.5s">
                            <div class="box">
                                <div class="col-xs-4 col">
                                    <p class="icon color4"><i class="fa fa-bar-chart"></i></p>
                                </div>
                                <div class="col-xs-8 col">
                                    <h2 class="section-title">Today Expanse</h2>
                                    <p>Rs.1230</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}

export default HomePanel;