import { makeStyles } from "@material-ui/core";
import cartoon from "../images/cartoon.jpg";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#031d33",

    color: "#fff",
    maxwidth: "99%",
    width: "99vw",
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    padding: 20,
    position: "relative",
    left: 0,
    bottom: 0,
    right: 0,
    marginTop: 100,
  },
  FooterImage: {},
  footerListText: {
    fontSize: 40,
  },
});

export const App_Bar = makeStyles((theme) => ({
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
  tabDesign: {
    color: "#fff",
    fontWeight: "bold",
  },
}));

export const Card_Item = makeStyles({
  root: {
    minWidth: 150,
    margin: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  CardName: { textAlign: "center", color: "#bf9b30" },
  body: {
    textAlign: "center",
  },
});

export const Search_Box = {
  parent: {
    backgroundImage: `url(${cartoon} )`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "30vw",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "flex-end",
    paddingBottom: 20,
  },
  btn: {
    background: "#6c74cc",
    borderRadius: 3,
    border: 0,
    color: "white",
    padding: "0 30px",
    width: 100,
    height: 55,
  },
  txtField: { backgroundColor: "#fff", width: "80%" },
};

export default useStyles;
