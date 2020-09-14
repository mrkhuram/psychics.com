const _ = require('lodash');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {User} = require('../../models/user');
const {Report} = require('../../models/reports');

const get = async (req, res) => {
    try {

        const token = req.header('x-sh-auth');
        const user = await User.findByToken(token);
        const user_id = req.query.user_id;
        if (!user) {
            res.status(400).json(USER_NOT_FOUND);
        }

        else {

            if(user.admin_access == true) {
                let reports = await Report.findByUser(user_id);
                if (!reports) {
                    res.json({code: 400, message: "no reports from the requested user"});
                }
                res.json({
                    code: 200,
                    reports
                })
            }
            else {
                res.json({message : "you are not allowed to get this"});
            }
        }

    } catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }
};

module.exports = get;
