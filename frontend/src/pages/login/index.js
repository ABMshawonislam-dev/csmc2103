import React from "react";
import "./login.css";
import { Button, Container, Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
const LoginButton = styled(Button)({
  backgroundColor: "#166FE5",
  color: "#fff",
  width: "100%",
  padding: "15px 0",
  fontFamily: "Poppins",
  fontSize: 20,
  fontWeight: 700,
  "&:hover": {
    backgroundColor: "#166FE5",
  },
});
const RegistrationButton = styled(Button)({
  backgroundColor: "#36A420",
  color: "#fff",
  padding: "15px 32px",
  fontFamily: "Poppins",
  fontSize: 20,
  fontWeight: 700,
  "&:hover": {
    backgroundColor: "#36A420",
  },
  ["@media (min-width:375px) and (max-width: 599px)"]: {
    padding: "15px 22px",
  },
});
const CssTextField = styled(TextField)({
  width: "100%",
  marginBottom: 15,
});
const Login = () => {
  return (
    <Container fixed className="login">
      <Grid container spacing={2}>
        <Grid item sm={5} lg={5}>
          <div className="imgbox">
            <img src="icons/facebook.svg" />
            <p>
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
        </Grid>
        <Grid item sm={7} lg={7}>
          <div className="box">
            <CssTextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
            <CssTextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
            />
            <LoginButton>Log In</LoginButton>
            <Link to="/" className="forgot">
              Forgotten password?
            </Link>
            <div className="line"></div>
            <div className="regbutton">
              <RegistrationButton>Create New Account</RegistrationButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
