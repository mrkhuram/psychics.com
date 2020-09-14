const express = require('express');
const router = express.Router();
const {register_route} = require('../utils/routes');
 
// ************************
// Meta Data
// ************************
const approve_article = require('../controllers/admin_actions/approve_an_article');


register_route({
    router,
    route: '/approve_an_article',
    get_method: approve_article
});


//////////////////////////////////////////////////////////////////////
///////////////// INVOICES ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const add_invoice = require('../controllers/Invoiices/add_invoice');
const get_invoice = require('../controllers/Invoiices/get');
const list_invoice = require('../controllers/Invoiices/list_all_invoices');
const edit_invoice = require('../controllers/Invoiices/edit_an_invoice');
const delete_invoice = require('../controllers/Invoiices/delete');


register_route({
    router,
    route: '/add_invoice',
    post_method: add_invoice
});


register_route({
    router,
    route: '/get_invoice',
    get_method: get_invoice
});


register_route({
    router,
    route: '/list_all_invoices',
    get_method: list_invoice
});


register_route({
    router,
    route: '/edit_invoice',
    post_method: edit_invoice
});


register_route({
    router,
    route: '/delete_invoice',
    get_method: delete_invoice
});



//////////////////////////////////////////////////////////////////////
///////////////// PRICING PACKAGES ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const add_package = require('../controllers/Packages/add_package');
const edit_package = require('../controllers/Packages/edit_package');
const delete_package = require('../controllers/Packages/delete');
const list_package = require('../controllers/Packages/list_all_packages');
const get_package = require('../controllers/Packages/get');


register_route({
    router,
    route: '/add_package',
    post_method: add_package
});


register_route({
    router,
    route: '/get_package',
    get_method: get_package
});


register_route({
    router,
    route: '/list_all_packages',
    get_method: list_package
});


register_route({
    router,
    route: '/edit_package',
    post_method: edit_package
});


register_route({
    router,
    route: '/delete_package',
    get_method: delete_package
});



//////////////////////////////////////////////////////////////////////
///////////////// COUPONS ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const add_coupon = require('../controllers/Coupons/add_coupon');
const edit_coupon = require('../controllers/Coupons/edit_coupon');
const delete_coupon = require('../controllers/Coupons/delete');
const list_coupon = require('../controllers/Coupons/list_all_coupons');
const get_coupon = require('../controllers/Coupons/get');


register_route({
    router,
    route: '/add_coupon',
    post_method: add_coupon
});


register_route({
    router,
    route: '/get_coupon',
    get_method: get_coupon
});


register_route({
    router,
    route: '/list_all_coupons',
    get_method: list_coupon
});


register_route({
    router,
    route: '/edit_coupon',
    post_method: edit_coupon
});


register_route({
    router,
    route: '/delete_coupon',
    get_method: delete_coupon
});


//////////////////////////////////////////////////////////////////////
///////////////// COUPONS ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const list_all_reports = require('../controllers/admin_actions/get_all_reports');
const get_reports_by_user = require('../controllers/user/get_all_reports');


register_route({
    router,
    route: '/get_reports_by_a_user',
    get_method: get_reports_by_user
});


register_route({
    router,
    route: '/list_all_reports',
    get_method: list_all_reports
});


module.exports = router;


//////////////////////////////////////////////////////////////////////
///////////////// BLOGS BY ADMIN ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////



const submit_blog = require('../controllers/blogs_by_admin/submit_blog');
const edit_an_blog = require('../controllers/blogs_by_admin/edit_an_blog');
const get_an_blog = require('../controllers/blogs_by_admin/get_an_blog');
const list_all_blogs = require('../controllers/blogs_by_admin/list_all_blogs');
const delete_blogs = require('../controllers/blogs_by_admin/delete');

register_route({
    router,
    route: '/submit_blog',
    post_method: submit_blog
});

register_route({
    router,
    route: '/submit_blog',
    post_method: edit_an_blog
});


register_route({
    router,
    route: '/get_an_blog',
    get_method: get_an_blog
});


register_route({
    router,
    route: '/list_all_blogs',
    get_method: list_all_blogs
});


register_route({
    router,
    route: '/delete_blogs',
    get_method: delete_blogs
});

module.exports = router;