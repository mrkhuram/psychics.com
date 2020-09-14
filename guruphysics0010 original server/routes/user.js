const express = require('express');
const router = express.Router();
const {register_route} = require('../utils/routes');

const get_delete_account = require('../controllers/user/deleteAccount');
const DeleteAccountbyadmin = require('../controllers/user/DeleteAccountbyadmin');
const post_register = require('../controllers/user/register');
const post_login = require('../controllers/user/login');
const get_profile = require('../controllers/user/profile');
const get_logout = require('../controllers/user/logout');
const get_logout_all_devices = require('../controllers/user/logout_all_devices');
const post_confirm_register_pin = require('../controllers/user/confirm_register_pin');
const get_confirm_register_uri = require('../controllers/user/confirm_register_uri');
const post_profile_update = require('../controllers/user/profile_update');
const post_forgot_password_gen_pin =  require('../controllers/user/forgot_password_gen_pin');
const post_reset_password_pin = require('../controllers/user/reset_password_pin');
const post_reset_password = require('../controllers/user/reset_password');
const report = require('../controllers/user/report_an_issue');
const update_token = require('../controllers/user/update_token');
const get_reports = require('../controllers/user/get_all_reports');
const get_a_user = require('../controllers/user/get_a_user');
const get_all_advisors = require('../controllers/user/get_all_advisors');
const get_all_clients = require('../controllers/user/get_all_clients');
const get_all_admins = require('../controllers/user/get_all_admins');
const get_all_users = require('../controllers/user/get_all_users');
const edit_activity_status = require('../controllers/user/edit_activity_status');


register_route({
    router,
    auth_required: false,
    route: '/register',
    post_method: post_register
});


register_route({
    router,
    auth_required: false,
    route: '/reports',
    get_method: get_reports
});


register_route({
    router,
    auth_required: false,
    route: '/login',
    post_method: post_login
});


register_route({
    router,
    auth_required: false,
    route: '/forgot/password/email_pin',
    post_method: post_forgot_password_gen_pin
});

register_route({
    router,
    auth_required: false,
    route: '/reset/password/with/pin',
    post_method: post_reset_password_pin
});

register_route({
    router,
    route: '/change/password',
    post_method: post_reset_password
});


register_route({
    router,
    route: '/update/token',
    auth_required:true,
    get_method: update_token
});


register_route({
    router,
    route: '/profile',
    get_method: get_profile
});

register_route({
    router,
    route: '/logout',
    get_method: get_logout
});

register_route({
    router,
    route: '/logout_all_devices',
    get_method: get_logout_all_devices
});

register_route({
    router,
    route: '/confirm_register_pin',
    post_method: post_confirm_register_pin
});

register_route({
    router,
    route: '/confirm_register_uri',
    get_method: get_confirm_register_uri
});

register_route({
    router,
    route: '/update/profile',
    post_method: post_profile_update
});


register_route({
    router,
    route: '/report_an_issue',
    post_method: report
});


register_route({
    router,
    route: '/delete_account',
    get_method: get_delete_account
});

register_route({
    router,
    route: '/DeleteAccountbyadmin',
    get_method: DeleteAccountbyadmin
});


register_route({
    router,
    route: '/get_a_user',
    get_method: get_a_user
});


register_route({
    router,
    route: '/get_all_advisors',
    get_method: get_all_advisors
});

register_route({
    router,
    route: '/get_all_clients',
    get_method: get_all_clients
});

register_route({
    router,
    route: '/get_all_admins',
    get_method: get_all_admins
});

register_route({
    router,
    route: '/get_all_users',
    get_method: get_all_users
});


register_route({
    router,
    route: '/edit_activity_status',
    post_method: edit_activity_status
});


module.exports = router;
