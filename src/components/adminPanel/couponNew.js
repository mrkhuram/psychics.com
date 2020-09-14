import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addNewCoupon } from '../../redux/action/adminAction'
class NewCoupon extends React.Component {
    constructor(props) {
        super(props)

        addCoupon = e => {
            if (this.state.coupon_name.length > 0) {

                let coupon_name = document.getElementById("coupon_name")
                coupon_name.value = ''
                let discount_price = document.getElementById("discount_price")
                discount_price.value = ''
                let coupon_detail = document.getElementById("coupon_detail")
                coupon_detail.value = ''
            }
        }
        addCoupon()
        addCouponFail = e => {
            this.setState({
                err: 'Internal Server Error.'
            })
            setTimeout(() => {
                this.setState({
                    err: ''
                })
            }, 5000);
        }
        addCouponFail()
    }
    state = {
        coupon_name: '',
        coupon_detail: '',
        discount_price: '',
    }

    onChangeHandler = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.addCoupon(this.state)
    }
    render() {
        return (
            <>
                <div className="content-wrapper">
                    <div id="order_preview" className="wow fadeInUp content_box"
                        style={{ visibility: "visible", animationName: "fadeInUp" }}>
                        <div className="row table-header">
                            <div className="col-xs-12 col-md-12">
                                <h2 className="section-title">New Coupon <Link to='/admin/couponAdmin'
                                    className="btn btn-default pull-right"><i className="fa fa-chevron-left"></i> Back</Link></h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <form>
                                    <div className="form-group">
                                        <label for="pwd">Coupon Name:</label>
                                        <input type="text" className="form-control" id='coupon_name' name='coupon_name' onChange={this.onChangeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Coupon Discount Price:</label>
                                        <input type="text" className="form-control" id='discount_price' name="discount_price" onChange={this.onChangeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Coupon Detail:</label>
                                        <textarea type="text" className="form-control" id='coupon_detail' name="coupon_detail" onChange={this.onChangeHandler}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Publish:</label>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="checkbox_slider round"></span>
                                        </label>
                                    </div>
                                    <div className="error">
										{this.state.err ? this.state.err : ""}
									</div>
                                    <button type="submit" className="btn btn-default" onClick={this.onSubmit}>Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

let mapStateToProps = (store) => {
    return {
        admin: store.AdminReducer
    }
}

let mapDispatchToProps = (dispatch) => {

    return ({
        addCoupon: (data) => {
            dispatch(addNewCoupon(data))
        },
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCoupon));
export let addCoupon, addCouponFail
