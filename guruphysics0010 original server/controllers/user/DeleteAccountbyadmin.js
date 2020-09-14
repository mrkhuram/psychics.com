const {RENDER_BAD_REQUEST} = require('../common/utils');
const {User} = require('../../models/user');

const deleteAccount = async (req, res) => {

    try {
        const user_id = req.query._id;
        const user = await User.findById(user_id);
        console.log(user)

        await User.deleteAccount(user._id);

        res.json({
            code : 200,
            message : "deleted!"
        });

    }
    catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }

};

module.exports = deleteAccount;
