const _ = require('lodash');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {invoices} = require('../../models/invoices');

const get = async (req, res) => {
    try {
        const _id = req.query._id;
        const invoice = await invoices.findById(_id);

        if (!invoice) {
            res.status(400).json({ message : "not found"});
        }

        res.json({
            code: 200,
            invoice: invoice
        });
    } catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }
};

module.exports = get;