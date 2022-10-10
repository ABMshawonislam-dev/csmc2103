import React, { useState } from "react";
import "./login.css";
import {
  Button,
  Container,
  Grid,
  TextField,
  Alert,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { ImCross, ImCheckmark } from "react-icons/im";
import axios from "axios";
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
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [lowercase, setLowercase] = useState(false);
  let [uppercase, setUppercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbol, setSymbol] = useState(false);
  let [length, setLength] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
    if (!/^(?=.*[a-z])/.test(password)) {
      setPassworderr("Lowercase Required");
      setLowercase(false);
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      setPassworderr("Uppercase Required");
      setUppercase(false);
      setLowercase(true);
    } else if (!/^(?=.*[0-9])/.test(password)) {
      setPassworderr("Number Required");
      setNumber(false);
      setUppercase(true);
    } else if (!/^(?=.*[!@#$%^&*])/.test(password)) {
      setPassworderr("Symbol Required");
      setSymbol(false);
      setNumber(true);
    } else if (!/^(?=.{8,})/.test(password)) {
      setPassworderr("Minimum 8 character");
      setLength(false);
      setSymbol(true);
    } else {
      setLength(true);
    }
  };

  let handleSubmit = async () => {
    try {
      let data = await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      });
      console.log(data.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

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
              onChange={handleEmail}
            />
            {emailerr && (
              <Alert
                style={{ marginBottom: "10px" }}
                variant="filled"
                severity="error"
              >
                {emailerr}
              </Alert>
            )}
            <CssTextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              onChange={handlePassword}
            />
            {passworderr && (
              <Alert
                style={{ marginBottom: "10px" }}
                variant="filled"
                severity="error"
              >
                {passworderr}
              </Alert>
            )}

            <LoginButton onClick={handleSubmit}>Log In</LoginButton>
            <Link to="/" className="forgot">
              Forgotten password?
            </Link>
            <div className="line"></div>
            <Link to="/registration">
              <div className="regbutton">
                <RegistrationButton>Create New Account</RegistrationButton>
              </div>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
