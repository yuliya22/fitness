const express = require('express');
const httpStatus = require('http-status');
const { http } = require('../../../config/logger');
const router = express.Router();
const controller = require('../../controllers/fitness.controller');

var paypal = require('paypal-rest-sdk');


router.route('/register')
  .post(controller.saveRegister);

router.route('/payment')
  .post(controller.payment);

// success page 
router.get('/success' , (req ,res ) => {
  console.log('req.query'); 
  console.log(req.query); 
  var paymentId = req.query.paymentId;
  var payerId = { 'payer_id': req.query.PayerID };

  paypal.payment.execute(paymentId, payerId, function(error, payment){
      if(error){
          console.error(error);
      } else {
          if (payment.state == 'approved'){ 
            res.redirect('http://localhost:4200/signUp'); 
          } else {
              res.send('payment not successful');
          }
      }
  });
  // res.redirect(httpStatus.OK).json('ok')
})

// error page 
router.get('/err' , (req , res) => {
  console.log('req.query'); 
  console.log(req.query); 
  res.status(httpStatus.OK).json('ok')
  // res.redirect('/err.html'); 
})

module.exports = router;
