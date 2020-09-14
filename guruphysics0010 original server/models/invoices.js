const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const _ = require('lodash');
const ObjectId = require('mongodb').ObjectId;

const Invoices = new mongoose.Schema({

    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

    invoice_name : {type : String , default: ""},

    date: {type: Date, default : Date.now()},

    currency : {type : String , default : "Dollar"},

    transition : { type : Boolean ,  default : false},

    payment_method : {type: String , default : ""}
});

Invoices.plugin(timestamps);

Invoices.methods.toJSON = function () {
    const Invoices = this;
    const taskObject = Invoices.toObject();

    const taskJson = _.pick(taskObject, [ '_id' , 'invoice_name' , 'transaction' , 'date' , 'payment_method' , 'amount' , "currency" , "client_id" ]);

    return taskJson;
};

Invoices.statics.count = function () {
    const tasks = this;
    return tasks.count();
};

Invoices.statics.findById = function (id) {
    const task = this;
    return task.findOne({_id: ObjectId(id)}) . populate('user' , 'first_name');
};


Invoices.statics.findByUser = function (id) {
    const task = this;
    return task.find({user: ObjectId(id)}) . populate('user' , 'first_name' );
};


Invoices.statics.removeById = function (id) {
    const task = this;
    return task.remove({_id: id});
};


Invoices.statics.getAllList = function () {
    const tasks = this;
    return tasks.find({})  .  populate('user' , 'first_name');
};


Invoices.statics.getAllByUser = function (user_id) {
    const tasks = this;
    return tasks.find({'user' : user_id}) . populate('user' , 'full_name');
};


Invoices.statics.getFromLastMonth = function (user_id) {
    const tasks = this;
    let today = new Date();
    return tasks.find({
        'user' : user_id ,
        'date':{ $gte: new Date(new Date(today.getTime() - (24*30 * 60 * 60 * 1000)))}});
};



Invoices.statics.editInvoice = function (id, updates) {
    const article = this;
    return article.findOneAndUpdate({_id: id},{
        $set: updates,
        new : true
    });
};

const invoices = mongoose.model('Invoices', Invoices);
module.exports = {invoices};
