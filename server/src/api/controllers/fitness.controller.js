const httpStatus = require('http-status');
//const {PayU, Currency}  = require('@ingameltd/payu');
const APIError = require('../utils/APIError');
const { smsConfig, paymentConfig, culqiConfing } = require('../../config/vars');
const client = require('twilio')(smsConfig.Sid, smsConfig.authToken);
const path = require('path');
const Visitor = require('../models/visitor.model');


const { date } = require('joi');
const { env, emailConfig } = require('../../config/vars');
var mime = require('mime');
var fs = require('fs');
var paypal = require('paypal-rest-sdk');
var opn=require('opn');


exports.saveRegister = async (req, res) => {
  try {
    const visitor = await new Visitor(req.body).save();
    res.status(httpStatus.CREATED).json(visitor);
  } catch (e) {
    return new APIError(e)
  }
};

exports.payment = async (req, res) => {
  try {
    console.log('req.body')
    console.log(req.body)

    paypal.configure({
      'mode': 'sandbox', //sandbox or live 
      'client_id': process.env.CLIENT_ID, // please provide your client id here 
      'client_secret': process.env.CLIENT_SECRET // provide your client secret here 
    });
    // create payment object 
    var payment = {
      "intent": "authorize",
      "payer": {
        "payment_method": "paypal"
      },
      "redirect_urls": {
        "return_url": "http://localhost:3000/api/v1/fitness/success",
        "cancel_url": "http://localhost:3000/api/v1/fitness/err"
      },
      "transactions": [{
        "amount": {
          "total": req.body.val,
          "currency": "USD"
        },
        "description": " a book on mean stack "
      }]
    }


    // call the create Pay method 
    createPay(payment)
      .then((transaction) => {
        var id = transaction.id;
        var links = transaction.links;
        var counter = links.length;
        while (counter--) {
          if (links[counter].method == 'REDIRECT') {
            console.log('links[counter].href')
            console.log(links[counter].href)
            // redirect to paypal where user approves the transaction 
            opn(links[counter].href,{app:"chrome"})
            return;
            // return res.redirect(links[counter].href)
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (e) {
    return new APIError(e)
  }
};

var createPay = (payment) => {
  return new Promise((resolve, reject) => {
    paypal.payment.create(payment, function (err, payment) {
      if (err) {
        reject(err);
      }
      else {
        resolve(payment);
      }
    });
  });
}


