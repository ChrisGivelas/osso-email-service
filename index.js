"use strict";
const nodemailer = require("nodemailer");
const credentials = require("./credentials");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(credentials.transport);

    await transporter.sendMail(
        credentials.getMailObject({
            name: "Fred Foo",
            email: "foo@example.com",
            subject: "Hello",
            message: "Hello world?"
        })
    );
}

main().catch(console.error);
