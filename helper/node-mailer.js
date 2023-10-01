var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "96a5d158773cd3",
    pass: "164811a112836f"
  }
});

module.exports = transport
