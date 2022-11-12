import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import Newsfeed from "../../components/newsfeed/Newsfeed";
const Newsfeedpage = () => {
  let navigate = useNavigate();
  let user = useSelector((state) => state);
  console.log(user.user.userInfo);

  useEffect(() => {
    if (!user.user.userInfo) {
      navigate("/login");
    }
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={8}>
        <Newsfeed isnewsfeed="true" />
      </Grid>
      <Grid item xs={1}>
        <h1>xs=8</h1>
      </Grid>
    </Grid>
  );
};

export default Newsfeedpage;
