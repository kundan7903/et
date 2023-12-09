// const nodemailer = require("nodemailer")

// const mailSender = async (email, title, body) => {
//   try {
//     let transporter = nodemailer.createTransport({
//       host: process.env.MAIL_HOST,
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     })

//     let info = await transporter.sendMail({
//       from: `"Studynotion | CodeHelp" <${process.env.MAIL_USER}>`, // sender address
//       to: `${email}`, // list of receivers
//       subject: `${title}`, // Subject line
//       html: `${body}`, // html body
//     })
//     console.log("kundankumar")
//     console.log(info.response)
//     return info
//   } catch (error) {
//     console.log(error.message)
//     console.log("kundankumarerror")
//     return error.message
//   }
// }

// module.exports = mailSender



const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Send the email
    let info = await transporter.sendMail({
      from: `"Studynotion | CodeHelp" <${process.env.MAIL_USER}>`,
      to: email, // Use the email variable directly
      subject: title,
      html: body,
    });

    // Log success message and response
    console.log("kundan:", info.response);
    return info;
  } catch (error) {
    // Log error message
    console.log("kundanweerror:", error.message);
    return error.message;
  }
};

module.exports = mailSender;
