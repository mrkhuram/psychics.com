const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const _ = require('lodash');
const ObjectId = require('mongodb').ObjectId;

const Coupon = new mongoose.Schema({

    coupon_name : {type : String , default: ""},

    date: {type: Date, default : Date.now()},

    discount_price : {type : String , default : "$2345"},

    coupon_detail : {type : String , default : "No Detail"},

    status : {type: Boolean , default : true}
});

Coupon.plugin(timestamps);

Coupon.methods.toJSON = function () {
    const Coupon = this;
    const taskObject = Coupon.toObject();

    const taskJson = _.pick(taskObject, [ '_id' , 'coupon_name' , 'status' , 'date' , 'discount_price' , 'coupon_detail' ]);

    return taskJson;
};

Coupon.statics.count = function () {
    const tasks = this;
    return tasks.count();
};

Coupon.statics.findById = function (id) {
    const task = this;
    return task.findOne({_id: ObjectId(id)});
};


Coupon.statics.findByUser = function (id) {
    const task = this;
    return task.find({user: ObjectId(id)});
};


Coupon.statics.removeById = function (id) {
    const task = this;
    return task.remove({_id: id});
};


Coupon.statics.getAllList = function () {
    const tasks = this;
    return tasks.find({}) ;
};


Coupon.statics.getFromLastMonth = function () {
    const tasks = this;
    let today = new Date();
    return tasks.find({
        'date':{ $gte: new Date(new Date(today.getTime() - (24*30 * 60 * 60 * 1000)))}});
};



Coupon.statics.editCoupon = function (id, updates) {
    const article = this;
    return article.findOneAndUpdate({_id: id},{
        $set: updates,
        new : true
    });
};

const coupon = mongoose.model('Coupon', Coupon);
module.exports = {coupon};
