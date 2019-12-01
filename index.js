"use strict";
const config = require("./config");
const utils = require("./utils");

const express = require("express");
const cors = require("cors");

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport(config.transport);

const app = express();

const origins = (process.env.origins || "http://ossolighting.ca").split(',');

app.use(cors({origin: origins}));

const emailRouter = express.Router();

emailRouter.post("/", express.json(), async function(req, res) {
    console.log(req.body);
    console.log();

    const {name, email, subject, message} = req.body;

    const emailRes = await transporter
        .sendMail(
            utils.getMailObject({
                name,
                email,
                subject,
                message
            })
        )
        .then(r => {
            console.log(r);
            console.log();
            return {sent: true};
        })
        .catch(e => {
            console.log(e);
            console.log();
            return {error: true};
        });

    console.log(emailRes);
    console.log();

    res.send(emailRes);
});

app.use("/email", emailRouter);

const PORT = process.env.PORT || 3210;

console.log("Starting server on port " + PORT + "...");
app.listen(PORT);

console.log();
