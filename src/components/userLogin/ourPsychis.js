import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import $ from 'jquery'
import { connect } from 'react-redux'
import { getMyProfile, getAllAdvisor } from '../../redux/action/userProfileAction'

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';

// React Strap
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown } from 'reactstrap';






const MenuItems = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);


    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);


    const display = {
        display: 'block',
        width: '170px',
        backgroundColor: 'white',
        color: 'black'
    }

    const onMouseEnter = () => {
        setDropdownOpen2(true);
    }

    const onMouseLeave = () => {
        setDropdownOpen2(false);
    }
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret title="Filter by">
                Filter by
            </DropdownToggle>
            <DropdownMenu >

                <DropdownItem
                    style={display}
                >Top Psychics</DropdownItem>
                <DropdownItem
                    style={display}
                >New Psychics</DropdownItem>
                <DropdownItem
                    style={display}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <UncontrolledButtonDropdown
                        direction="right"
                        isOpen={dropdownOpen2}
                    >

                        {/* <Dropdown > */}
                        <DropdownToggle
                            tag="div"
                            data-toggle="dropdown"
                            aria-expanded={dropdownOpen}
                        >
                            Specialties
                        </DropdownToggle>
                        <DropdownMenu >

                            {/* <DropdownItem divider /> */}
                            <DropdownItem
                                style={display}
                            >Specialties 1</DropdownItem>
                            <DropdownItem
                                style={display}
                            >Specialties 2</DropdownItem>
                            <DropdownItem
                                style={display}
                            >Specialties 3 </DropdownItem>
                        </DropdownMenu>
                        {/* </Dropdown> */}
                    </UncontrolledButtonDropdown>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

class ReaderPsychics extends React.Component {
    constructor(props) {
        super(props);
        props.getAdvisor()
    }
    state = {
        advisors: '',
        msg: ''
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                advisors: this.props.profile.advisors.advisors
            })
            // console.log(this.state);

        }, 1500);

    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    onChangeHandler = (e) => {
        let name = e.target.value
        if (name !== '') {
            let searchedItems = this.state.advisors.filter((pro) => {
                return pro.first_name.toLowerCase().includes(name.toLowerCase())

            })
            this.setState({
                advisors: searchedItems
            })
        } else {
            this.setState({
                advisors: this.props.profile.advisors.advisors
            })
        }

    }

    render() {
        return (
            <>
                <div style={{ margin: "50px 0px" }}>
                    <section class="section advisor_section wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <h3 class="section-title-sub" style={{ textAlign: "left", padding: "5px 0px" }}>Our Psychics</h3>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="input-group tableSearchbar">
                                        <div class="input-group-btn search-panel">

                                            <MenuItems />
                                            {/* <button type="button" onClick={() => {
                                                $('.filteredItems').slideToggle(400);
                                            }} class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                <span id="search_concept">Filter by</span> <span class="caret"></span>
                                            </button>
                                            <ul class="dropdown-menu filteredItems" role="menu">
                                                <li><a href="#contains">Top Psychics </a></li>
                                                <li><a href="#its_equal">New Psychics </a></li>
                                                <li class="dropdown-submenu">
                                                    <a class="test" onClick={() => {
                                                        $('.specialties').slideToggle(400);
                                                    }} href="#">Specialties <span class="caret"></span></a>
                                                    <ul class="dropdown-menu specialties">
                                                        <li><a href="#contains">Specialties 1 </a></li>
                                                        <li><a href="#its_equal">Specialties 2 </a></li>
                                                        <li><a href="#all">Specialties 3</a></li>
                                                    </ul>
                                                </li>
                                            </ul> */}
                                        </div>
                                        <input type="hidden" name="search_param" value="all" id="search_param" />
                                        <input type="text" class="form-control" name="desc" onChange={this.onChangeHandler} placeholder="Search term..." />
                                        <span class="input-group-btn">
                                            <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {this.state.advisors ?
                                    this.state.advisors.map((item) => {
                                        return <div class="col-xs-12 col-md-3">
                                            <div class={`advisor ${item.activity_status}`}>
                                                <div class="wrap">
                                                    <div class="media">
                                                        <div class="media-left">
                                                            <img class="media-object" src={require("../assets/uploads/advisor/1.png")} alt="..." />
                                                        </div>
                                                        <div class="media-body">
                                                            <h4 class="media-heading">{item.first_name}</h4>
                                                            <p>{item.subject}</p>
                                                            <p className={`userStatus ${item.activity_status}`}><strong><i class="fa fa-eye"></i> <span></span></strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="desc">
                                                    <p class="about"><a href="#">{item.about}</a></p>
                                                    <p class="price"><span>$10.90</span>Fee / Minute</p>
                                                    <div class="custom_row">
                                                        <p class="reivews">Reviews <strong>450</strong></p>
                                                        <p class="rating">
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star-half-o"></i>
                                                        </p>
                                                    </div>
                                                    <div class="text-center">
                                                        <a class="btn chatBtn"><i class="fa fa-comments-o"></i> Chat Now</a>
                                                        <a class="btn viewprofile"><i class="fa fa-link"></i> View Profile</a>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>

                                    }) : ""}


                                <div class="col-xs-12 col-md-3">
                                    <div class="advisor offline">
                                        <div class="wrap">
                                            <div class="media">
                                                <div class="media-left">
                                                    <img class="media-object" src={require("../assets/uploads/advisor/2.png")} alt="..." />
                                                </div>
                                                <div class="media-body">
                                                    <h4 class="media-heading">John Robert</h4>
                                                    <p>Data Analyzist</p>
                                                    <p class="userStatus"><i class="fa fa-eye"></i> <span></span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="desc">
                                            <p class="about"><a href="#">Exceptional adviser with spirituality and religious matters. 4.99 stars out of 5 stars. Extraordinary Reviews from thousands of clients</a></p>
                                            <p class="price"><span>$10.90</span>Fee / Minute</p>
                                            <div class="custom_row">
                                                <p class="reivews">Reviews <strong>450</strong></p>
                                                <p class="rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star-half-o"></i>
                                                </p>
                                            </div>
                                            <div class="text-center">
                                                <a class="btn offlineBtn"><i class="fa fa-comments-o"></i> Offline</a>
                                                <a class="btn viewprofile"><i class="fa fa-link"></i> View Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-md-3">
                                    <div class="advisor busy">
                                        <div class="wrap">
                                            <div class="media">
                                                <div class="media-left">
                                                    <img class="media-object" src={require("../assets/uploads/advisor/3.png")} alt="..." />
                                                </div>
                                                <div class="media-body">
                                                    <h4 class="media-heading">John Robert</h4>
                                                    <p>Data Analyzist</p>
                                                    <p class="userStatus"><i class="fa fa-eye"></i> <span></span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="desc">
                                            <p class="about"><a href="#">Exceptional adviser with spirituality and religious matters. 4.99 stars out of 5 stars. Extraordinary Reviews from thousands of clients</a></p>
                                            <p class="price"><span>$10.90</span>Fee / Minute</p>
                                            <div class="custom_row">
                                                <p class="reivews">Reviews <strong>450</strong></p>
                                                <p class="rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star-half-o"></i>
                                                </p>
                                            </div>
                                            <div class="text-center">
                                                <a class="btn btn-chat yellow" style={{ borderRadius: 5, marginRight: 5 }}><i class="fa fa-comments-o"></i> Busy</a>
                                                <a class="btn viewprofile"><i class="fa fa-link"></i> View Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-3">
                                    <div class="advisor online">
                                        <div class="wrap">
                                            <div class="media">
                                                <div class="media-left">
                                                    <img class="media-object" src={require("../assets/uploads/advisor/1.png")} alt="..." />
                                                </div>
                                                <div class="media-body">
                                                    <h4 class="media-heading">John Robert</h4>
                                                    <p>Data Analyzist</p>
                                                    <p class="userStatus"><i class="fa fa-eye"></i> <span></span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="desc">
                                            <p class="about"><a href="#">Exceptional adviser with spirituality and religious matters. 4.99 stars out of 5 stars. Extraordinary Reviews from thousands of clients</a></p>
                                            <p class="price"><span>$10.90</span>Fee / Minute</p>
                                            <div class="custom_row">
                                                <p class="reivews">Reviews <strong>450</strong></p>
                                                <p class="rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star-half-o"></i>
                                                </p>
                                            </div>
                                            <div class="text-center">
                                                <a class="btn chatBtn"><i class="fa fa-comments-o"></i> Chat Now</a>
                                                <a class="btn viewprofile"><i class="fa fa-link"></i> View Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section></div>


            </>
        )
    }
}

let mapStateToProps = (store) => {
    // console.log(store.ProfileReducer);

    return {
        auth: store.AuthReducer,
        profile: store.ProfileReducer
    }
}

let mapDispatchToProps = (dispatch) => {

    return ({
        collectData: () => {
            dispatch(getMyProfile())
        },
        getAdvisor: () => {
            dispatch(getAllAdvisor())
        },

    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReaderPsychics));

