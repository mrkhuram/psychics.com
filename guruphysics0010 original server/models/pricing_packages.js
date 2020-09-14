const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const _ = require('lodash');
const ObjectId = require('mongodb').ObjectId;

const Packages = new mongoose.Schema({

    package_name : {type : String , default: ""},

    date: {type: Date, default : Date.now()},

    actual_price : {type : String , default : "$2345"},

    offered_price : {type : String , default : "$1234"},

    status : {type: Boolean , default : true}
});

Packages.plugin(timestamps);

Packages.methods.toJSON = function () {
    const Packages = this;
    const taskObject = Packages.toObject();

    const taskJson = _.pick(taskObject, [ '_id' , 'package_name' , 'status' , 'date' , 'actual_price' , 'offered_price' ]);

    return taskJson;
};

Packages.statics.count = function () {
    const tasks = this;
    return tasks.count();
};

Packages.statics.findById = function (id) {
    const task = this;
    return task.findOne({_id: ObjectId(id)});
};


Packages.statics.findByUser = function (id) {
    const task = this;
    return task.find({user: ObjectId(id)});
};


Packages.statics.removeById = function (id) {
    const task = this;
    return task.remove({_id: id});
};


Packages.statics.getAllList = function () {
    const tasks = this;
    return tasks.find({}) ;
};


Packages.statics.getFromLastMonth = function () {
    const tasks = this;
    let today = new Date();
    return tasks.find({
        'date':{ $gte: new Date(new Date(today.getTime() - (24*30 * 60 * 60 * 1000)))}});
};



Packages.statics.editPackage = function (id, updates) {
    const article = this;
    return article.findOneAndUpdate({_id: id},{
        $set: updates,
        new : true
    });
};

const packages = mongoose.model('Packages', Packages);
module.exports = {packages};
