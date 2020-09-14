import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addNewPackage } from '../../redux/action/adminAction'
class PriceAddNew extends React.Component {
	constructor(props) {
		super(props)

		addPkg = e => {
			if (this.state.package_name.length > 0) {

				let package_name = document.getElementById("package_name")
				package_name.value = ''
				let actual_price = document.getElementById("actual_price")
				actual_price.value = ''
				let offered_price = document.getElementById("offered_price")
				offered_price.value = ''
			}
		}
		addPkg()
		addPkgFail = e => {
			this.setState({
				err: 'Internal Server Error.'
			})
			setTimeout(() => {
				this.setState({
					err: ''
				})
			}, 5000);
		}
		addPkgFail()
	}
	state = {
		package_name: '',
		actual_price: '',
		offered_price: '',
	}

	onChangeHandler = (e) => {

		this.setState({
			[e.target.name]: e.target.value
		})
	}
	onSubmit = (e) => {
		e.preventDefault()
		console.log(this.state);
		
		this.props.addPackage(this.state)
	}
	render() {
		return (
			<>
				<div class="content-wrapper">
					<div id="order_preview" class="wow fadeInUp content_box"
						style={{ visibility: 'visible', animationName: "fadeInUp" }}>
						<div class="row table-header">
							<div class="col-xs-12 col-md-12">
								<h2 class="section-title">New Pricing Package <Link to='/admin/pricingAdmin'
									class="btn btn-default pull-right"><i class="fa fa-chevron-left"></i> Back</Link></h2>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 col-md-6">
								<form >
									<div class="form-group">
										<label for="pwd">Package Name:</label>
										<input type="text" class="form-control" id='package_name' name='package_name' onChange={this.onChangeHandler} />
									</div>
									<div class="form-group">
										<label for="pwd">Actuall Price:</label>
										<input type="text" class="form-control" id='actual_price' name='actual_price' onChange={this.onChangeHandler} />
									</div>
									<div class="form-group">
										<label for="pwd">Offer Price:</label>
										<input type="text" class="form-control" id='offered_price' name='offered_price' onChange={this.onChangeHandler} />
									</div>
									<div class="form-group">
										<label for="pwd">Publish:</label>
										<label class="switch">
											<input type="checkbox" />
											<span class="checkbox_slider round"></span>
										</label>
									</div>
									<div className="error">
										{this.state.err ? this.state.err : ""}
									</div>
									<button type="submit" class="btn btn-default" onClick={this.onSubmit}>Create</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

let mapStateToProps = (store) => {
	return {
		admin: store.AdminReducer
	}
}

let mapDispatchToProps = (dispatch) => {

	return ({
		addPackage: (data) => {
			dispatch(addNewPackage(data))
		},
	})
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PriceAddNew));
export let addPkg, addPkgFail
