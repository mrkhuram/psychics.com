import React from 'react'
import { addArticle } from '../../redux/action/userProfileAction'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MyEditor from './textArea';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';

class AddNewBlog extends React.Component {

    state = {
        open: false,
        title: ''

    }
    onChangeHandler = (e) => {

        this.setState({ [e.target.name]: e.target.value })

    }

    submitArtical = (e) => {
        e.preventDefault()
        console.log(this.state);
        this.props.addNewArticle(this.state)


    }
    // modules = {
    //     toolbar: [
    //         [{ 'header': [1, 2, false] }],
    //         ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    //         [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    //         ['link', 'image'],
    //         ['clean']
    //     ],
    // }

    // formats = [
    //     'header',
    //     'bold', 'italic', 'underline', 'strike', 'blockquote',
    //     'list', 'bullet', 'indent',
    //     'link', 'image'
    // ]
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

        if (nextProp.profile.articleAdded !== null) {
            this.handleClickOpen()
        }
    }
    render() {
        return (
            <>
                <div style={{ margin: "50px 0px" }}>
                    <div class="container">
                        <div class="row wow fadeInUp">
                            <div class="col-xs-12 col-md-8 col-md-offset-2">
                                <div class="custom_form">
                                    <form action="#">
                                        <div class="form-section">
                                            <h2 class="form-heading">Add New Blog or Article</h2>
                                            <hr />
                                            <div class="form-group">
                                                <input type="name" class="form-control" id="name" placeholder="Blog Title" name="title" onChange={this.onChangeHandler} />
                                            </div>
                                            <div class="form-group">
                                                <label>Blog Thumbnail</label>
                                                <input type="file" id="photo" placeholder="" />
                                            </div>
                                            <div class="form-group">
                                                <textarea class="form-control" id="content" rows="10" style={{ height: 'inherit' }} name="description" onChange={this.onChangeHandler}></textarea>
                                                {/* <MyEditor /> */}
                                            </div>

                                            <div class="form-group">
                                                <label class="custom_radio">Publish
                        					        <input type="radio" name="published" value='publish' onChange={this.onChangeHandler} />
                                                    <span class="checked"></span>
                                                </label>
                                                {/* <label class="custom_radio">Unpublish
					                            <input type="radio" name="published" value='unpublish' onChange={this.onChangeHandler} />
                                                    <span class="checked"></span>
                                                </label> */}
                                            </div>
                                            <button type="submit" onClick={this.submitArtical} class="btn btn-default site-btn" style={{ width: 'auto', padding: "10px 30px" }}>Post Now</button>
                                        </div>
                                    </form>
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
										Article Successfuly Submitted</p>
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
        addNewArticle: (data) => {
            dispatch(addArticle(data))
        },
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddNewBlog));