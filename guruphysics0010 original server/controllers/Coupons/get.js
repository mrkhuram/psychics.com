const _ = require('lodash');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {coupon} = require('../../models/coupons');

const get = async (req, res) => {
    try {
        const _id = req.query._id;
        const _coupon = await coupon.findById(_id);

        if (!_coupon) {
            res.status(400).json({ message : "not found"});
        }

        res.json({
            code: 200,
            coupon: _coupon
        });
    } catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }
};

module.exports = get;