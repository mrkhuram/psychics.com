const {USER_DP_PATH} = require('../common/constants');
const {User} = require('../../models/user');
const fs = require('fs-extra');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const uuidv1 = require('uuid/v1');

const upload_dp = async (req, res) => {
    try {

        console.log("started");
        if (!req.files)
            return res.status(400).send('No file uploaded.');

        else {
            console.log("try");
            const token = req.header('x-sh-auth');
            const user = await User.findByToken(token);

            let dp = req.files.dp;

            const dir_path = USER_DP_PATH + '/';
            fs.mkdirsSync(dir_path);

            const image_file_name = uuidv1() + '.' + dp.name.split('.').pop();
            const file_path = dir_path + image_file_name;

            await dp.mv(file_path);

            user.dp_active_file =  '/media/dp/serve/' + image_file_name;

            await user.save();

           return res.json({
                message:'Display Pic Uploaded Successfully',
                user : user,
                code: 200
            });
        }
    }
    catch(e)
    {
        RENDER_BAD_REQUEST(res, e);
    }

};

module.exports = upload_dp;