import React from 'react'
import { Link, Route, NavLink,withRouter } from 'react-router-dom'
import ReaderSubmitArticalTwo from './readerSubmitArtical2';
import ReaderSubmitArticalOne from './readerSubmitArtical1';
import { Get_Articles } from '../../redux/action/articleAction'

import { connect } from 'react-redux'

class ReaderSubmitArtical extends React.Component {
    constructor(props) {
        super(props);
        props.getAllArticle()
    }
    componentWillReceiveProps(props){
        this.setState({
            articals: props.artical
        })
    }
    state = {
        active: true
    }
    onClick = () => {
        this.setState({ active: !this.state.active })
    }

    render() {

        
        return (

            <div style={{ margin: "50px 0px" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-md-12">
                            <h3 class="section-title-sub" style={{ textAlign: "left", padding: "5px 0px" }}>Blogs & Articles
                                <Link to="/reader_dashboard/submit-Artical/add-new-blog" class="site-btn pull-right">
                                    <i class="fa fa-plus-circle"></i> Add new</Link></h3>
                        </div>
                        <div class="col-xs-12 col-md-12">
                            <ul class="nav nav-tabs">
                                <li class={this.state.active ? "active" : ""} onClick={this.onClick}>
                                    <NavLink to='/reader_dashboard/submitArtical/readerpublish' id='link' activeClassName='active' >Published</NavLink>
                                </li>
                                <li class={this.state.active ? "" : "active"} onClick={this.onClick}>
                                    <NavLink to='/reader_dashboard/submitArtical/readerunder-review' id='link' activeClassName='active' >Under Review</NavLink>
                                </li>
                            </ul>

                            <div class="tab-content">
                                <Route path="/reader_dashboard/submitArtical/readerpublish" 
                                component={ () => < ReaderSubmitArticalOne approved={this.state.articals ? this.state.articals.approved : []} />
                                   
                                } 
                                />
                                <Route path="/reader_dashboard/submitArtical/readerunder-review" 
                                // component={ReaderSubmitArticalTwo} 
                                component={ () => < ReaderSubmitArticalTwo unApprove={this.state.articals ? this.state.articals.unApprove : []} />}
                                />
                            



                            </div>

                        </div>
                    </div>

                </div>
                <div id="delete_popup" class="modal fade customPopup" role="dialog">
                    <div class="modal-dialog modal-sm">
                        {/* <!-- Modal content--> */}
                        <div class="modal-content">
                            <div class="modal-body">
                                <p><i class="fa fa-trash"></i><br />Are you sure you want to delete</p>
                                <p>
                                    <button type="button" class="btn btn-default yes" data-dismiss="modal">Yes</button>
                                    <button type="button" class="btn btn-default no" data-dismiss="modal">No</button
                                    ></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


let mapStateToProps = (store) => {


    return {
        auth: store.AuthReducer,
        artical: store.ArticleReducer
    }
}
let mapDispatchToProps = (dispatch) => {

    return ({
        getAllArticle: () => {
            dispatch(Get_Articles())
        },
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReaderSubmitArtical));