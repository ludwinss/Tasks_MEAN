const  express  = require("express");
const morgan = require("morgan");

//initialization
const app = express();
require("./database")

//settings
app.set("port", process.env.PORT || 3333);

//middelwares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan("dev"));

//routes
app.use('/api/employees',require("./routes/employees.route"))

module.exports = app;
