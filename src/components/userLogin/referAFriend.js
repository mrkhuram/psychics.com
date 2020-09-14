import React from 'react'

class ReferFriend extends React.Component {


    state = {

    }
    onChangeHandler = (e) => {

        this.setState({ [e.target.name]: e.target.value })
    }

    submitData =(e)=>{
        e.preventDefault()
        
        console.log(this.state);
        
    }
    render() {
        return (
            <div style={{margin:"50px 0px"}}>

                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <h2 class="section-title">Refer A Friend</h2>
                            <p class="section-desc">Refer our to friend to avail 10% cashback offer for you self and 20% discount for your friend,<br/>Fill in your friend Details:</p>
                                <form>
                                    <div class="col-xs-12 col-md-12 no-padding-left">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="name" name="friend's_name" onChange={this.onChangeHandler} placeholder="Friend's Name" />
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-12 no-padding-left">
                                        <div class="form-group">
                                            <input type="email" class="form-control" id="email" name="friend's_email" onChange={this.onChangeHandler} placeholder="Friend's Email" />
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-12 no-padding-left">
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-default site-btn" onClick={this.submitData}>Submit</button>
                                        </div>
                                    </div>

                                </form>
		</div>
                            <div class="col-xs-6 col-md-3 col-md-offset-1">
                                <img src={require("../assets/images/refer.jpg")} class="img-responsive"/>
		</div>
                            </div>
                        </div>
                    </div>
                   
                )
            }
        }
        export default ReferFriend;
