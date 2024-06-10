const express = require('express');
var dotenv = require('dotenv');
const morgan = require('morgan');
const chalk = require('chalk')
var path = require('path');
var cors = require('cors');

const connectMongoDB = require('./src/config/database.config')
const handleError = require('./src/middlewares/handleError');
const verifyToken = require('./src/middlewares/verifyToken');
const handleResponse  = require('./src/middlewares/handleResponse');

const clientRoute = require('./src/route/ClientRoute');
const paymentRoute = require("./src/route/PaymentRoute");
const cardRoute = require("./src/route/CardRoute");
const userRoute = require("./src/route/UserRoute");
const authRoute = require("./src/route/AuthRoute");

var env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });
const port = process.env.PORT;



const app = express();
const customMorgan = (tokens, req, res) => {
    const time = chalk.yellow(tokens.date(req, res, 'clf'));
    const method = chalk.green(tokens.method(req, res));
    const url = chalk.green(tokens.url(req, res));
    const status = chalk.green(tokens.status(req, res));

    return `${time} Method:${method} Url:${url} status:${status} `;
};

app.use(morgan(customMorgan));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());

app.use("/auth",authRoute,handleResponse)
app.use("/client",verifyToken,clientRoute,handleResponse)
app.use("/payment",verifyToken,paymentRoute,handleResponse)
app.use("/user",verifyToken,userRoute,handleResponse)
app.use("/card",verifyToken,cardRoute,handleResponse)
app.use(handleError)

const start = async ()=>{
    try {
        await connectMongoDB(process.env.URL)
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (error) {
        console.log(error)
    }
}
start()

