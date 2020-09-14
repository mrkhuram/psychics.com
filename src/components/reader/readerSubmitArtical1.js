import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Get_Articles } from '../../redux/action/articleAction'
import services from '../services'

import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';


class ReaderSubmitArticalOne extends React.Component {

    // constructor(props) {
    //     super(props);
    //     props.getAllArticle()
    // }
    state = {
        articals: '',
        open: false
    }
    // componentDidMount() {
    //     // this.props.getAllArticle()
    //     console.log(this.props.artical.approved);
    //     setTimeout(() => {

           
    //     },1500);

    // }
    // componentWillReceiveProps(props){
    //     this.setState({
    //         articals: props.artical
    //     })
    //     console.log(this.state);
    // }
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

                <div id="menu1" class="tab-pane fade in active">
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
                                {this.props.approved ?
                                    this.props.approved.map((item, index) => {
                                        return <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>{item.submit_date}</td>
                                            <td>
                                                <Link class="badge blue" to="/reader_dashboard/submit-Artical/view-add-blog"> <i class="fa fa-external-link"></i> View Detail</Link>
                                                <a class="badge delete" 
                                                // onClick={this.delete}
                                                 onClick={this.handleClickOpen}
                                                > <i class="fa fa-trash"></i> Delete</a>
                                            </td>
                                        </tr>

                                    }) : ""}

                            </tbody>
                        </table> 
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
                                                <button type="button" class="btn btn-default yes" data-dismiss="modal">Yes</button>
                                                <button type="button" class="btn btn-default no" data-dismiss="modal"
                                                onClick={this.handleClose}
                                                >No</button></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MuiDialogContent>
                    </Dialog>

                {/* <div id="delete_popup" class="modal fade customPopup" role="dialog">
        <div class="modal-dialog modal-sm">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-body">
                    <p><i class="fa fa-trash"></i><br />Are you sure you want to delete</p>
                    <p>
                        <button type="button" class="btn btn-default yes" data-dismiss="modal">Yes</button>
                        <button type="button" class="btn btn-default no" data-dismiss="modal">No</button></p>
                </div>
            </div>
        </div>
    </div> */}


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
        getAllArticle: () => {
            dispatch(Get_Articles())
        },
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReaderSubmitArticalOne));