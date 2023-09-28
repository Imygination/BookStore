var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "66900f13b34fb2",
    pass: "69b2d1467cd425"
  }
});

module.exports = transport
