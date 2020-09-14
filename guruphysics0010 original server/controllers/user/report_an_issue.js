const _ = require('lodash');
const {USER_NOT_FOUND} = require('../common/error_codes');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {User} = require('../../models/user');
const {Report} = require('../../models/reports');

const report = async (req, res) => {
    try {
        let resp;
        const token = req.header('x-sh-auth');
        const user = await User.findByToken(token);
        if (!user) {
            res.status(400).json(USER_NOT_FOUND);
        }

            const body = _.pick(req.body, ['report_subject' , "report" ]);

            const report = new Report({
                user: user._id,
                report_subject: body.report_subject,
                report: body.report,
                report_date : Date.now(),
            });

            await report.save();

            resp = {
                code: 200,
                message : 'Successfully Reported',
            };

        res.json(resp);
    }

    catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }
};

module.exports = report;
