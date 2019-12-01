module.exports = {
    transport: {
        host: process.env.emailHost,
        port: 465,
        secure: true,
        auth: {
            user: process.env.username,
            pass: process.env.pass
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    }
};
