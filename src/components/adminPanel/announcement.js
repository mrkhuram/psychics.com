import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteAnnouncement } from '../../redux/action/adminAction'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import axios from 'axios'



class Announcement extends React.Component {

	constructor(props) {
		super(props)
		// props.announcements()

		getAllAnnouncements = () => {
			let token = localStorage.getItem('token')

			let header = {
				headers: {
					'Content-Type': 'application/json;charset=UTF-8',
					"Access-Control-Allow-Origin": "*",
					'x-sh-auth': token
				}
			}
			axios.get("https://guruphysics0010.herokuapp.com/announcements/get_all_announcements", header).then(resp => {

				if (resp) {
					console.log(resp.data.announcements);

					this.setState({
						announcementList: resp.data.announcements,
						announcement: resp.data.announcements,

					})
				}

			})
		}


		getAllAnnouncements()

	}
	state = {
		announcementList: '',
		open: false,
		id: null
	}


	deleteItem = (index, id) => {
		// console.log(id);
		this.state.announcementList.splice(index, 1)
		this.setState({
			announcementList: this.state.announcementList
		})

		this.props.deleteAnnouncements(id)
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


	searchHandler = (e) => {

		let val = e.target.value
		if (val !== '') {
			let result = this.state.announcementList.filter((item) => {
				return item.title.includes(val) ? item : ''
			})

			this.setState({

				announcementList: result
			})
		}
		else {
			this.setState({
				announcementList: this.state.announcement
			})
		}

	}


	render() {
		return (
			<>
				<div class="content-wrapper">
					<div id="order_preview" class="wow fadeInUp content_box"
						style={{ visibility: 'visible', animationName: "fadeInUp" }}>
						<div class="row table-header">
							<div class="col-xs-12 col-md-6">
								<h2 class="section-title">Our Announcement</h2>
							</div>
							<div class="col-xs-12 col-md-6">
								<form class="form-inline form-searchbar"
								>
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Search Announcement.."
											onChange={this.searchHandler}
										/>
									</div>
									<button type="submit" class="btn btn-default"
										style={{
											marginRight: 5
										}}
										onClick={e => e.preventDefault()}
									><i class="fa fa-search"></i></button>
									<Link to="/new_announcement" class="btn btn-default"><i
										class="fa fa-plus"></i> New</Link>
								</form>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 col-md-12">
								<table class="table table-bordered">
									<tbody>
										<tr>
											<th class="active" width="50">S#</th>
											<th class="active" width="250">Title</th>
											<th class="active">Description</th>
											<th class="active" width="120px">Publish</th>
											<th class="active" width="120px">To</th>
											<th class="active" style={{ width: "200px" }}>Action</th>
										</tr>
										{this.state.announcementList ? this.state.announcementList.map((item, index) => {
											return <tr>
												<td>{index + 1}</td>
												<td>{item.title}</td>
												<td>{item.description}</td>
												<td>
													<label class="switch">
														<input type="checkbox" checked={item.published} />
														<span class="checkbox_slider round"></span>
													</label>
												</td>
												<td>{item.to_adviser ? "Reader" : "Client"}</td>
												<td>
													<a class="badge blue" > <i
														class="fa fa-external-link"></i> View Detail</a>
													<a class="badge del hide" data-toggle="modal" data-target="#myModal"> <i
														class="fa fa-trash"></i> Delete</a>
													<a class="badge delete"
														// onClick={() => {
														// 	this.deleteItem(index, item._id)
														// }}
														// onClick={() => {
														// 	this.props.deleteAnnouncements(item._id)

														// }} 
														onClick={() => {
															this.handleClickOpen(item._id)
														}}
													> <i class="fa fa-trash"></i> Delete</a>
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

										}) : <></>}

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
												onClick={() => {
													console.log(this.state.id);

													this.props.deleteAnnouncements(this.state.id)
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
	console.log(store);

	return {
		admin: store.AdminReducer
	}
}

let mapDispatchToProps = (dispatch) => {

	return ({
		// announcements: () => {
		// 	dispatch(announcementList())
		// },
		deleteAnnouncements: (id) => {
			dispatch(deleteAnnouncement(id))
		},
	})
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Announcement));
export let getAllAnnouncements