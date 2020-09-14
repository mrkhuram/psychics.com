import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

class UserNav extends React.Component {
    render() {
        return ( 
            <>
            <div class="header_bottom hidden-xs hidden-sm">
                            <div class="container">
                                <nav class="navbar ">
                                    <div class="container-fluid">
                                        <ul class="nav navbar-nav navbar-left">
                                            <li class="<br />
                                              Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                            "><Link to="/user_dashboard/home">Home</Link></li>
                                            <li class="<br />
                                              Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                            "><Link to="/user_dashboard/editAcc">Account Info</Link></li>
                                            <li class="<br />
                                              Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                "><Link to="/user_dashboard/ourPsychics">Our Psychics </Link></li>
                                            
                                            {/* <li class="<br />
                                              Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                "><Link to="/user_dashboard/blogsAndArtical">Blogs & Articles</Link></li> */}
                                            {/* <li class="<br />
                                              Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                            "><Link to="/user_dashboard/chatHistory">Chat History</Link></li> */}
                                            {/* <li class="<br />
                                              Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                "><Link to="/user_dashboard/notification" >Notification</Link></li> */}
                                            {/* <li class="<br />
                                              Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                "><Link to="/user_dashboard/purchaseHistory">Purchase History</Link></li> */}
                                            <li class="<br />
                                              Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                "><Link to="/user_dashboard/referAfriend">Refer Friend</Link></li>
                                            <li class="<br />
                                              Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                "><Link to="/user_dashboard/reportAbuse">Report an Issue</Link></li>
                                            
                                            {/* <li class="<br />
                                              Undefined index: p in <b>C:\xampp\htdocs\psychics\includes\head.php</b> on line <b>3</b><br />
                                                "><Link to="#">Messages</Link></li> */}
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
            </>
        )
    }
}
export default UserNav;