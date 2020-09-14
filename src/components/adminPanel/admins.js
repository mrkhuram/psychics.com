import React from 'react'
import { Link } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { connect } from 'react-redux';
import axios from 'axios'


class Admins extends React.Component {


    constructor(props) {
        super(props)

        getAlladmins = () => {
            let token = localStorage.getItem('token')

            let header = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    'x-sh-auth': token
                }
            }
            axios.get("https://guruphysics0010.herokuapp.com/user/get_all_admins", header).then(resp => {

                if (resp) {
                    console.log(resp);

                    this.setState({
                        admins: resp.data.admins,
                        adminsCopy: resp.data.admins
                    })
                }

            })
        }


        getAlladmins()

    }
    state = {
        admins: '',
        open: false
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    };
    handleClose = () => {
        this.setState({
            open: false
        })
    };



    render() {
        return (
            <>
                <div class="content-wrapper">
                    <div id="order_preview" class="wow fadeInUp content_box"
                        style={{ visibility: 'visible', animationName: "fadeInUp" }}>
                        <div class="row table-header">
                            <div class="col-xs-12 col-md-6">
                                <h2 class="section-title">Site Admins</h2>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <form class="form-inline form-searchbar">
                                    <Link to="/new_admin" class="btn btn-default"><i class="fa fa-plus"></i>
                                        New Admin</Link>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th class="active" width="50">S#</th>
                                            <th class="active" width="250">Admin Name</th>
                                            <th class="active">Admin Email</th>
                                            <th class="active">Gender</th>
                                            <th class="active">Created Date</th>
                                            <th class="active">Status</th>
                                            <th class="active" style={{ width: "200px" }}>Action</th>
                                        </tr>


                                        {
                                            this.state.admins ?
                                                this.state.admins.map((item, ind) => {
                                                    return <tr key={ind}>
                                                        <td>{ind + 1}</td>
                                                        <td>{item.display_name}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.gender}</td>
                                                        <td>24/5/2019</td>
                                                        <td>
                                                            <label class="switch">
                                                                <input type="checkbox" checked="checked" />
                                                                <span class="checkbox_slider round"></span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <a href="#" class="badge blue"> <i
                                                                class="fa fa-trash"></i> Edit</a>
                                                            <a class="badge red" data-toggle="modal" data-target="#myModal"
                                                                onClick={this.handleClickOpen}
                                                            > <i
                                                                class="fa fa-trash"></i> Delete</a>
                                                            <div class="dropdown hide">
                                                                <button class="btn btn-primary dropdown-toggle" type="button"
                                                                    data-toggle="dropdown">More
                                                        <span class="caret"></span></button>
                                                                <ul class="dropdown-menu">
                                                                    <li><a href="#">Edit</a></li>
                                                                    <li><a href="#">View Detail</a></li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                })
                                                : ''
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id="myModal" class="modal fade delPopup" role="dialog">
                        <div class="modal-dialog modal-sm">
                            {/* <!-- Modal content--> */}
                            <div class="modal-content">
                                <div class="modal-body">
                                    <p><i class="fa fa-trash"></i><br />Are you sure you want to delete</p>
                                    <p>
                                        <button type="button" class="btn btn-default yes" data-dismiss="modal">Yes</button>
                                        <button type="button" class="btn btn-default no" data-dismiss="modal">No</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog onClose={this.handleClose} open={this.state.open}
                    style={{
                        margin: 0
                    }}
                >
                    <MuiDialogContent style={{
                        padding: 0,
                        margin: 0
                    }}>
                        <div class=" customPopup">
                            <div class="modal-dialog modal-sm" style={{
                                margin: 0
                            }}>
                                {/* <!-- Modal content--> */}
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <p><i class="fa fa-trash"></i><br />Are you sure you want to delete</p>
                                        <p>
                                            <button type="button" class="btn btn-default yes" data-dismiss="modal"
                                                onClick={this.props.deleteAccount}
                                            >Yes</button>
                                            <button type="button" class="btn btn-default no" data-dismiss="modal"
                                                onClick={this.handleClose}
                                            >No</button></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MuiDialogContent>
                </Dialog>

            </>
        )
    }
}
export default connect(null, {})(Admins)
export let getAlladmins