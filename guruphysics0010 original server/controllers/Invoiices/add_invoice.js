const _ = require('lodash');
const {USER_NOT_FOUND} = require('../common/error_codes');
const {RENDER_BAD_REQUEST} = require('../common/utils');
const {User} = require('../../models/user');
const {invoices} = require('../../models/invoices');

const article = async (req, res) => {
    try {
        let resp;
        const token = req.header('x-sh-auth');
        const user = await User.findByToken(token);
        if (!user) {
            res.status(400).json(USER_NOT_FOUND);
        }

        console.log('app reached');
        if(user.admin_access == true){

            const body = _.pick(req.body, ['client_id' , "invoice_name" , "amount" , "currency" , "transaction" , 'payment_method']);

            const invoice = new invoices({
                user: body.client_id,
                invoice_name: body.invoice_name,
                amount: body.amount,
                date : Date.now(),
                currency: body.currency,
                transaction : body.transaction,
                payment_method: body.payment_method
            });

            await invoice.save();

            resp = {
                code: 200,
                message : 'Successfully Added',
                invoice: invoice
            };

        }

        else {
            resp = {
                code: 400,
                message : 'You are not an admin'
            };
        }

        res.json(resp);
    }

    catch (e) {
        RENDER_BAD_REQUEST(res, e);
    }
};

module.exports = article;