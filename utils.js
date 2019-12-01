module.exports = {
    getMailObject: ({name, email, subject, message}) => {
        return {
            from: email,
            to: process.env.defaultTo,
            subject,
            html: `
                <p style="width: 400px; overflow-wrap: break-word;">From: <b>${name}</b> <a href="mailto:${email}">(${email})</a></p>
                <p style="width: 400px; overflow-wrap: break-word;">Subject: <b>${subject}</b></p>
                <p>======================</p>
                <p style="width: 400px; overflow-wrap: break-word;">${message}</p>
              `
        };
    }
};
