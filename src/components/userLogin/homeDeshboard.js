import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './style.css'
import {getMyProfile} from '../../redux/action/userProfileAction'
import jwt_decode from 'jwt-decode'
import axios from 'axios'


class UserHome extends React.Component {
    constructor(props){
        super(props)
        // props.getProfile()
    }
    state={
        user: ''
    }
    componentDidMount(){
        // this.setState({
        //     user: this.props.auth.userDetail
        // })
        
        setTimeout(() => {
            // console.log(this.state);
            
            
        },1500);
        
    }
    componentWillReceiveProps(newProps, newState) {
        console.log(newProps.auth.userDetail);
        
        this.setState({user: newProps.auth.userDetail})
	}


    render() {
        return (
            <>
                <section class="section wow boxes fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                    <div class="container content_box">
                    <div class="row">
                            <div class="col-xs-12 col-md-3">
                                <div class="media fact_icon">
                                <div class="media-body">
                                    <p>Welcome</p>
                                    <h4 class="media-heading"
                                    style={{
                                        textTransform: 'capitalize'
                                    }}
                                    >{this.props.auth.userDetail.first_name}</h4>
                                </div>
                                </div>
                            </div>    
                            <div class="col-xs-12 col-md-3">
                                <div class="media fact_icon">
                                <div class="media-body">
                                    <p>Available Minutes</p>
                                    <h4 class="media-heading" style={{color:"#3f1b5"}}>{this.props.profile.time}</h4>
                                </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-3">
                                <div class="media fact_icon ">
                                <div class="media-body">
                                    <Link to='/Pricing' class="btn btn-default site-btn addtime" ><i class="fa fa-clock-o"></i> Add time</Link>
                                </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-3">
                                <div class="media fact_icon last">
                                <div class="media-body">
                                    <a href="pricing.html" class="btn btn-default site-btn chatnow" ><i class="fa fa-comments-o"></i> Chat Now</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section wow announcements fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s"> 
                    <div class="container content_box">
                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                <div class="icon"><i class="fa fa-bullhorn"></i></div>
                                <h4 class="section-title-sub">Important Announcements</h4>
                                <p>"The #1 source for good news! For 20 years, our positive news from around the world has uplifted and <br/>inspired millions to become more optimistic."</p>
                            </div>    
                        </div>
                    </div>
                </section>
            </>
            ) 
        }
    }


    let mapStateToProps = (store) => {
        // console.log(store);
        
        
        return {
            auth: store.AuthReducer,
            profile: store.ProfileReducer
        }
    }
    
    let mapDispatchToProps = (dispatch) => {
    
        return ({
            getProfile: () => {
                dispatch(getMyProfile())
            },
        })
    }
    
    export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserHome));
