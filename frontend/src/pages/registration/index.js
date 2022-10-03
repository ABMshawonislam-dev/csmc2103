import React, { useState } from "react";
import "./registration.css";
import {
  Button,
  Container,
  Grid,
  TextField,
  Alert,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { ImCross, ImCheckmark } from "react-icons/im";
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
const Registration = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [lowercase, setLowercase] = useState(false);
  let [uppercase, setUppercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbol, setSymbol] = useState(false);
  let [length, setLength] = useState(false);
  let [year, setYear] = useState(new Date().getFullYear());
  let [selectyear, setSelectyear] = useState("");
  let [selectmonth, setSelectMonth] = useState("");
  let [selectday, setSelectDay] = useState("");

  const [age, setAge] = React.useState("");

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };

  const handleChange = (event) => {
    setAge(event.target.value);
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

  let handleSubmit = () => {
    if (!email) {
      setEmailerr("Email is required");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailerr("Valid email is required");
      }
    }

    if (!password) {
      setPassworderr("Password is required");
    } else if (!/^(?=.*[a-z])/.test(password)) {
      setPassworderr("Lowercase Required");
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      setPassworderr("Uppercase Required");
    } else if (!/^(?=.*[0-9])/.test(password)) {
      setPassworderr("Number Required");
    } else if (!/^(?=.*[!@#$%^&*])/.test(password)) {
      setPassworderr("Symbol Required");
    } else if (!/^(?=.{8,})/.test(password)) {
      setPassworderr("Minimum 8 character");
    }
  };

  let years = Array.from(new Array(60), (val, index) => year - index);
  let months = Array.from(new Array(12), (val, index) => 1 + index);
  let dates = Array.from(
    new Array(new Date(year, selectmonth, 0).getDate()),
    (val, index) => 1 + index
  );

  let handleYearChange = (e) => {
    setSelectyear(e.target.value);
  };

  let handleMonthChange = (e) => {
    setSelectMonth(e.target.value);
  };

  let handleDayChange = (e) => {
    setSelectDay(e.target.value);
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
              label="First Name"
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
              label="Last Name"
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
            <p style={{ marginTop: "30px" }}>Date of birth:</p>
            <div className="dateofbirth">
              <Box style={{ width: "133px" }}>
                <FormControl style={{ width: "133px" }}>
                  <InputLabel
                    style={{ width: "133px" }}
                    id="demo-simple-select-label"
                  >
                    Day
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectday}
                    label="Age"
                    onChange={handleDayChange}
                    style={{ width: "133px" }}
                  >
                    {dates.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box style={{ width: "133px" }}>
                <FormControl style={{ width: "133px" }}>
                  <InputLabel
                    style={{ width: "133px" }}
                    id="demo-simple-select-label"
                  >
                    Month
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectmonth}
                    label="Age"
                    onChange={handleMonthChange}
                    style={{ width: "133px" }}
                  >
                    {months.map((item) => (
                      <MenuItem value={item}>
                        {item == 1 && "January"}
                        {item == 2 && "February"}
                        {item == 3 && "March"}
                        {item == 4 && "April"}
                        {item == 5 && "May"}
                        {item == 6 && "June"}
                        {item == 7 && "July"}
                        {item == 8 && "August"}
                        {item == 9 && "Septembar"}
                        {item == 10 && "Octobar"}
                        {item == 11 && "Novembar"}
                        {item == 12 && "Decembar"}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box style={{ width: "133px" }}>
                <FormControl style={{ width: "133px" }}>
                  <InputLabel
                    style={{ width: "133px" }}
                    id="demo-simple-select-label"
                  >
                    Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectyear}
                    label="Year"
                    onChange={handleYearChange}
                    style={{ width: "133px" }}
                  >
                    {years.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>

            <LoginButton onClick={handleSubmit}>Log In</LoginButton>
            <Link to="/" className="forgot">
              Forgotten password?
            </Link>
            <div className="line"></div>
            <div className="regbutton">
              <RegistrationButton>Already Have ?</RegistrationButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Registration;
