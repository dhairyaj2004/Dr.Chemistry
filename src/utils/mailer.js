import nodemailer from "nodemailer";
import User from "../models/loginModel";
import bcryptjs from "bcryptjs";
async function sendEMail(email, emailType, userId) {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }
    const verifyForHTML = `<b>Click <a href='${
      process.env.DOMAIN
    }/verifyEmail?${hashedToken}'>here</a></b> to ${
      emailType == "VERIFY" ? "Verify your mail" : "Reset Password"
    }<br> `;
    const resetForHTML = `<b>Click <a href='${
      process.env.DOMAIN
    }/reset?${hashedToken}'>here</a></b> to ${
      emailType == "VERIFY" ? "Verify your mail" : "Reset Password"
    }<br> `;
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "2c72839ef8f319", //should be in env
        pass: "********fd8a", //should be in env
      },
    });
    const mailStruct = {
      from: "dhairyaj2004@gmail.com",
      to: email,
      subject: emailType == "VERIFY" ? "Verify your mail" : "Reset Password",
      html: verify, // html body
    };
    const mailResponse = await transport.sendMail(mailStruct);
    return mailResponse;
  } catch (error) {
    throw new Error(error.message);
  }
}
export default sendEMail;
