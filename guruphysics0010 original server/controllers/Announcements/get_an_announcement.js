const _ = require('lodash');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {Announcements} = require('../../models/announcements');

const get = async (req, res) => {
    try {
        const _id = req.query._id;
        const announcement = await Announcements.findById(_id);

        if (!announcement) {
            res.status(400).json({ message : "not found"});
        }

        res.json({
            code: 200,
            announcement: announcement
        });
    } catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }
};

module.exports = get;