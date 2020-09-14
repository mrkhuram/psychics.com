const _ = require('lodash');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {coupon} = require('../../models/coupons');

const remove = async (req, res) => {
    try {
        const _id = req.query._id;
        const _coupon = await coupon.removeById(_id);

        if (!_coupon) {
            res.status(400).json({ message : "not found"});
        }

        res.json({
            code: 200,
            message : "removed!"
        });
    } catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }
};

module.exports = remove;