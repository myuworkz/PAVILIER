require("dotenv").config();

const nodemailer = require("nodemailer");

exports.handler = function (event, context, callback) {
  const { name, email, message } = JSON.parse(event.body).payload.data;

  //OAuth
  const auth = {
    type: "OAuth2",
    user: process.env.OAUTH_USER,
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  };

  //transport
  const transport = {
    service: "gmail",
    auth: auth,
  };

  let transporter = nodemailer.createTransport(transport);

  const url = "";

  let mailOptions = {
    from: "",
    to: `${email}`,
    subject: "",
    text: "",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      callback(error);
    } else {
      callback(null, {
        statusCode: 200,
        body: "ok",
      });
    }
  });
};
