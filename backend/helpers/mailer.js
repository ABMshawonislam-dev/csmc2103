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
    html: ``,
  };

  stmp.sendMail(mailOption, (err, res) => {
    if (err) return err;
    return res;
  });
};
