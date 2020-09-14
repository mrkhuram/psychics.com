const _ = require('lodash');
const {USER_NOT_FOUND} = require('../common/error_codes');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {User} = require('../../models/user');
const {Announcements} = require('../../models/announcements');

const article = async (req, res) => {
    try {
        let resp;
        const token = req.header('x-sh-auth');
        const user = await User.findByToken(token);
        if (!user) {
            res.status(400).json(USER_NOT_FOUND);
        }

        if(user.admin_access == true){

            const body = _.pick(req.body, ['title' , "description" , "to_client" , "to_adviser"]);

            const announcement = new Announcements({
                title: body.title,
                description: body.description,
                date : Date.now(),
                to_client : body.to_client,
                to_adviser : body.to_adviser
            });

            await announcement.save();

            resp = {
                code: 200,
                message : 'Successfully Added',
                announcement: announcement
            };

        }

        else {
            resp = {
                code: 400,
                message : 'You are not an admin'
            };
        }

        res.json(resp);
    }

    catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }
};

module.exports = article;