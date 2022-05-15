const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
const router = require("./routes/index");
app.use(cors());
app.use(router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
