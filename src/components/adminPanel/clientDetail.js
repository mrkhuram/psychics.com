import React from 'react'
import { Link } from 'react-router-dom'


class ClientDetail extends React.Component {



    render() {
        console.log(this.props.location.query);
        
        const user = this.props.location.query.item
        console.log(user);
        
    
        return (
            <div style={{ margin: "50px 0px" }}>
                <div class="content-wrapper">
                    <div id="order_preview" class="wow fadeInUp content_box"
                        style={{visibility:" visible", animationName: "fadeInUp"}}>
                        <div class="row table-header">
                            <div class="col-xs-12 col-md-12">
                                <h2 class="section-title">Reader Profile <Link to='/admin/client'
                                    class="btn btn-default pull-right"><i class="fa fa-chevron-left"></i> Back</Link></h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th class="active" width="200">Username</th>
                                            <td>{user.display_name}</td>
                                        </tr>
                                        <tr>
                                            <th class="active">First Name</th>
                                            <td>{user.first_name}</td>
                                        </tr>
                                        <tr>
                                            <th class="active">Last Name</th>
                                            <td>{user.last_name}</td>
                                        </tr>
                                        <tr>
                                            <th class="active">Email Address</th>
                                            <td>{user.email}</td>
                                        </tr>
                                        <tr>
                                            <th class="active">Password</th>
                                            <td>rrt45002</td>
                                        </tr>
                                        <tr>
                                            <th class="active">Joining Date</th>
                                            <td>23/02/2019</td>
                                        </tr>
                                        <tr>
                                            <th class="active">Gender</th>
                                            <td>{user.gender}</td>
                                        </tr>
                                        <tr>
                                            <th class="active">Phone Number</th>
                                            <td>{user.ph_no}</td>
                                        </tr>
                                        <tr>
                                            <th class="active">Specialties</th>
                                            <td>
                                                <ul class="check">
                                                    <li><a href="#">Psychic Readings</a></li>
                                                    <li><a href="#">Love & Relationships</a></li>
                                                    <li><a href="#">Life Questions</a></li>
                                                    <li><a href="#">Tarot Readings</a></li>
                                                    <li><a href="#">Spiritual Readings</a></li>
                                                    <li><a href="#">Psychic Mediums</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="active">Ban</th>
                                            <td>
                                                <p><strong>By Admin: </strong>Smith Jen </p>
                                                <p><strong>Reason: </strong>Non professional behave</p>
                                            </td>
                                        </tr>
                                        <tr>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ClientDetail