const _ = require('lodash');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {Articles_by_advsior} = require('../../models/articles_by_mentor');

const remove = async (req, res) => {
    try {
        const _id = req.query._id;
        const article = await Articles_by_advsior.removeById(_id);

        if (!article) {
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