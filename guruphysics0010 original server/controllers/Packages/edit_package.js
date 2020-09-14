const _ = require('lodash');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {packages} = require('../../models/pricing_packages');

const edit_article = async (req, res) => {

    try {

        let package_id = req.query._id;
        const body = _.pick(req.body, ['package_name' , "actual_price" , "offered_price" , "status" ]);

        if(req.user.admin_access == true){

            const edited_package = await packages.editPackage(package_id, body);

            res.json({
                code: 200,
                message : "edited!"
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

module.exports = edit_article;
