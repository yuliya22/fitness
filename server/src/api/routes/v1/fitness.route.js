const express = require('express');
const httpStatus = require('http-status');
const { http } = require('../../../config/logger');
const router = express.Router();
const controller = require('../../controllers/fitness.controller');



router.route('/register')
  .post(controller.saveRegister);

router.route('/payment')
  .post(controller.payment);

// success page 
router.get('/success' , (req ,res ) => {
  console.log('req.query'); 
  console.log(req.query); 
  // res.redirect(httpStatus.OK).json('ok')
  res.redirect('http://localhost:4200/signUp'); 
})

// error page 
router.get('/err' , (req , res) => {
  console.log('req.query'); 
  console.log(req.query); 
  res.status(httpStatus.OK).json('ok')
  // res.redirect('/err.html'); 
})

module.exports = router;
