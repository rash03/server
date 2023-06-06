const express = require('express');
const mockApiRouter = require('./apis/apicustomers');
const apicustomer = require('./apis/apicustomer');

const app = express();
const port = 3000;

app.use(mockApiRouter);
app.use(apicustomer)

app.listen(port, () => {
  console.log(`Mock server is running on http://localhost:${port}`);
});
