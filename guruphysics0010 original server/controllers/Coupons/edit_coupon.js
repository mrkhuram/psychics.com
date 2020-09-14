const _ = require('lodash');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {coupon} = require('../../models/coupons');

const edit_coupon = async (req, res) => {

    try {

        let coupon_id = req.query._id;
        const body = _.pick(req.body, ['coupon_name' , "discount_price" , "coupon_detail" , "status" ]);

        if(req.user.admin_access == true){

            const edited_coupon = await coupon.editCoupon(coupon_id, body);

            res.json({
                code: 200,
                message : "edited!"
            });

        }

        else {
            res.json({
                code: 400,
                message : "you are not allowed to edit it!"
            });
        }

    }
    catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }

};

module.exports = edit_coupon;
