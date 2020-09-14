const _ = require('lodash');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {coupon} = require('../../models/coupons');

const list = async (req, res) => {
    try {
        const _coupons = await coupon.getAllList();

        if (!_coupons) {
            res.status(400).json({ message : "not found"});
        }

        res.json({
            code: 200,
            coupons: _coupons
        });
    } catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }
};

module.exports = list;
