import React from 'react'

import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import ''
// import './style.css'
import { changeUserStatus } from '../../redux/action/authAction'
import axios from 'axios'
class ReaderHome extends React.Component {

    // componentWillMount(){
    //     console.log('wokrin');

    //     // document.getElementById('chek').checked = true
    // }

    state = {
        status: '',
        statusflag: false
    }

    componentDidMount() {
        console.log('compponentDidMount');

        this.setState({
            status: this.props.auth.userDetail.activity_status,
            statusflag: false
        })
        setTimeout(() => {
            if (this.state.status) {
                document.getElementById(this.state.status).checked = true
            }

        });

    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            status: nextProps.auth.userDetail.activity_status,
            statusflag: true
        })


    }

    onChangeHandler = (e) => {
        console.log([e.target.name], e.target.value);

        this.props.changeStatus({
            status: e.target.value
        })
        if (this.state.status) {
            document.getElementById(this.state.status).checked = true
        }



    }
    render() {
        if (this.state.statusflag) {
            document.getElementById(this.state.status).checked = true
        }
        console.log(this.state)
        return (
            <>
                <div style={{ margin: "50px 0px" }}>
                    <section class="section advisor_section">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-md-12">
                                    <div class="content_box text-center">
                                        <h3 class="page-heading" style={{ marginBottom: "10px" }}>Welcome {this.props.auth.userDetail.first_name}</h3>
                                        <p style={{ marginBottom: "20px", color: "#887d7d" }}>You can change your status by selecting one of the below options
                                        </p>
                                        <form>

                                            <label class="custom_radio online">
                                                <span class='text'>Online</span>
                                                <input type="radio" id="online" name="status" value='online' onChange={this.onChangeHandler} />
                                                <span class="checked"></span>
                                            </label>

                                            <label class="custom_radio busy">
                                                <span class='text'>Busy</span>
                                                <input type="radio" name="status" id='busy' value='busy' onChange={this.onChangeHandler} />
                                                <span class="checked"></span>
                                            </label>
                                            <label class="custom_radio offline">
                                                <span class='text'>Offline</span>
                                                <input type="radio" name="status" id='offline' value='offline' onChange={this.onChangeHandler} />
                                                <span class="checked"></span>
                                            </label>
                                            <button type="submit" class="site-btn hide"><i class="fa fa-check"></i> Save Changes</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <section class="section wow announcements fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div class="container content_box">
                                    <div class="row">
                                        <div class="col-xs-12 col-md-12">
                                            <div class="icon"><i class="fa fa-bullhorn"></i></div>
                                            <h4 class="section-title-sub">Important Announcements</h4>
                                            <p>"The #1 source for good news! For 20 years, our positive news from around the world has uplifted and <br />inspired millions to become more optimistic."</p>
                                        </div>
                                    </div>
                                </div>
                            </section>


                        </div>
                    </section>
                </div>
            </>
        )
    }
}


let mapStateToProps = (store) => {
    // console.log(store);


    return {
        auth: store.AuthReducer,
        profile: store.ProfileReducer
    }
}
let mapDispatchToProps = (dispatch) => {

    return ({
        changeStatus: (data) => {
            dispatch(changeUserStatus(data))
        },

    })
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReaderHome));