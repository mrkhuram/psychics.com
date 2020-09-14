import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import UserNav from './userNav'
import ReaderNav from '../reader/readerNav'
import $ from 'jquery'
import { logOut } from '../../redux/action/authAction'
import { connect } from 'react-redux'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown } from 'reactstrap';






const MenuItems = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);


    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);


    const display = {
        display: 'block',
        width: '100%',
        backgroundColor: 'white',
        color: 'black',
        padding: 10,
        borderRadius: 0

    }

    const onMouseEnter = () => {
        setDropdownOpen2(true);
    }

    const onMouseLeave = () => {
        setDropdownOpen2(false);
    }
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}
            // direction='left'
            style={{
                marginTop: 15,
                cursor: 'pointer',
                // width: "00px"
            }}
        >
            <DropdownToggle
                tag="div"
                data-toggle="dropdown"
                aria-expanded={dropdownOpen}
            >
                <i class="fa fa-user"
                    style={{ marginRight: 0, color: 'grey' }}
                ></i> USER
                        </DropdownToggle>

            <DropdownMenu >

                {/* <DropdownItem divider /> */}
                <DropdownItem
                    style={display}
                    onClick={props.clicktoLogout}
                >Sign Out <i class="fa fa-sign-out"></i></DropdownItem>
               

            </DropdownMenu>
        </Dropdown>
    );
}



class UserDeshboard extends React.Component {

    constructor() {
        super()
        // this.state.user = localStorage.getItem('id')
    }

    state = {
        user: "user"
    }

    dropDown = () => {
        $(".signoutoptions").slideToggle(400);
    }
    logout = () => {
        //   this.setState({
        //   user: 'reader'
        //   })
        this.props.logOutUser()
        // this.dropDown()
    }
    changeToReader = () => {
        this.setState({
            user: ''
        })

    }
    render() {
        // console.log(this.state.user);

        return (
            <>
                <div class="header">
                    <div class="container">
                        <nav class="navbar navbar-default custom_nav">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <a class="navbar-brand text hidden" href="index-2.html">Psychic </a>
                                <Link class="navbar-brand img" to='/'>
                                    <img src={require("../assets/images/logo.png")}
                                        style={{ height: 50 }}
                                    /></Link>
                            </div>
                            <div class="collapse navbar-collapse" id="myNavbar">
                                <div class="mobile-menu-header d-none hidden-md hidden-lg">
                                    <a href="index-2.html"><img src="assets/images/logo.png" /></a>
                                    <button class="btn-close">
                                        <span class="line"></span>
                                        <span class="line"></span>
                                    </button>
                                </div>
                                <ul class="nav navbar-nav navbar-right">
                                    <li class="dropdown hidden-md hidden-lg">
                                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Browse
                                                <span class="caret"></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a href="#">Psychic Readings</a></li>
                                            <li><a href="#">Love & Relationships</a></li>
                                            <li><a href="#">Life Questions</a></li>
                                            <li><a href="#">Tarot Readings</a></li>
                                            <li><a href="#">Spiritual Readings</a></li>
                                            <li><a href="#">Psychic Mediums</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown hidden-md hidden-lg">
                                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Client Menu
                                                <span class="caret"></span></a>
                                        <ul class="dropdown-menu">
                                            <li class="<br />
                                                  Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                    "><Link to="/user_dashboard/home">Home</Link></li>
                                            <li class="<br />
                                                  Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                    "><Link to="/user_dashboard/editAcc">Account Info</Link></li>
                                            <li class="<br />
                                                  Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                    "><Link to="/user_dashboard/ourPsychics">Our Psychics </Link></li>
                                            <li class="<br />
                                                  Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                    hide"><a href="user_dashboard6823.html?p=balance">Balance</a></li>
                                            <li class="<br />
                                                  Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                    "><a href="user_dashboard2747.html?p=blog_article">Blogs & Articles</a></li>
                                            <li class="<br />
                                                  Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                "><a href="user_dashboard09da.html?p=chat_history">Chat History</a></li>
                                            <li class="<br />
                                                  Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                "><a href="user_dashboardc7d6.html?p=notification">Notification</a></li>
                                            <li class="<br />
                                                  Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                "><a href="user_dashboarddd45.html?p=purchase_history">Purchase History</a></li>
                                            <li class="<br />
                                                  Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                "><a href="user_dashboard1803.html?p=refer_friend">Refer Friend</a></li>
                                            <li class="<br />
                                                  Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                "><a href="user_dashboarddde5.html?p=report">Report an Issue</a></li>
                                            <li class="<br />
                                                  Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                hide"><a href="user_dashboardf584.html?p=updates">Updates</a></li>
                                            <li class="<br />
                                                  Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                "><a href="#">Messages</a></li>
                                        </ul>
                                    </li>
                                    <li class='chatbtn'>
                                        <a href="#"
                                            style={{ fontSize: 13, color: "grey", marginTop: 5 }}

                                        ><img src={require("../assets/images/chat-icon.gif")} height="20"

                                            /> LIVE CHAT</a></li>
                                    <li class="dropdown">


                                        <MenuItems clicktoLogout={this.logout}/>


                                        <ul class="dropdown-menu signoutoptions">
                                            <li class="hidden"><a href="index-2.html">Goto Site</a></li>
                                            <li class="hidden"><a href="my_psychis.html">My psychis</a></li>
                                            <li class="hidden"><a href="email_subscripion.html">Email Subscriptions</a></li>
                                            {/* <li><a href="#" onClick={this.changeToReader}>Reader <i class="fa fa-sign-out"></i></a></li>                                                
                                                <li><a href="#" onClick={this.props.adminIsAdded}>Admin Panel <i class="fa fa-sign-out"></i></a></li> */}
                                            <li><a href="#" ></a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form class="navbar-form navbar-right">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Find Advisor" />
                                        <div class="input-group-btn">
                                            <button class="btn btn-default" type="submit">
                                                <i class="glyphicon glyphicon-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </nav>
                    </div>
                </div> 
                {
                    this.props.auth.userType === "user"

                        ? <UserNav /> : <ReaderNav />}




            </>
        )
    }
}


let mapStateToProps = (store) => {
    console.log(store.AuthReducer);

    return {
        auth: store.AuthReducer,
        profile: store.ProfileReducer
    }
}

let mapDispatchToProps = (dispatch) => {

    return ({
        logOutUser: () => {
            dispatch(logOut())
        },
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDeshboard));  