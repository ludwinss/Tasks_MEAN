const mongoose = require("mongoose");

const URI = "mongodb://localhost/mean-stack";
mongoose
  .connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((data) => console.log("Successfull Database Connection"))
  .catch((err) => console.error(err));

module.exports = mongoose;
