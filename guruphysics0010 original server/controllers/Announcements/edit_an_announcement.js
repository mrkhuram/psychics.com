const _ = require('lodash');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {Announcements} = require('../../models/announcements');

const edit_announcement = async (req, res) => {

    try {

        let announcement_id = req.query.announcement_id;
        const body = _.pick(req.body, [ 'title' , 'description' , 'to_client' , 'to_user' , 'published']);


        if(req.user.admin_access == true){

            const edited_announcement = await Announcements.editAnnouncement(announcement_id, body);

            res.json({
                code: 200,
                message : "edited!",
                edited_announcement : edited_announcement
            });

        }

        else {
            res.json({
                code: 400,
                message : "you are not allowed to edit it!"
            });
        }

    }
    catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }

};

module.exports = edit_announcement;
