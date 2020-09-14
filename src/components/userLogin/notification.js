import React from 'react'

class Notification extends React.Component {
    render() {
        return (
            <div style={{margin:"50px 0px"}}>
                <div class="container ">
                <div class="row wow fadeInUp">
                <div class="col-xs-12 col-md-6">
                    <form action="http://localhost/action_page.php">
                        <div class="form-section">
                            <h2 class="section-title">Notification</h2>
                            <p>Update your email preferences here:</p>
                            <label class="custom_check">Receive Offers and Discounts by email
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                            </label>
                            
                            <label class="custom_check">Receive Offers and Discounts by SMS
                            <input type="checkbox"  />
                            <span class="checkmark"></span>
                            </label>
                            
                            <label class="custom_check"> Receive our Newsletter.
                            <input type="checkbox"  />
                            <span class="checkmark"></span>
                            </label>

                            <p>Please note that even if you choose to stop receiving all emails, occasionally we may still need to send you important information about your account</p>
                            <button type="submit" class="btn btn-default site-btn">Save</button>
                            <br/>
                            <br/>
                        </div>
                    </form>
                </div>
                    <div class="col-xs-12 col-md-6">
                        <img src="../../www.sclance.com/pngs/notification-png/notification_png_939785.html" class="img-responsive" style={{marginTop:"50px",opacity:"0.6"}}/>
                    </div>
                </div>
                </div>
        </div>
        )
    }
}
export default Notification