const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const _ = require('lodash');
const ObjectId = require('mongodb').ObjectId;

const Reports = new mongoose.Schema({

    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

    report : {type : String , default: ""},

    report_date: {type: Date, default : Date.now()},

    report_subject : {type : String , default : "account"},

});

Reports.plugin(timestamps);

Reports.methods.toJSON = function () {
    const Report = this;
    const taskObject = Report.toObject();

    const taskJson = _.pick(taskObject, [ '_id' , 'user' , 'report' , 'report_date' , 'report_subject' ]);

    return taskJson;
};

Reports.statics.count = function () {
    const tasks = this;
    return tasks.count();
};

Reports.statics.findById = function (id) {
    const task = this;
    return task.findOne({_id: ObjectId(id)}) . populate('user' , 'first_name ');
};


Reports.statics.findByUser = function (id) {
    const task = this;
    return task.find({user: ObjectId(id)}) . populate('user' , 'first_name ') ;
};


Reports.statics.removeById = function (id) {
    const task = this;
    return task.remove({_id: id});
};


Reports.statics.getAllList = function () {
    const tasks = this;
    return tasks.find({})  . populate('user' , 'first_name');
};


Reports.statics.getAll = function (user_id) {
    const tasks = this;
    return tasks.find({'user' : user_id}) . populate('user' , 'first_name ');
};


Reports.statics.getFromLastMonth = function (user_id) {
    const tasks = this;
    let today = new Date();
    return tasks.find({
        'user' : user_id ,
        'date':{ $gte: new Date(new Date(today.getTime() - (24*30 * 60 * 60 * 1000)))}});
};


const Report = mongoose.model('Report', Reports);
module.exports = {Report};
