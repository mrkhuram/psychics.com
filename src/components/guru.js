import React from 'react'
import SignIn from './signin/signin';
import RegisterAccount from './register';
import ReaderPsychics from './reader/readerPsychics';
import AddNewBlog from './reader/addNewBlog';
import BlogsVewAdd from './reader/readerViewAdd';
import { connect } from 'react-redux'
import history from './history'
import Header from './header/header'   
import Footer from './footer/footer'
import { Router, Route } from 'react-router-dom'
import Home from './home'
import About from './aboutUs/about'
import WhyUs from './whyUs/whyUs'
import Pricing from './pricing/pricing'
import ContactUs from './contact/contactUs'
import UserHeader from './userLogin/userHeader'
import UserHome from './userLogin/homeDeshboard'
import UserEdit from './userLogin/editAcc'
import UserPsychics from './userLogin/ourPsychis'
import UserAndArtical from './userLogin/blogsArticle'
import ChatHistory from './userLogin/chatHistroy'
import Notication from './userLogin/notification'
import PurchaseHistory from './userLogin/purchaseHistory'
import ReferFriend from './userLogin/referAFriend';
import ReportAbuse from './userLogin/reportAbuse'
import AdminPanel from './adminPanel/main'
import ReaderHome from './reader/readerHome'
import ReaderProfile from './reader/readerProfile'
import ReaderInvoice from './reader/readerInvoice'
import ReaderSubmitArtical from './reader/readerSubmitArtical'
import { withRouter, Link, Redirect } from 'react-router-dom'
import { getMyProfile, getAllAdvisor } from '../redux/action/userProfileAction'
import jwt_decode from 'jwt-decode'
import services from './services'
import ChatHistoryOfUser from './userLogin/chatHistory'



class Guru extends React.Component {
    // constructor(props){
    //     super(props)
    // props.loadProfile()
    // }
    state = {
        profile: '',
        admin: '',
        userDetail: ''  

    }
    componentDidMount = () => {
        if (this.state.userDetail) {
            services.loadProfile()
        }
        // services.loadAllAdvisor()

        setTimeout(() => {
            this.setState({
                userDetail: this.props.auth.userDetail
            })
        }, 3000);


    }
    componentWillReceiveProps = (props) => {
       console.log(props.auth.err);
       this.setState({
           error: props.auth.err
       })
       
    }




    render() {
        console.log(this.props.auth.userDetail)   
        return (
            <div>
                <Router history={history}> 

                    <div className='App'>

                        {
                        this.props.auth.userType === 'admin'
                        // true
                          ?
                            <>
                              <AdminPanel adminRemoved={this.adminRemoved} />
                            </>
                            :
                            <div> 
                                {
                                                                     
                                    this.props.auth.userDetail._id ? 
                                    
                                      

                                        <UserHeader signOut={this.onSignOut} adminIsAdded={this.adminIsAdded} />
                                        :
                                        <Header />  

                                }
                                <Route exact path='/' component={Home} />
                                <Route path='/home' component={Home} />
                                <Route exact path='/AboutUs' component={About} />
                                <Route exact path='/WhyUs' component={WhyUs} />
                                <Route exact path='/Pricing' component={Pricing} />
                                <Route exact path='/contactUs' component={ContactUs} />
                                <Route exact path="/user_dashboard/home" component={() => {
                                    return <UserHome userDetail={this.state.userDetail} />
                                }} />
                                <Route exact path="/user_dashboard/editAcc" component={UserEdit} />
                                <Route exact path="/user_dashboard/ourPsychics" component={UserPsychics} />
                                <Route exact path="/user_dashboard/blogsAndArtical" component={UserAndArtical} />
                                <Route exact path="/user_dashboard/chatHistory" component={ChatHistoryOfUser} />
                                <Route exact path="/user_dashboard/notification" component={Notication} />
                                <Route exact path="/user_dashboard/purchaseHistory" component={PurchaseHistory} />
                                <Route exact path="/user_dashboard/referAfriend" component={ReferFriend} />
                                <Route exact path="/user_dashboard/reportAbuse" component={ReportAbuse} />
                                {/* <Route exact path="/user_dashboard/message" component={Message} /> */}
                                <Route exact path="/reader_deshboard/home" component={ReaderHome} />
                                <Route exact path="/reader_deshboard/myProfile" component={ReaderProfile} />
                                <Route exact path="/reader_dashboard/chatHistory" component={ChatHistory} />
                                <Route exact path="/reader_dashboard/invoice" component={ReaderInvoice} />
                                <Route path="/reader_dashboard/submitArtical" component={ReaderSubmitArtical} />
                                {/* <Route exact path="/reader_dashboard/submitArtical/reader#publish" component={ReaderSubmitArtical1} />
                                <Route exact path="/reader_dashboard/submitArtical/reader#under-review" component={ReaderSubmitArtical2} /> */}
                                <Route exact path="/reader_dashboard/submit-Artical/add-new-blog" component={AddNewBlog} />
                                <Route exact path="/reader_dashboard/submit-Artical/view-add-blog" component={BlogsVewAdd} />
                                <Route exact path="/reader_dashboard/reportAbuse" component={ReportAbuse} />
                                {/* <Route exact path="/reader_dashboard/message" component={Message} /> */}
                                <Route exact path="/sign-in" component={SignIn} />  
                                <Route exact path="/register-new-user" component={RegisterAccount} />
                                <Route exact path="/reader_dashboard/ourPsychics" component={ReaderPsychics} />

                                <Footer />
                            </div>

                        }

                    </div>
                </Router>
            </div>
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
        collectData: () => {
            dispatch(getMyProfile())
        },
        getAdvisor: () => {
            dispatch(getAllAdvisor())
        },

    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Guru));
