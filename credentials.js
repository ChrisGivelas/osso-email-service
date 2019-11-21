module.exports = {
    transport: {
        host: process.env.emailHost,
        port: 465,
        secure: true,
        tls: {
            rejectUnauthorized: false
        }
    },
    getMailObject: ({name, email, subject, message}) => {
        return {
            from: `${name} <${email}>`,
            to: process.env.defaultTo,
            text: message,
            subject,
            html: `
                <h3>From: ${name} <a href="mailto:${email}">(${email})</a></h3>
                <h3>Subject: ${subject}</h3>
                <h3>Body:</h3>
                <p>${message}</p>
              `
        };
    }
};
