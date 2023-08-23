const express = require('express');

const Razorpay = require("razorpay");
 const instance = new Razorpay({
    key_id: 'rzp_live_OzzgMMhXl5Q7Zw',
    key_secret:'RiXwrhfztXiSWEBquNJbO3Iv',
  });
module.exports=instance;
