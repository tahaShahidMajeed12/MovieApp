import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import headerLogo from "../images/headerLogo.png";
import { Tab, Tabs } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  getUpcomingMoviesAction,
  getTrendingMoviesAction,
  getTvShowsAction,
  getPeopleAction,
} from "../Store/actions/movieAction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
    backgroundColor: "#031d33",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const [tabValue, setTabValue] = useState(1);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#031d33" }}>
        <Toolbar>
          <img
            src={headerLogo}
            alt="meow"
            width={150}
            height={50}
            style={{ padding: 10 }}
          />
        </Toolbar>
        <Tabs style={{ display: "inline" }} value={tabValue}>
          <Tab
            label="UPCOMMING"
            style={{ color: "#fff", fontWeight: "bold" }}
            onClick={() => {
              dispatch(getUpcomingMoviesAction());
              setTabValue(1);
            }}
            value={1}
          />
          <Tab
            label="TREDING"
            style={{ color: "#fff", fontWeight: "bold" }}
            onClick={() => {
              dispatch(getTrendingMoviesAction());
              setTabValue(2);
            }}
            value={2}
          />
          <Tab
            label="TV SHOWS"
            style={{ color: "#fff", fontWeight: "bold" }}
            onClick={() => {
              dispatch(getTvShowsAction());
              setTabValue(3);
            }}
            value={3}
          />
          <Tab
            label="PEOPLE"
            style={{ color: "#fff", fontWeight: "bold" }}
            onClick={() => {
              dispatch(getPeopleAction());
              setTabValue(4);
            }}
            value={4}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
