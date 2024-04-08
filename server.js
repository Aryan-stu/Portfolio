const express = require('express');
require("dotenv").config();
const dbConfig = require("./config/dbconfig");
const app = express();


const portfolioRoute = require("../Portfolio/routes/portfolioRoutes");
app.use(express.json());
app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;
const path = require("path");

if(process.env.NODE_ENV ==="production"){
    app.use(express.static(path.join(_dirname, "client/build")));
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"client/build/index.html"));
    });
}
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});