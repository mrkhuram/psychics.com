import React from 'react'
import { Link } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import axios from 'axios'


class ReaderAdmin extends React.Component {

    constructor(props) {
        super(props)
        // props.pricingPackages()

        getReadersList = () => {

            let token = localStorage.getItem('token')

            let header = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    'x-sh-auth': token
                }
            }
            let Url = 'https://guruphysics0010.herokuapp.com/user/get_all_advisors'
            axios.get(Url, header).then(resp => {

                if (resp) {
                    console.log(resp);

                    this.setState({

                        reader: resp.data.advisors,
                        readerCopy: resp.data.advisors

                    })
                }


            })


        }

        getReadersList()


    }




    state = {
        open: false,
        reader: null
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


    searchHandler = (e) => {

		let val = e.target.value
		if (val !== '') {
			let result = this.state.reader.filter((item) => {
				return item.first_name.includes(val) ? item : ''
			})

			this.setState({

				reader: result
			})
		}
		else {
			this.setState({
				reader: this.state.readerCopy
			})
		}

	}
	// style={{
	// 	marginRight: 5
	// }}



    render() {
        return (
            <>
                <div class="content-wrapper">
                    <div id="order_preview" class="wow fadeInUp content_box" style={{
                        visibility:
                            "visible", animationName: "fadeInUp"
                    }}>
                        <div class="row table-header">
                            <div class="col-xs-12 col-md-6">
                                <h2 class="section-title">Our Readers</h2>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <form class="form-inline form-searchbar">
                                    <div class="form-group">
                                        <label for="email">Search By</label>
                                        <select class="form-control">
                                            <option value="all">All</option>
                                            <option value="name">Name</option>
                                            <option value="email">Email</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <input 
                                            onChange={this.searchHandler}
                                        type="text" class="form-control" placeholder="Search Reader.." />
                                    </div>
                                    <button type="submit" class="btn btn-default"
                                    onClick={e => e.preventDefault()}><i class="fa fa-search"></i> Search</button>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th class="active">S#</th>
                                            <th class="active">Name</th>
                                            <th class="active">Email</th>
                                            <th class="active">Passowrd</th>
                                            <th class="active">Phone</th>
                                            <th class="active" width="120px">Visible on site</th>
                                            <th class="active" width="120px">Account Status</th>
                                            <th class="active" style={{ width: "300px" }}>Action</th>

                                        </tr>


                                        {
                                            this.state.reader ?
                                                this.state.reader.map((item, ind) => {
                                                    return <tr key={ind}>
                                                        <td>{ind + 1}</td>
                                                        <td>{item.first_name}</td>
                                                        <td>{item.email}</td>
                                                        <td>42311</td>
                                                        <td>+9212432344</td>
                                                        <td>
                                                            <label class="switch">
                                                                <input type="checkbox" />
                                                                <span class="checkbox_slider round"></span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            {item.account_activity_status === true
                                                                ?
                                                                <span class="badge">Active</span>
                                                                :
                                                                <span class="badge">Not Active</span>

                                                            }
                                                        </td>
                                                        <td>
                                                            <Link class="badge blue"  
                                                               to={{pathname: `/admin/readerDetail`, query: {item}}}
                                                            > <i class="fa fa-external-link"></i> View Detail</Link>
                                                            <a class="badge delete"
                                                                onClick={this.handleClickOpen}
                                                                data-toggle="modal" data-target="#myModal"> <i class="fa fa-trash"></i> Delete</a>
                                                            <Link class="badge delete" to='/admin/readerStatus'>Set Status</Link>
                                                        </td>
                                                    </tr>
                                                })
                                                :
                                                ""
                                        }
                                    </tbody>
                                </table>
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
export default ReaderAdmin;
export let getReadersList