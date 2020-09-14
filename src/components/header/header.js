import React from 'react'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.min.css'
import '../assets/css/global.css'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import $ from 'jquery'
import Dialog from '@material-ui/core/Dialog';
import AccountRegister from './account';
import PersonalRegister from './personal';
import StartRegister from './start';
import { Route, NavLink, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { signInStart, startCreateUser } from '../../redux/action/authAction'
import { connect } from 'react-redux'
import UserHeader from '../userLogin/userHeader'
import services from '../services'
import history from '../history'







const styles = theme => ({
    root: {
        margin: 0,
        padding: 0,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

// const DialogTitle = withStyles(styles)(props => {
//     const { children, classes, onClose, ...other } = props;
//     return (

//         <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//             <CloseIcon />
//         </IconButton>

//     );
// });

const DialogContent = withStyles(theme => ({
    root: {
        // padding: theme.spacing(2),
    },
}))(MuiDialogContent);



let mapStateToProps = (store) => {

    return {
        auth: store.AuthReducer
    }
}

let mapDispatchToProps = (dispatch) => {

    return ({
        signInStart: (userDetails) => {
            dispatch(signInStart(userDetails))
        },
        createUser: (userData) => {
            dispatch(startCreateUser(userData))
        }

    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function SignIn(props) {

    const [open, setOpen] = React.useState(false);
    const [openRegister, setOpenRegister] = React.useState(false);
    const [state, setState] = React.useState({
        email: '',
        password: '',
        type: ''
    });
    const [err, setErr] = React.useState("");

    const [account, setAccount] = React.useState({})


    const handleClickOpen = () => {

        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenRegister = () => {
        setOpenRegister(true);
    };
    const handleCloseRegister = () => {
        setOpenRegister(false);
    };

    const onChangeHandler = (e) => {

        setState({ ...state, [e.target.name]: e.target.value })
    }

    const signIn = (e) => {
        e.preventDefault();

        props.signInStart(state)

    }
    const changeRoute = ({ email, display_name, password, confirmPassword, remember }) => {

        account.email = email
        account.display_name = display_name
        account.password = password
        account.confirmPassword = confirmPassword
        account.remember = remember

        history.push('/home/personal')
        let li1 = document.getElementById("first").childNodes[0]
        li1.classList.remove('active')
        let li2 = document.getElementById("second").childNodes[0]
        li2.classList.add('active')

    }
    const changeLast = ({ first_name, last_name, gender, date_of_birth, ph_no, address }) => {
        let newPhn = ph_no.replace(/\s+/g, "")
        account.first_name = first_name
        account.last_name = last_name
        account.gender = gender
        account.date_of_birth = date_of_birth
        account.ph_no = newPhn
        account.address = address
        history.push('/home/start')
        let li1 = document.getElementById("second").childNodes[0]
        li1.classList.remove('active')
        let li2 = document.getElementById("third").childNodes[0]
        li2.classList.add('active')
    }

    const submitData = ({ buy }) => {
        account.package = buy;

        console.log(account)
        
        props.createUser(account)
        handleCloseRegister()

    }

    React.useEffect(() => {
        console.log(props.auth.err);
        setErr(props.auth.err)
    }, [props.auth.err])




    return (
        <>
            {props.auth.userDetail.session_id ? "" : <Redirect to='/' />}

            {
                props.auth.userDetail.session_id
                    ?
                    <UserHeader />
                    :
                    <div>
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
                                        <Link class="navbar-brand img" to='/' >
                                            <img src={require("../assets/images/logo.png")}
                                                style={{ height: 50 }}
                                            />
                                        </Link>
                                    </div>
                                    <div class="collapse navbar-collapse" id="myNavbar">
                                        <div class="mobile-menu-header d-none hidden-md hidden-lg">
                                            <Link class="navbar-brand img" to='/' >
                                                <img src={require("../assets/images/logo.png")} /></Link>
                                            <button class="btn-close">
                                                <span class="line"></span>
                                                <span class="line"></span>
                                            </button>
                                        </div>
                                        <ul class="nav navbar-nav navbar-right">
                                            <li class="dropdown hidden-md hidden-lg">
                                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Browse
						                            <span class="caret"></span>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li><a href="#">Psychic Readings</a></li>
                                                    <li><a href="#">Love & Relationships</a></li>
                                                    <li><a href="#">Life Questions</a></li>
                                                    <li><a href="#">Tarot Readings</a></li>
                                                    <li><a href="#">Spiritual Readings</a></li>
                                                    <li><a href="#">Psychic Mediums</a></li>
                                                </ul>
                                            </li>
                                            <li><Link to="#" onClick={handleClickOpen} data-toggle="modal" data-target="#sign_in_modal"
                                                style={{ fontSize: 13, color: "grey", marginTop: 5 }}
                                            >SIGN IN</Link></li>
                                            <li><Link to="/home/account"
                                                style={{ fontSize: 13, color: "grey", marginTop: 5 }}
                                                onClick={handleClickOpenRegister} data-toggle="modal" data-target="#sign_up_modal">REGISTER</Link></li>
                                            <li class="dropdown hide">
                                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">  <i class="fa fa-user"></i>  User
						                            <span class="caret"></span>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li><a href="user_dashboard.html">Client dashboard</a></li>
                                                    <li><a href="reader_dashboard.html">Reader dashboard</a></li>
                                                    <li class="hidden"><a href="my_psychis.html">My psychis</a></li>
                                                    <li class="hidden"><a href="email_subscripion.html">Email Subscriptions</a></li>
                                                    <li ><a href="#" >Sign Out <i class="fa fa-sign-out"></i></a></li>
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

                        <div class="header_bottom hidden-xs hidden-sm">
                            <div class="container">
                                <nav class="navbar ">
                                    <div class="container-fluid">
                                        <ul class="nav navbar-nav navbar-left">
                                            <li><Link to="/">Home</Link></li>
                                            <li><a href="#">Our Psychics</a></li>
                                            <li><Link to="/AboutUs">About us</Link></li>
                                            <li><Link to="/Pricing">Our Prices</Link></li>
                                            {/* <li><a href="#">Blogs And Articles</a></li> */}
                                            {/* <li><a href="#">How It works</a></li> */}
                                            <li><Link to="/contactUs">Contact us</Link></li>
                                            <li class="dropdown hide">
                                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Our Services <span class="caret"></span></a>
                                                <ul class="dropdown-menu">
                                                    <li><a href="#">Psychic Readings</a></li>
                                                    <li><a href="#">Love & Relationships</a></li>
                                                    <li><a href="#">Life Questions</a></li>
                                                    <li><a href="#">Tarot Readings</a></li>
                                                    <li><a href="#">Spiritual Readings</a></li>
                                                    <li><a href="#">Psychic Mediums</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>



                        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                            <DialogContent >
                                <div class="row custom_form" style={{
                                    width: 450
                                }}>
                                    <div class="col-xs-12 col-md-12 " style={{
                                        padding: 0
                                    }}>
                                        <form action="#"
                                            style={{
                                                width: '100%'
                                            }}>
                                            <h2>Sign In <CloseIcon style={{ float: "right", cursor: 'pointer' }} onClick={handleClose} /></h2>
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
                                                <input type="email" name='email' onChange={onChangeHandler} class="form-control" id="email" placeholder="Your Email" />
                                            </div>
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                                                <input type="password" name='password' onChange={onChangeHandler} class="form-control" id="password" placeholder="Your Password" />
                                            </div>
                                            <p className="error-login">
                                                {err ? err : null}
                                            </p>

                                            <button type="submit" class="btn btn-default" style={{
                                                marginLeft: '27%'
                                            }} onClick={signIn}>Login</button>
                                            <p class='p'><a href="#">Forgot Your Password?</a></p>
                                        </form>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>

                        <Dialog onClose={handleCloseRegister} aria-labelledby="customized-dialog-title" open={openRegister} style={{
                            height: 700,
                            top: -65,
                        }}>
                            <DialogContent >
                                <div class="row custom_form" style={{
                                    width: 450,
                                }}>
                                    <div class="col-xs-12 col-md-12 " style={{
                                        padding: 0
                                    }}>
                                        <form action="#"
                                            style={{
                                                width: '100%'
                                            }} id="sign_up_modal">
                                            <h2>Sign Up <CloseIcon style={{ float: "right", cursor: 'pointer' }} onClick={handleCloseRegister} /></h2>
                                            <div class="modal-body" id="changeActive">
                                                {/* <ul class="nav nav-tabs nav-justified">
                                                    <li><NavLink to='/home/account' id='link' activeClassName='active' data-toggle="tab" href="#">Create Account</NavLink></li>
                                                    <li><NavLink to='/home/personal' id='link' activeClassName='active' >Personal Info</NavLink></li>
                                                    <li><NavLink to='/home/start' id='link' activeClassName='active' data-toggle="tab" aria-expanded={true} href="#">Start Reading</NavLink></li>
                                                </ul> */}
                                                <ul class="nav nav-tabs nav-justified">
                                                    <li id='first'><a id='link' className='active'  >Create Account</a></li>
                                                    <li id='second'><a id='link' >Personal Info</a></li>
                                                    <li id='third'><a id='link' >Start Reading</a></li>
                                                </ul>
                                                <div class="tab-content">
                                                    <Route path='/home/account' component={() => {
                                                        return <AccountRegister changeRoute={changeRoute} />
                                                    }} />

                                                    <Route path='/home/personal' component={() => {
                                                        return <PersonalRegister changeRoute={changeLast} />
                                                    }} />
                                                    <Route path='/home/start' component={() => {
                                                        return <StartRegister changeRoute={submitData} />
                                                    }} />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </DialogContent>

                        </Dialog>






                    </div>
            }

        </>
    )
}


))