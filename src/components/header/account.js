import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { collectingDataAccount, startCreateUser } from '../../redux/action/authAction'
import { connect } from 'react-redux'


class AccountRegister extends React.Component {

    state = {
        email: '',
        display_name: '', 
        password: '', 
        confirmPassword: '',
        remember: ''
    }

    onChangeHandler = (e) => {
        // console.log({[e.target.name]:e.target.value});

        this.setState({ [e.target.name]: e.target.value })

    }


    submitData = (e) => {
        e.preventDefault()
        if (this.state.email !== '' && this.state.display_name !== '' && this.state.password !== '' && this.state.confirmPassword !== '' && this.state.remember !== '') {

            this.props.changeRoute(this.state)
        } else {
            console.log("this cant be empty");

        }
    }


    render() {
        return (
            <>
                <div id="account" class="tab-pane fade in active">
                    <form action="#">
                        <div class="custom_input signup">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
                                <input type="email" name='email' onChange={this.onChangeHandler} class="form-control" placeholder="Email" />
                            </div>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                <input type="text" name='display_name' onChange={this.onChangeHandler} class="form-control" placeholder="Username (to be displayed)" />
                            </div>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                                <input name='password' onChange={this.onChangeHandler} placeholder="Enter Password (6 to 16 characters)" class="textbox-n form-control" type="password" id="date" />
                            </div>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                                <input name='confirmPassword' onChange={this.onChangeHandler} placeholder="Confirm Password" class="textbox-n form-control" type="password" id="time" />
                            </div>
                        </div>
                        <div class="checkbox"><label><input onChange={this.onChangeHandler} type="checkbox" name="remember" /> I confirm that I am at least 18 years old and that I have read and agree to the updated Terms and Conditions and Privacy Policy. </label>
                        </div>
                        <button type="submit" class="btn btn-default" onClick={this.submitData}>Sign Up</button>

                        <p class='p text-center'>Already have an account?<a href="#">Sign In</a></p>
                        <p class='p text-center' style={{ fontSize: "12px" }}>"You will recieve email communications from GuruPsychics.
						                        You can unsubscribe within your account or via a link at the and end of each mail."</p>
                    </form>
                </div>
            </>
        )
    }
}
let mapStateToProps = (store) => {
    return {
        store
    }
}

let mapDispatchToProps = (dispatch) => {

    return ({
        collectData: (userDetails) => {
            dispatch(collectingDataAccount(userDetails))
        },
        createUser: (userData) => {
            dispatch(startCreateUser(userData))
        }
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountRegister));