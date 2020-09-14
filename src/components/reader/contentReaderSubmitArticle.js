import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Get_Articles } from '../../redux/action/articleAction'
import services from '../services'

class ContentReader extends React.Component {


    render() {
        return (
            <>
                <tr>
                    <td>{this.props.index + 1}</td>
                    <td>{this.props.item.title}</td>
                    <td>{this.props.item.description}</td>

                    <td>{this.props.item.submit_date}</td>
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
            </>
                )
            }
        }
export default ContentReader;