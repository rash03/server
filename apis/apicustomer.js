const fs = require('fs');
const express = require('express');

const router = express.Router();
const customer1Content = fs.readFileSync('./apis/response/customers1.json', 'utf8');
const customer1response = JSON.parse(customer1Content);

const customer2Content = fs.readFileSync('./apis/response/customers2.json', 'utf8');
const customer2response = JSON.parse(customer1Content);

const customer3Content = fs.readFileSync('./apis/response/customers3.json', 'utf8');
const customer3response = JSON.parse(customer1Content);

router.get('/api/v1/customer/:name', (req, res) => {
    const { name } = req.params; 
  res.setHeader("Access-Control-Allow-Origin","*")
  if (name === "customer1") {
    setTimeout(() => {
      res.json(customer1response);
    }, 1500); // 
  }
  
  if (name === "customer2") {
    res.json(customer2response);
  }
  if (name === "customer3") {
    res.json(customer3response);
  }
});

module.exports = router;
