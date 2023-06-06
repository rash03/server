const fs = require('fs');
const express = require('express');

const router = express.Router();
const responseContent = fs.readFileSync('./apis/response/customerslist.json', 'utf8');
const response = JSON.parse(responseContent);

router.get('/api/v1/customers', (req, res) => {
  const custid = req.query.id;
  res.setHeader("Access-Control-Allow-Origin","*")
  if (custid && custid !== "" && custid.includes('1')) {
    res.json(["customer1"]);
  }else if (custid && custid !== "" && custid.includes('2')) {
    res.json(["customer2"]);
  }else if (custid && custid !== "" && custid.includes('3')) {
    res.json(["customer3"]);
  }else {
  res.json(response);
  }
});

module.exports = router;
