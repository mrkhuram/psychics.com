import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { blogsAndArticles, approveAnArticle, deleteAnArticle } from '../../redux/action/adminAction'

class BlogsAndArticalsAdmin extends React.Component {
	constructor(props) {
		super(props)
		props.blogs()   
	}
	state = {
		articlesList: '',
		checked: true
	}

	componentWillReceiveProps(newProps, newState) {
		console.log(newProps);

		return (
			this.setState({
				articlesList: newProps.admin.articles,
				articlesCopy: newProps.admin.articles
			})
		)
	}
	onChangeHandler = (e) => {
		this.setState({
			checked: !this.state.checked
		})

	}
	deleteItem = (index, id) => {

		this.props.deleteArticle(id)
	}

	searchHandler = (e) => {

		let val = e.target.value
		if (val !== '') {
			let result = this.state.articlesList.filter((item) => {
				return item.title.includes(val) ? item : ''
			})

			this.setState({

				articlesList: result
			})
		}
		else {
			this.setState({
				articlesList: this.state.articlesCopy
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
								<h2 class="section-title">Blogs And Article</h2>
							</div>
							<div class="col-xs-12 col-md-6">
								<form class="form-inline form-searchbar">
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Search Blogs and Articles"
											onChange={this.searchHandler}
										/>
									</div>
									<button
										style={{
											marginRight: 5
										}}
										onClick={e => e.preventDefault()}
										type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
									<a href="#" class="btn btn-default"><i class="fa fa-plus"></i>
									New Blog</a>
								</form>
							</div>
						</div>
						{/* {this.props.admin.msg} */}
						<div class="row">
							<div class="col-xs-12 col-md-12">
								<table class="table table-bordered">
									<tbody>
										<tr>
											<th class="active" width="50">S#</th>
											<th class="active" width="200">Title</th>
											<th class="active">Description</th>
											<th class="active" width="100">Author</th>
											<th class="active" width="100">Publish Date</th>
											<th class="active">Publish</th>
											<th class="active" width="200">Action</th>
										</tr>
										{this.state.articlesList ?
											this.state.articlesList.map((item, index) => {
												return <tr>
													<td>{index + 1}</td>
													<td>{item.title}</td>
													<td>{item.description}</td>
													{/* <td>James Hod</td> */}
													<td>{item.user.first_name}</td>

													<td>{item.submit_date}</td>
													<td>
														<label class="switch">
															<input type="checkbox" onClick={() => {
																this.props.approveArticle(item._id)
															}} checked={item.approved} />
															<span class="checkbox_slider round"></span>
														</label>
													</td>
													<td>
														<a class="badge blue"> <i class="fa fa-external-link"></i> View Detail</a>
														<a class="badge red"
															onClick={() => {
																this.deleteItem(index, item._id)
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
											}) : <></>
										}

									</tbody>
								</table>
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
		blogs: () => {
			dispatch(blogsAndArticles())
		},
		approveArticle: (id) => {
			dispatch(approveAnArticle(id))
		},
		deleteArticle: (id) => {
			dispatch(deleteAnArticle(id))
		}
	})
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogsAndArticalsAdmin));
