const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const _ = require('lodash');
const ObjectId = require('mongodb').ObjectId;

const Announcement = new mongoose.Schema({

    title : {type : String , default: ""},

    description : {type : String , default: ""},

    date: {type: Date, default : Date.now()},

    published : { type : Boolean ,  default : false},

    to_client : { type : Boolean ,  default : false},

    to_adviser : { type : Boolean ,  default : false},

});

Announcement.plugin(timestamps);

Announcement.methods.toJSON = function () {
    const Invoices = this;
    const taskObject = Invoices.toObject();

    const taskJson = _.pick(taskObject, [ '_id' , 'title' , 'description' , 'date' , 'published' , 'to_client' , "to_adviser" ]);

    return taskJson;
};

Announcement.statics.count = function () {
    const tasks = this;
    return tasks.count();
};

Announcement.statics.findById = function (id) {
    const task = this;
    return task.findOne({_id: ObjectId(id)}) . populate('user' , 'first_name');
};


Announcement.statics.findByUser = function (id) {
    const task = this;
    return task.find({user: ObjectId(id)}) . populate('user' , 'first_name' );
};


Announcement.statics.removeById = function (id) {
    const task = this;
    return task.remove({_id: id});
};


Announcement.statics.getAllList = function () {
    const tasks = this;
    return tasks.find({})  .  populate('user' , 'first_name');
};


Announcement.statics.getAllByUser = function (user_id) {
    const tasks = this;
    return tasks.find({'user' : user_id}) . populate('user' , 'full_name');
};


Announcement.statics.getFromLastMonth = function (user_id) {
    const tasks = this;
    let today = new Date();
    return tasks.find({
        'user' : user_id ,
        'date':{ $gte: new Date(new Date(today.getTime() - (24*30 * 60 * 60 * 1000)))}});
};


Announcement.statics.editAnnouncement = function (id, updates) {
    const article = this;
    return article.findOneAndUpdate({_id: id},{
        $set: updates,
        new : true
    });
};

const Announcements = mongoose.model('Announcements', Announcement);
module.exports = {Announcements};
