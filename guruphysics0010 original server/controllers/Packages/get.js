const _ = require('lodash');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {packages} = require('../../models/pricing_packages');

const get = async (req, res) => {
    try {
        const _id = req.query._id;
        const package = await packages.findById(_id);

        if (!package) {
            res.status(400).json({ message : "not found"});
        }

        res.json({
            code: 200,
            package: package
        });
    } catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }
};

module.exports = get;