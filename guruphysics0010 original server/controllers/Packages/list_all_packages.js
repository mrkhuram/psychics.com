const _ = require('lodash');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {packages} = require('../../models/pricing_packages');

const list = async (req, res) => {
    try {
        const _packages = await packages.getAllList();

        if (!_packages) {
            res.status(400).json({ message : "not found"});
        }

        res.json({
            code: 200,
            packages: _packages
        });
    } catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }
};

module.exports = list;
