import React from 'react'

import { withRouter, Link } from 'react-router-dom'
import { collectingDataAccount,signInStart } from '../../redux/action/authAction'
import { connect } from 'react-redux'

class SignIn extends React.Component {

    state={

    }
    onChange = (e) => {
        console.log({[e.target.name]:e.target.value});
        
        this.setState({[e.target.name]:e.target.value})
       

    }


    submitData = (e) => {
        e.preventDefault()
        // console.log(this.state);
        
        this.props.createUser(this.state)
    }

    render() {
        return (
            <>
                <section class="custom_form">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-md-4 col-md-offset-4">
                                <form action="#">
                                    <h2>Sign In</h2>
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
                                        <input type="email" onChange={this.onChange} name='email' class="form-control" id="email" placeholder="Your Email" />
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                                        <input type="password" onChange={this.onChange} name='password' class="form-control" id="password" placeholder="Your Password" />
                                    </div>
                                    <button type="submit" class="btn btn-default" onClick={this.submitData}>Login</button>
                                    <p class='p'><a href="#">Forgot Your Password?</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
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
        createUser: (userData)=>{
            dispatch(signInStart(userData))
        }
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));