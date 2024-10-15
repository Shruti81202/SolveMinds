require('dotenv').config();
const express = require("express")
const app = express();
const cors = require("cors");
const router = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');


const corsOptions = {
    origin:"http://localhost:5173",
    methods:"GET, PUT, POST, DELETE, PATCH, HEAD",
    credentials:true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", router);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);
app.use(errorMiddleware);

const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})

connectDb ().then(()=>{
app.listen(PORT, ()=>{
    console.log(`server is running on PORT : ${PORT}`);
});
});