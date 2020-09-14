const _ = require('lodash');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {User} = require('../../models/user');

const approve_article = async (req, res) => {

    try {

        const body = _.pick(req.body, ['title' , "description" , "for_user" , "for_mentor"] );

        body.date = Date.now();

        if(req.user.admin_access == true){

            req.user.announcements.push(body);
            await req.user.save();

            res.json({
                code: 200,
                message : "added Successfully!"
            });

        }

        else {
            res.json({
                code: 400,
                message : "you are not an admin!"
            });
        }

    }
    catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }

};

module.exports = approve_article;
