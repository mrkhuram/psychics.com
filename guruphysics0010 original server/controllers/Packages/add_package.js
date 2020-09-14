const _ = require('lodash');
const {USER_NOT_FOUND} = require('../common/error_codes');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {User} = require('../../models/user');
const {packages} = require('../../models/pricing_packages');

const article = async (req, res) => {
    try {
        let resp;
        const token = req.header('x-sh-auth');
        const user = await User.findByToken(token);
        if (!user) {
            res.status(400).json(USER_NOT_FOUND);
        }

        if(user.admin_access == true){

            const body = _.pick(req.body, ['package_name' , "actual_price" , "offered_price" ]);

            const package = new packages({
                package_name: body.package_name,
                actual_price: body.actual_price,
                offered_price: body.offered_price,
                date : Date.now(),
            });

            await package.save();

            resp = {
                code: 200,
                message : 'Successfully Added',
                package: package
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