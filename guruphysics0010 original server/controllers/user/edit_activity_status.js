const _ = require('lodash');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {User} = require('../../models/user');

const profile_update = async (req, res) => {

    let resp = { code: 200 };

    try {
        const body = _.pick(req.body, ['status']);

        const _updated_user = await User.update_active_status(req.user._id, body.status);

        res.json({message: "editted!"});

    }
    catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }

};

module.exports = profile_update;
