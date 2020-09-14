import React from 'react';
import { reportIssue } from '../../redux/action/userProfileAction'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';

class ReportAbuse extends React.Component {
	state = {
		open: false,
		report: "",
		report_subject: ''
	}
	onChangeHandler = (e) => {

		this.setState({ [e.target.name]: e.target.value })
	}

	submitData = (e) => {
		e.preventDefault()
		if (this.state.report.length > 0 && this.state.report_subject.length > 0) {
			this.props.reportAbuse(this.state)
		}


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

	componentWillReceiveProps(nextProp) {
		console.log(nextProp);

		if (nextProp.profile.reportIssue !== null) {
			this.handleClickOpen()
		}
	}

	render() {
		return (
			<>
				<div style={{ margin: "50px 0px" }}>
					<div class="wow fadeInUp">
						<div class="container">

							<div class="row">
								<div class="col-xs-12 col-md-6">
									<h2 class="section-title">Report An Issue</h2>
									<p class="section-desc">If you have any issue just report us we will get back to you soon<br /> may be it will take 2 business days.</p>

									<form>
										<div class="col-xs-12 col-md-12 no-padding-left">
											<div class="form-group">
												<select class="form-control" name="report_subject" onChange={this.onChangeHandler}>
													<option value="">Select Issue</option>
													<option value="Account">Account</option>
													<option value="Payment">Payment</option>
												</select>
											</div>
										</div>
										<div class="col-xs-12 col-md-12 no-padding-left">
											<div class="form-group">
												<textarea class="form-control" name="report" onChange={this.onChangeHandler} id="email" placeholder="Explain About your issue." rows="6"></textarea>
											</div>
										</div>
										<div class="col-xs-12 col-md-12 no-padding-left">
											<div class="form-group">
												<button type="submit" class="btn btn-default site-btn" onClick={this.submitData}>Submit</button>
											</div>
										</div>

									</form>
								</div>
								<div class="col-xs-6 col-md-3 col-md-offset-1">
									<img src={require("../assets/uploads/customer-service-girl-png-1.png")} class="img-responsive" />
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Success Model */}
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
										<p>
											<i class="fa fa-check-circle"></i>
											<br />
										Report Successfuly Submitted</p>
										{/* <p>
											<button type="button" class="btn btn-default yes" data-dismiss="modal"
												onClick={this.props.deleteAccount}
											>Yes</button>
											<button type="button" class="btn btn-default no" data-dismiss="modal"
												onClick={this.handleClose}
											>No</button>
											</p> */}
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
		auth: store.AuthReducer,
		profile: store.ProfileReducer
	}
}

let mapDispatchToProps = (dispatch) => {

	return ({
		reportAbuse: (data) => {
			dispatch(reportIssue(data))
		},
	})
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReportAbuse));