const express = require('express');
const router = express.Router();
const {register_route} = require('../utils/routes');

// ************************
// Meta Data
// ************************

const add_announcement = require('../controllers/Announcements/add');
const edit_announcement = require('../controllers/Announcements/edit_an_announcement');
const get_announcement = require('../controllers/Announcements/get_an_announcement');
const list_announcements = require('../controllers/Announcements/list_all_announcements');
const delete_announcement = require('../controllers/Announcements/delete');

register_route({
    router,
    route: '/add_an_announcement',
    post_method: add_announcement
});

register_route({
    router,
    route: '/edit_an_announcement',
    post_method: edit_announcement
});


register_route({
    router,
    route: '/get_an_announcement',
    get_method: get_announcement
});


register_route({
    router,
    route: '/get_all_announcements',
    get_method: list_announcements
});


register_route({
    router,
    route: '/delete_announcement',
    get_method: delete_announcement
});

module.exports = router;