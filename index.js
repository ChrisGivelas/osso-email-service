"use strict";
const credentials = require("./credentials");

const express = require("express");

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport(credentials.transport);

const app = express();

app.use(express.json());

const emailRouter = express.Router();

emailRouter.post("/", async function(req, res) {
    console.log(req.body);

    const {name, email, subject, message} = req.body;

    const emailRes = await transporter
        .sendMail(
            credentials.getMailObject({
                name,
                email,
                subject,
                message
            })
        )
        .then(r => ({sent: true}))
        .catch(e => ({error: true}));

    console.log(emailRes);

    res.send(emailRes);
});

app.use("/email", emailRouter);

const PORT = process.env.PORT || 3210;

console.log("Starting server on port " + PORT + "...");
app.listen(PORT);
