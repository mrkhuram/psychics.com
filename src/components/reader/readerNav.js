import React from 'react'
import { Link } from 'react-router-dom'
// import './style.css'

class ReaderHome extends React.Component {
    render() {
        return (
            <>
                <div class="header_bottom hidden-xs hidden-sm">
                    <div class="container">
                        <nav class="navbar ">
                            <div class="container-fluid">
                                <ul class="nav navbar-nav navbar-left">
                                    <li class=""><Link to="/reader_deshboard/home">Home</Link></li>
                                    <li class=""><Link to="/reader_dashboard/ourPsychics">Our Psychics</Link></li>
                                    <li class=""><Link to="/reader_deshboard/myProfile">My Profile</Link></li>
                                    {/* <li class=""><Link to="/reader_dashboard/chatHistory">Chat History</Link></li> */}
                                    <li class=""><Link to="/reader_dashboard/invoice">Invoices</Link></li>
                                    {/* <li class=""><Link to="/reader_dashboard/submitArtical/readerpublish">Submit Articles</Link></li> */}
                                    <li class=""><Link to="/reader_dashboard/reportAbuse">Report An Issue</Link></li>
                                    {/* <li class=""><Link to="#">Messages</Link></li> */}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </>
        )
    }
}
export default ReaderHome;