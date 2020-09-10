import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import logo from "../images/spaceX-icon.png";
import "../containers/Login/Login.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class Appheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logOut = () => {
    localStorage.removeItem("LoggedIn_User");
    this.props.history.push("/");
  };
  render() {
    const { classes } = this.props;
    const LoggedIn_User = localStorage.getItem("LoggedIn_User");

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <img src={logo} className="app-icon"></img>
            <Typography variant="h6" className={classes.title}></Typography>
            {LoggedIn_User !== null ? (
              <Button
                style={{ width: "auto" }}
                color="inherit"
                onClick={() => this.logOut()}
              >
                {" "}
                <i
                  className="fa fa-user-circle-o"
                  style={{ padding: "0px 10px" }}
                ></i>
                {LoggedIn_User === "Admin" ? "Admin Logout" : "Guest Logout"}
              </Button>
            ) : null}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(useStyles)(Appheader);
// export default Appheader;
