const nodemailer = require('nodemailer')
const express = require('express');
const router = express.Router();
const multer = require('multer');
var path = require('path')


exports.nodemailerSignIn = async (req, res) => {
    const output = `
    <p style="font-size: 16px">Регистрация</p>
    <h3 style="font-size: 24px;">Регистрация подтверждена</h3>
    <p style="font-size: 16px">Данные для входа</p>

    <ul>
      <li style="font-size: 18px; list-style: none">Email: ${req.body.email}</li>   
      <li style="font-size: 18px; list-style: none">Token: ${req.body.token}</li>   
      <a style="font-size: 16px; list-style: none" href="http://localhost:8000/login/${req.body.token}">Enter the website</a>   
    </ul>
  `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'touchitworking@gmail.com', // generated ethereal user
            pass: 'xymletdnizoezehh'  // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });


    // setup email data with unicode symbols
    let mailOptions = {
        from: `touchitworking@gmail.com`,
        // from: 'sergejjolejj@gmail.com', // sender address
        to: `${req.body.email}`, // list of receivers
        subject: 'Регистрация успешна', // Subject line
        text: 'Hello world?', // plain text body
        html: output, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // res.render('login', {msg:'Email has been sent'});
    });
}
