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
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
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
const Registration = () => {
  let [email, setEmail] = useState("");
  let [firstname, setFirstname] = useState("");
  let [firstnameerr, setFirstnameerr] = useState("");
  let [lastname, setLastname] = useState("");
  let [lastnameerr, setLastnameerr] = useState("");
  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [year, setYear] = useState(new Date().getFullYear());
  let [selectyear, setSelectyear] = useState("");
  let [selectmonth, setSelectMonth] = useState("");
  let [selectday, setSelectDay] = useState("");
  let [dateofbirtherr, setDateofbirtherr] = useState("");
  let [gender, setGender] = useState("");
  let [gendererr, setGendererr] = useState("");
  let [lowercase, setLowercase] = useState(false);
  let [uppercase, setUppercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbol, setSymbol] = useState(false);
  let [length, setLength] = useState(false);

  const [age, setAge] = useState("");
  const [berr, setBerr] = useState("");
  const [success, setSuccess] = useState("");

  let handleFirstname = (e) => {
    setFirstname(e.target.value);
    setFirstnameerr("");
  };
  let handleLastname = (e) => {
    setLastname(e.target.value);
    setLastnameerr("");
  };

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
      let data = await axios.post("http://localhost:8000/register", {
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password,
        gender: gender,
        bYear: selectyear,
        bMonth: selectmonth,
        bDay: selectday,
      });
      console.log(data.data);
      setSuccess(data.data.message);
    } catch (error) {
      setBerr(error.response.data.message);
    }
  };

  let years = Array.from(new Array(60), (val, index) => year - index);
  let months = Array.from(new Array(12), (val, index) => 1 + index);
  let dates = Array.from(
    new Array(new Date(selectyear, selectmonth, 0).getDate()),
    (val, index) => 1 + index
  );

  let handleYearChange = (e) => {
    setSelectyear(e.target.value);
    setDateofbirtherr("");
  };

  let handleMonthChange = (e) => {
    setSelectMonth(e.target.value);
    setDateofbirtherr("");
  };

  let handleDayChange = (e) => {
    setSelectDay(e.target.value);
    setDateofbirtherr("");
  };

  let handleGender = (gender) => {
    setGender(gender);
    setGendererr("");
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
              onChange={handleFirstname}
            />
            {firstnameerr && (
              <Alert
                style={{ marginBottom: "10px" }}
                variant="filled"
                severity="error"
              >
                {firstnameerr}
              </Alert>
            )}
            <CssTextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              onChange={handleLastname}
            />
            {lastnameerr && (
              <Alert
                style={{ marginBottom: "10px" }}
                variant="filled"
                severity="error"
              >
                {lastnameerr}
              </Alert>
            )}
            <CssTextField
              type="email"
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
            {dateofbirtherr && (
              <Alert
                style={{ margin: "10px 0" }}
                variant="filled"
                severity="error"
              >
                {dateofbirtherr}
              </Alert>
            )}
            <p style={{ marginTop: "30px" }}>Gender:</p>
            <div className="genderbox">
              <label className="genderselect">
                <span>Male</span>
                <input
                  onChange={() => handleGender("male")}
                  type="radio"
                  name="gender"
                />
              </label>
              <label className="genderselect">
                <span>Female</span>
                <input
                  onChange={() => handleGender("female")}
                  type="radio"
                  name="gender"
                />
              </label>
              <label className="genderselect">
                <span>Custom</span>
                <input
                  onChange={() => handleGender("custom")}
                  type="radio"
                  name="gender"
                />
              </label>
            </div>
            {gendererr && (
              <Alert
                style={{ marginBottom: "10px" }}
                variant="filled"
                severity="error"
              >
                {gendererr}
              </Alert>
            )}
            <LoginButton onClick={handleSubmit}>Sign Up</LoginButton>
            {berr && (
              <Alert
                style={{ margin: "10px 0" }}
                variant="filled"
                severity="error"
              >
                {berr}
              </Alert>
            )}
            {success && (
              <Alert
                style={{ margin: "10px 0" }}
                variant="filled"
                severity="success"
              >
                {success}
              </Alert>
            )}

            <div className="line"></div>
            <Link to="/login">
              <div className="regbutton">
                <RegistrationButton>Already Have ?</RegistrationButton>
              </div>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Registration;
