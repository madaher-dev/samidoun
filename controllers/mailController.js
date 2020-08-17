var nodemailer = require('nodemailer');

//const catchAsync = require('../utils/catchAsync');

exports.contact = (req, res, next) => {
  var transport = {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  };

  var transporter = nodemailer.createTransport(transport);

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: 'daher@butula.net',
    to: process.env.CONTACT_EMAIL,
    subject: 'New Message from Contact Form',
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.status(500).json({
        status: 'fail',
        error: err,
      });
    } else {
      res.status(200).json({
        status: 'success',
      });
    }
  });
};
