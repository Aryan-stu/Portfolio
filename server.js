const express = require('express');
require("dotenv").config();
const dbConfig = require("./config/dbconfig");
const app = express();


const portfolioRoute = require("../Portfolio/routes/portfolioRoutes");
app.use(express.json());
app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
