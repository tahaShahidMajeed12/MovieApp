import { Grid, List, ListItemText, Button } from "@material-ui/core";
import useStyles from "../styles/styleSheet";
import footerlogo from "../images/FooterLogo.png";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        width="100%"
        style={{ margin: 20 }}
      >
        <Grid item lg={2} xs={12} sm={12} xl={2}>
          <center>
            <img
              src={footerlogo}
              className={classes.FooterImage}
              alt="meow"
              width={100}
              height={140}
            />
            <br />
            <Button
              style={{
                color: "darkblue",
                borderColor: "#fff",
                backgroundColor: "#fff",
              }}
            >
              Join Community
            </Button>
          </center>
        </Grid>
        <Grid item lg={2} xs={6} sm={3} xl={2}>
          <List dense={"dense"}>
            <ListItemText>
              <h3>About TMDB</h3>
            </ListItemText>
            <ListItemText>About TMDB</ListItemText>
            <ListItemText>Contact Us</ListItemText>
            <ListItemText>Support Forums</ListItemText>
            <ListItemText>API</ListItemText>
            <ListItemText>System Status</ListItemText>
          </List>
        </Grid>
        <Grid item lg={2} xs={6} sm={3} xl={2}>
          <List dense={"dense"}>
            <ListItemText>
              <h3>About TMDB</h3>
            </ListItemText>
            <ListItemText>About TMDB</ListItemText>
            <ListItemText>Contact Us</ListItemText>
            <ListItemText>Support Forums</ListItemText>
            <ListItemText>API</ListItemText>
            <ListItemText>System Status</ListItemText>
          </List>
        </Grid>
        <Grid item lg={2} xs={6} sm={3} xl={2}>
          <List dense={"dense"}>
            <ListItemText>
              <h3>About TMDB</h3>
            </ListItemText>
            <ListItemText>About TMDB</ListItemText>
            <ListItemText>Contact Us</ListItemText>
            <ListItemText>Support Forums</ListItemText>
            <ListItemText>API</ListItemText>
            <ListItemText>System Status</ListItemText>
          </List>
        </Grid>
        <Grid item lg={2} xs={6} sm={3} xl={2}>
          <List dense={"dense"}>
            <ListItemText>
              <h3>About TMDB</h3>
            </ListItemText>

            <ListItemText>About TMDB</ListItemText>
            <ListItemText>Contact Us</ListItemText>
            <ListItemText>Support Forums</ListItemText>
            <ListItemText>API</ListItemText>
            <ListItemText>System Status</ListItemText>
          </List>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
