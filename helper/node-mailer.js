var nodemailer = require('nodemailer');

function mailer(email){
    
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tester.agha@gmail.com',
    pass: 'passwordtester'
  }
});

var mailOptions = {
  from: 'tester.agha@gmail.com',
  to: `${email}`,
  subject: 'welcome',
  text: 'Welcome to our store'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})
}

module.exports= mailer