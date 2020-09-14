import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { allReports ,deleteReport } from '../../redux/action/adminAction'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import {DropdownButton, Dropdown} from
class ReportCenterAdmin extends React.Component {

    constructor(props) {
        super(props)
        props.allReports()
    }
    state = {
        coupons: '',
        open: false,
        loading: false,
        reports: [],
        dropDown: false
    }

    componentWillReceiveProps = (nextProps) => {
        console.log(nextProps.admin.reports);

        return (
            this.setState({
                reports: nextProps.admin.reports,
                reportsCopy: nextProps.admin.reports,
                loading: false
            })
        )
    }

    handleClickOpen = (id) => {
        this.setState({
            id,
            open: true
        })
    };
    handleClose = () => {
        this.setState({
            open: false
        })
    };
    applyingFilter = e => {
        let val = e.target.value
        if (val !== '') {
            let result = this.state.reports.filter((item) => {
                return item.user.first_name.includes(val) ? item : ''
            })

            this.setState({

                reports: result
            })
        }
        else {
            this.setState({
                reports: this.state.reportsCopy
            })
        }
    }
    searchHandler = (e) => {

        let val = e.target.value
        if (val !== '') {
            let result = this.state.reports.filter((item) => {
                return item.user.first_name.includes(val) ? item : ''
            })

            this.setState({

                reports: result
            })
        }
        else {
            this.setState({
                reports: this.state.reportsCopy
            })
        }

    }
    submit = e => {
        e.preventDefault()

    }


    toggle = (e) => {
        this.setState({
            dropDown: prevState => !prevState
        })
    }
    render() {
        return (
            <>

                {this.state.loading ? (
                    <div>Loading....</div>
                )
                    :

                    <div class="content-wrapper">
                        <div id="order_preview" class="wow fadeInUp content_box">
                            <div class="row table-header">
                                <div class="col-xs-12 col-md-4">
                                    <h2 class="section-title">Reports Center</h2>
                                </div>
                                <div class="col-xs-12 col-md-8">
                                    <form class="form-inline form-searchbar"
                                    >
                                        <div class="form-group">
                                            <label for="email">Search By</label>
                                            <select class="form-control" onChange={this.applyingFilter}>
                                                <option value="all">All</option>
                                                <option value="client">Clients</option>
                                                <option value="reader">Readers</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <input type="text"
                                                onChange={this.searchHandler}
                                                class="form-control" placeholder="Search here.." />
                                        </div>
                                        <button type="submit" class="btn btn-default"
                                            onClick={this.submit}
                                        ><i class="fa fa-search"></i>
                                        Search</button>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th class="active">S#</th>
                                            <th class="active">Date</th>
                                            <th class="active">Sender Name</th>
                                            <th class="active">Sender Type</th>
                                            <th class="active">Category</th>
                                            <th class="active">Description</th>
                                            <th class="active">Status</th>
                                            <th class="active">Action</th>
                                        </tr>

                                        {
                                            this.state.reports.length !== 0 ?
                                                this.state.reports.map((item, ind) => {

                                                    return <tr key={ind}>
                                                        <td>{ind + 1}</td>
                                                        <td>{item.report_date.slice(0, 10)}</td>
                                                        <td>{item.user.first_name}</td>
                                                        <td>Client</td>
                                                        <td>{item.report_subject}</td>
                                                        <td>{item.report}</td>
                                                        <td><span class="badge">Panding</span></td>
                                                        <td>
                                                            <a class='badge delete' href="#">View</a>
                                                            <a class='badge delete'
                                                                onClick={() => {
                                                                    this.handleClickOpen(item._id)
                                                                }}

                                                                data-toggle="modal" data-target="#myModal"> <i
                                                                    class="fa fa-trash"></i> Delete</a>

                                                            <div class="form-group" style={{
                                                                width: "70px",
                                                                display: 'inline-block',

                                                            }}>
                                                                {/* <label for="email">Search By</label> */}
                                                                <select class="form-control"
                                                                    style={{
                                                                        backgroundColor: "#f33676",
                                                                        color: "white",
                                                                        height: '20px',
                                                                        fontSize: '12px',
                                                                        padding: '0px',
                                                                        marginTop: '5px',
                                                                    }}>
                                                                    <option value="all" selected
                                                                    > Mark as</option>
                                                                    <option value="going">Going</option>
                                                                    <option value="resolved">Resolved</option>
                                                                </select>
                                                            </div>
                                                            {/* <div class="dropdown">
                                                                <select class="btn btn-primary dropdown-toggle" type="button"
                                                                    data-toggle="dropdown"> 
												                <span class="caret"></span></select>
                                                                <option value="going">Going</option>
                                                                <option value="resolved">Resolved</option>
                                                                <ul class="dropdown-menu">
                                                                    <li><a href="#">Going</a></li>
                                                                    <li><a href="#">Resolved</a></li>
                                                                </ul>
                                                            </div> */}

                                                        </td>
                                                    </tr>
                                                })
                                                :
                                                <tr>
                                                    <td colSpan="8"
                                                        style={{
                                                            textAlign: 'center',
                                                            fontSize: 15
                                                        }}
                                                    >
                                                        Nothing to show
                                                        </td>

                                                </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                }

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
                                                // onClick={this.props.deleteAccount}
                                                onClick={() => {
													console.log(this.state.id);

													this.props.deleteReport(this.state.id)
													this.handleClose()
												}}
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
let mapStateToProps = (store) => {

    return {
        admin: store.AdminReducer
    }
}

// let mapDispatchToProps = (dispatch) => {

//     return ({
//         reports: () => {
//             dispatch(allReports())
//         },

//     })
// }

export default withRouter(connect(mapStateToProps, {deleteReport,allReports})(ReportCenterAdmin));
