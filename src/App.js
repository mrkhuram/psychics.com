import React from 'react';
import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Router, Route } from 'react-router-dom'
import Home from './components/home'
import About from './components/aboutUs/about'
import WhyUs from './components/whyUs/whyUs'
import Pricing from './components/pricing/pricing'
import ContactUs from './components/contact/contactUs'
import UserHeader from './components/userLogin/userHeader'
import UserHome from './components/userLogin/homeDeshboard'
import UserEdit from './components/userLogin/editAcc'
import UserPsychics from './components/userLogin/ourPsychis'
import UserAndArtical from './components/userLogin/blogsArticle'
import ChatHistory from './components/userLogin/chatHistroy'
import Notication from './components/userLogin/notification'
import PurchaseHistory from './components/userLogin/purchaseHistory'
import ReferFriend from './components/userLogin/referAFriend';
import ReportAbuse from './components/userLogin/reportAbuse'
// import Message from './components/userLogin/message'
import ReaderHome from './components/reader/readerHome'
import ReaderProfile from './components/reader/readerProfile';
import ReaderInvoice from './components/reader/readerInvoice';
import ReaderSubmitArtical from './components/reader/readerSubmitArtical';
import AdminPanel from './components/adminPanel/admin'
// import ChatSection from './components/adminPanel/chatHistory';
import SignIn from './components/signin/signin';
import RegisterAccount from './components/register';
import ReaderPsychics from './components/reader/readerPsychics';
import AddNewBlog from './components/reader/addNewBlog';
import BlogsVewAdd from './components/reader/readerViewAdd';
// import {connect} from 'react-redux'
import history from './components/history'
import Guru from './components/guru'
import store from './redux/store'
import { Provider } from 'react-redux'
import services from './components/services'


class App extends React.Component {


  constructor() {
    super()
    services.loadProfile()    
  }
  state = {
    profile: '',
    admin: '',
    userDetail: ''

  }
  render() {

    return (
      <Router history={history}>
        <Provider store={store}>
          <div className='App'>
            <Guru />
           </div>
        </Provider>
      </Router> 

    )
  }
}

export default App;
