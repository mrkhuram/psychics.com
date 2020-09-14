import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {Get_Articles} from '../../redux/action/articleAction'
import services from '../services'

class ReaderSubmitArticalTwo extends React.Component {


    render() {
        return (
            <>
                <div id="menu2" class="tab-pane fade in active">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <th class="active" width="50">S#</th>
                                    <th class="active" width="200">Title</th>
                                    <th class="active">Description</th>
                                    <th class="active" width="100">Publish Date</th>
                                    <th class="active" width="200">Action</th>
                                </tr>
                                {this.props.unApprove.map((item,index)=>{
                                return <tr>
                                    <td>{index+1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>

                                    <td>{item.submit_date}</td>
                                    <td>
                                        <Link class="badge blue" to="/reader_dashboard/submit-Artical/view-add-blog"> <i class="fa fa-external-link"></i> View Detail</Link>
                                        <Link class="badge delete" to='#' data-toggle="modal" data-target="#delete_popup" > <i class="fa fa-trash"></i> Delete</Link>
                                        <div class="dropdown hide">
                                            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">More
                                                    <span class="caret"></span></button>
                                            <ul class="dropdown-menu">
                                                <li><a href="#">Edit</a></li>
                                                <li><a href="#">View Detail</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
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
        addNewArticle: (data) => {
            dispatch(Get_Articles(data))
        },
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReaderSubmitArticalTwo));