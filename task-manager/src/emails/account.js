const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "akash@kurage.in",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. let me know how you get along with the app.`,
  });
};
const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "akash@kurage.in",
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};

//mongodb+srv://admin:4P6VOoWzFAZ8y1DZ@cluster0.ipog5.mongodb.net/test
