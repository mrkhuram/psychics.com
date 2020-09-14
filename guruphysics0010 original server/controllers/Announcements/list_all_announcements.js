const _ = require('lodash');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {Announcements} = require('../../models/announcements');

const list = async (req, res) => {
    try {
        const announcements = await Announcements.getAllList();

        if (!announcements) {
            res.status(400).json({ message : "not found"});
        }

        res.json({
            code: 200,
            announcements: announcements
        });
    } catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }
};

module.exports = list;