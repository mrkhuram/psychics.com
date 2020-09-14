import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {editCouponAdmin} from '../../redux/action/adminAction'


class EditCoupon extends React.Component {
    constructor(props) {
        super(props)

        editCoupon = e => {
            if (this.state.coupon_name.length > 0) {
                this.setState({
                    err: 'Coupon Successfully Edited.'
                })
                setTimeout(() => {
                    this.setState({
                        err: ''
                    })
                }, 5000);
            
            }
        }
        editCoupon()
        editCouponFail = e => {
            this.setState({
                err: 'Internal Server Error.'
            })
            setTimeout(() => {
                this.setState({
                    err: ''
                })
            }, 5000);
        }
        editCouponFail()
    }
    state = {
        coupon_name: '',
        coupon_detail: '',
        discount_price: '',
        date: '',
        status: true
    }

    componentDidMount() {

        let coupon = this.props.location.query
        this.setState({
            ...coupon
        })
    }

    onChangeHandler = e => {
        let name = e.target.name
        let value = e.target.value
        console.log(e.target.checked);

        if (name === 'status') {
            if (e.target.checked) {
                this.setState({ status: true })
            }
            if (!e.target.checked) {
                this.setState({ status: false })

            }
            return true
        }
        this.setState({
            [name]: value
        })
    }
    submitData = e => {
        e.preventDefault()
        this.props.editCouponAdmin(this.state)
    }
    render() {
        console.log(this.state);

        return (
            <>
                <div className="content-wrapper">
                    <div id="order_preview" className="wow fadeInUp content_box"
                        style={{ visibility: "visible", animationName: "fadeInUp" }}>
                        <div className="row table-header">
                            <div className="col-xs-12 col-md-12">
                                <h2 className="section-title">Edit Coupon <Link to='/admin/couponAdmin'
                                    className="btn btn-default pull-right"><i className="fa fa-chevron-left"></i> Back</Link></h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <form>
                                    <div className="form-group">
                                        <label for="pwd">Coupon Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.coupon_name}
                                            name="coupon_name"
                                            id="coupon_name"

                                            onChange={this.onChangeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Coupon Discount Price:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.discount_price}
                                            name="discount_price"
                                            id="discount_price"
                                            onChange={this.onChangeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Coupon Detail:</label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            value={this.state.coupon_detail}
                                            name="coupon_detail"
                                            id="coupon_detail"
                                            onChange={this.onChangeHandler}
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Publish:</label>
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                // checked={this.state.status}
                                                name="status"
                                                onChange={this.onChangeHandler}
                                            />
                                            <span className="checkbox_slider round"></span>
                                        </label>
                                    </div>

                                    <div className="error">
										{this.state.err ? this.state.err : ""}
									</div>
                                    <button type="submit" className="btn btn-default"
                                    onClick={this.submitData}>Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default connect(null,{editCouponAdmin})(EditCoupon);
export let editCoupon, editCouponFail
