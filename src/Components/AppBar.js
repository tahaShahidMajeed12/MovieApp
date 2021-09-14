import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import headerLogo from "../images/headerLogo.png";
import { Tab, Tabs } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  GetUpcomingMoviesAction,
  GetTrendingMoviesAction,
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
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <Tabs style={{ display: "inline" }}>
          <Tab
            label="UPCOMMING"
            style={{ color: "#fff", fontWeight: "bold" }}
            onClick={() => dispatch(GetUpcomingMoviesAction())}
          />
          <Tab
            label="TREDING"
            style={{ color: "#fff", fontWeight: "bold" }}
            onClick={() => dispatch(GetTrendingMoviesAction())}
          />
          <Tab label="TV SHOWS" style={{ color: "#fff", fontWeight: "bold" }} />
          <Tab label="PEOPLE" style={{ color: "#fff", fontWeight: "bold" }} />
        </Tabs>
      </AppBar>
    </div>
  );
}
