import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import headerLogo from "../../images/headerLogo.png";
import { Tab, Tabs } from "@material-ui/core";

import { App_Bar } from "../../styles/styleSheet";

export default function NavBar(props) {
  const [tabValue, setTabValue] = useState(1);

  const classes = App_Bar;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img
            src={headerLogo}
            alt="meow"
            width={150}
            height={50}
            style={{ padding: 10 }}
          />
        </Toolbar>
        <Tabs className={classes.tab} value={tabValue}>
          <Tab
            label="UPCOMMING"
            style={classes.tabDesign}
            onClick={() => {
              props.dispatchUpcomingMovie();
              setTabValue(1);
            }}
            value={1}
          />
          <Tab
            label="TREDING"
            style={classes.tabDesign}
            onClick={() => {
              props.dispatchTrendingMovie();
              setTabValue(2);
            }}
            value={2}
          />
          <Tab
            label="TV SHOWS"
            style={classes.tabDesign}
            onClick={() => {
              props.dispatchTvShow();
              setTabValue(3);
            }}
            value={3}
          />
          <Tab
            label="PEOPLE"
            style={classes.tabDesign}
            onClick={() => {
              props.dispatchPeople();
              setTabValue(4);
            }}
            value={4}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
