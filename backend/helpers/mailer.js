const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const oauth_link = "https://developers.google.com/oauthplayground";

const { EMAIL, MAILING_ID, MAILING_SECRET, MAILING_REFRESH } = process.env;

const auth = new OAuth2(
  MAILING_ID,
  MAILING_SECRET,
  MAILING_REFRESH,
  oauth_link
);

exports.sendEmailVerification = (email, name, url) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  });
  const accessToken = auth.getAccessToken();

  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });
  const mailOption = {
    from: EMAIL,
    to: email,
    subject: "CIT Social Media Verification",
    html: `<div style="width: 800px; margin: 0 auto"> <div style=" display: flex; align-items: center; justify-content: space-between; width: 600px; margin: 0 auto; border-bottom: 1px solid #ddd; " > <h3 style="color: blue; font-size: 40px">Facebook</h3> <p style="color: #333; font-size: 18px"> Action Required: Confirm Your Social Media Account </p> </div> <div> <h4 style="font-size: 30px">Hello ${name}</h4> <p style="font-size: 20px"> You recently have registerd for Facebook. To complete your facebook registration please confirm your account. </p> <a style=" text-decoration: none; padding: 20px 15px; background-color: rgb(69, 158, 246); color: #fff; border-radius: 5px; margin-top: 15px; display: inline-block; " href=${url} >Confirm Your Account</a > <span style="display: block; margin-top: 8px; color: gray" >facebook helps you to communicate and stay in touch with all of your friends. Once you join Facebook you'll be able to share photos,plan events,and more.</span > </div> </div>`,
  };

  stmp.sendMail(mailOption, (err, res) => {
    if (err) return err;
    return res;
  });
};
