const _ = require('lodash');
const {USER_NOT_FOUND} = require('../common/error_codes');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {User} = require('../../models/user');
const {coupon} = require('../../models/coupons');

const article = async (req, res) => {
    try {
        let resp;
        const token = req.header('x-sh-auth');
        const user = await User.findByToken(token);
        if (!user) {
            res.status(400).json(USER_NOT_FOUND);
        }

        if(user.admin_access == true){

            const body = _.pick(req.body, ['coupon_name' , "discount_price" , "coupon_detail" ]);

            const _coupon = new coupon({
                coupon_name: body.coupon_name,
                discount_price: body.discount_price,
                coupon_detail: body.coupon_detail,
                date : Date.now(),
            });

            await _coupon.save();

            resp = {
                code: 200,
                message : 'Successfully Added',
                coupon: _coupon
            };

        }

        else {
            resp = {
                code: 400,
                message : 'You are not an admin'
            };
        }

        res.json(resp);
    }

    catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }
};

module.exports = article;