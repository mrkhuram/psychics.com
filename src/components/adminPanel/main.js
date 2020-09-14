import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import './assets/css/style.css'
import HomePanel from './home'
import ChatSection from './chatHistory'
import Client from './client';
import ReaderAdmin from './reader';
import ReaderTestimony from './readerTestimony';
import Announcement from './announcement';
import Invoices from './invoices';
import ReportCenterAdmin from './reportCenter';
import PricingAdmin from './pricingAdmin';
import CouponAdmin from './couponAdmin';
import Admins from './admins';
import BlogsAndArticalsAdmin from './blogsAndArticalAdmin';
import ClientMessages from './clientMessages';
import ReaderMessages from './readersMessages';
import $ from 'jquery'
import { withRouter, Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { allInvoices, allCoupons, announcementList } from '../../redux/action/adminAction'
import { logOut } from '../../redux/action/authAction'
import EditCoupon from './couponEdit';
import NewCoupon from './couponNew';
import NewAnnouncement from './announcementAddNew';
import priceAddNew from './priceAddNew';
import AdminSignup from './adminSignup';
import ClientDetail from './clientDetail'
import ClientStatus from './clientStatus'
import ReaderDetail from './readerDetail'
import ReaderStatus from './readerStatus'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: 'white',
        height: 61
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    dropDownIcons: {
        fontSize: 16
    },
    userName: {
        backgroundColor: "none",
        marginRight: 20,
        textTransform: "capitalize",
        filter: 'none',
        color: 'black',
        "&:hover": {
            outline: "none !important",
            boxShadow: "none !important",
            backgroundColor: "white !important",
            color: "black",
            filter: 'none'

        }
    }
}));


let mapStateToProps = (store) => {
    console.log(store);


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
        getInvoices: () => {
            dispatch(allInvoices())
        },
        couponsList: () => {
            dispatch(allCoupons())
        },
        announcements: () => {
            dispatch(announcementList())
        },
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Admin(props) {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const dropDown = () => {
        $(".dropdown-menu").slideToggle(400);
    }
    const dropDownLogout = () => {
        $(".signoutoptions").slideToggle(400);
    }
    const logout = () => {
        props.logOutUser()
        handleMenuClose()
    }


    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}

        >

            <MenuItem onClick={handleMenuClose} className={
                classes.dropDownIcons
            }>My Profile</MenuItem>
            <MenuItem onClick={logout}
            
            className={
                classes.dropDownIcons
            }>Logout</MenuItem>
        </Menu>
    );
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <div class="header">
                    <div class="">
                        <nav class="navbar navbar-default custom_nav">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
                            <div class="collapse navbar-collapse" id="myNavbar">
                                <ul class="nav navbar-nav navbar-left hidden-xs">
                                    <li><a href="#" class="btnLeftBarToggle"
                                        onClick={handleDrawerOpen}
                                    ><i class="fa fa-navicon"></i></a></li>
                                </ul>
                                <ul class="nav navbar-nav navbar-right">

                                    <li class="hide"><a href="index8d2f.html?p=messages"><i class="fa fa-comments-o"></i><span class="hidden-xs">Live</span> Chat</a></li>
                                    <li class="dropdown">
                                        <a class="dropdown-toggle btnAlert" data-toggle="dropdown" href="#"
                                            onClick={handleProfileMenuOpen}
                                        ><i class="fa fa-bell-o"></i><span class="badge">4</span></a>
                                        <ul class="dropdown-menu bell">
                                            <li><span class="title">Software development</span> <span class='date'>09/12/2018</span>
                                                <p>Hi, Babar your order is in process kindly wait a while</p>
                                            </li>
                                            <li><span class="title">Software development</span> <span class='date'>09/12/2018</span>
                                                <p>Hi, Babar your order is in process kindly wait a while</p>
                                            </li>
                                            <li><span class="title">Software development</span> <span class='date'>09/12/2018</span>
                                                <p>Hi, Babar your order is in process kindly wait a while</p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <a class="dropdown-toggle btnAlert" data-toggle="dropdown" href="#"
                                            onClick={handleProfileMenuOpen}
                                        ><i class="fa fa-envelope-o"

                                        ></i><span class="badge">2</span></a>
                                        <ul class="dropdown-menu messages">
                                            <li><span class="title">Software development</span> <span class='date'>09/12/2018</span>
                                                <p>Hi, Babar your order is in process kindly wait a while</p>
                                            </li>
                                            <li><span class="title">Software development</span> <span class='date'>09/12/2018</span>
                                                <p>Hi, Babar your order is in process kindly wait a while</p>
                                            </li>
                                            <li><span class="title">Software development</span> <span class='date'>09/12/2018</span>
                                                <p>Hi, Babar your order is in process kindly wait a while</p>
                                            </li>
                                        </ul>
                                    </li>


                                    <IconButton
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={menuId}
                                        aria-haspopup="true"
                                        onClick={handleProfileMenuOpen}
                                        // color="inherit"
                                        className={classes.userName}

                                    >
                                        Hi, {props.auth.userDetail.first_name}
                                    </IconButton>

                                    <li class="hide"><a href="#contactus" class="scroll"><i class="fa fa-user-o"></i>Hi, User</a></li>
                                    <li class='hidden-md hidden-lg'><a href="#" class="btnLeftBarToggle "><i class="fa fa-navicon"></i></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                {renderMenu}
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div class="leftbar">
                    <div class="logo_header"
                        style={{
                            width: 240,
                            borderBottom: '1px solid #f0f0f0'
                        }}
                    >
                        <Link to="/">
                            <img src={require("./assets/images/logo.png")} class="logo" />
                        </Link>
                    </div>



                    <span class="heading"></span>
                    <div class="media hide">
                        <div class="media-left">
                            <img src="assets/images/testimonial/testimonial1.png" class="media-object" style={{ width: "60px" }} />
                        </div>
                        <div class="media-body">
                            <p>Admin</p>
                            <h4 class="media-heading">John Doe</h4>
                        </div>
                    </div>
                    <ul>
                        <li><Link to="/admin" class=""><i class="fa fa-home"></i> Home</Link></li>
                        <li><Link to='/admin/client' class=""><i class="fa fa-users"></i> Clients</Link></li>
                        <li><Link to='/admin/reader' class=""><i class="fa fa-user-o"></i> Readers</Link></li>
                        <li><Link to='/admin/readerTestimony' class=""><i class="fa  fa-diamond"></i> Readers Testimonials</Link></li>
                        <li><Link to='/admin/announcement' class=""><i class="fa fa-bullhorn"></i> Announcement</Link></li>
                        {/* <li><Link to="/admin/chat" class=""><i class="fa fa-comments-o"></i> Chat History</Link></li> */}
                        {/* <li><Link to='/admin/invoices' class=""><i class="fa fa-files-o"></i> Invoices</Link></li> */}
                        <li><Link to='/admin/reportCenter' class=""><i class="fa fa-info-circle"></i> Report Center</Link></li>
                        <li><Link to='/admin/pricingAdmin' class=""><i class="fa fa-dollar"></i> Pricing</Link></li>
                        {/* <li><Link to='/admin/couponAdmin' class="" style={{

                            borderBottom: '1px solid #f0f0f0'
                        }}><i class="fa fa-tag"></i> Coupon</Link></li> */}

                        <li><Link to='/admin/admins-page' class=""><i class="fa fa-user-secret"></i> Admins</Link></li>
                        {/* <li><Link to='/admin/blogs-and-articals' class=""><i class="fa fa-shopping-cart"></i> Blogs And Article</Link></li> */}
                        {/* <li><Link to='/admin/client-messages' class=""><i class="fa fa-comments-o"></i>Client Messages</Link></li>
                        <li><Link to='/admin/reader-messages' class=""><i class="fa fa-comments-o"></i>Reader Messages</Link></li> */}

                    </ul>
                    <ul class='foot hide'>
                        <li><i class="fa fa-user"></i></li>
                    </ul>
                </div>


            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <Route exact path='/admin' component={HomePanel} />
                <Route exact path='/admin/chat' component={ChatSection} />
                <Route exact path='/admin/client' component={Client} />
                <Route exact path='/admin/clientDetail' component={ClientDetail} />
                <Route exact path='/admin/clientStatus' component={ClientStatus} />

                <Route exact path='/admin/reader' component={ReaderAdmin} />
                <Route exact path='/admin/readerDetail' component={ReaderDetail} />
                <Route exact path='/admin/readerStatus' component={ReaderStatus} />

                <Route exact path='/admin/readerTestimony' component={ReaderTestimony} />
                <Route exact path='/admin/announcement' component={Announcement} />
                <Route exact path='/admin/invoices' component={Invoices} />
                <Route exact path='/admin/reportCenter' component={ReportCenterAdmin} />
                <Route exact path='/admin/pricingAdmin' component={PricingAdmin} />
                <Route exact path='/admin/couponAdmin' component={CouponAdmin} />
                <Route exact path='/admin/admins-page' component={Admins} />
                <Route exact path='/admin/blogs-and-articals' component={BlogsAndArticalsAdmin} />
                <Route exact path='/admin/client-messages' component={ClientMessages} />
                <Route exact path='/admin/reader-messages' component={ReaderMessages} />
                <Route exact path='/edit_coupon' component={EditCoupon} />
                <Route exact path='/new_coupon' component={NewCoupon} />
                <Route exact path='/new_announcement' component={NewAnnouncement} />
                <Route exact path='/new_package' component={priceAddNew} />
                <Route exact path='/new_admin' component={AdminSignup} />





            </main>
        </div>
    );
}
))