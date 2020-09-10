import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { green } from "@material-ui/core/colors";
import { MDBContainer, MDBInput } from "mdbreact";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { allLaunch } from "../containers/GuestPage/GuestAction";
import { allEvents } from "../containers/AdminPage/AdminAction";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Guest",
      radio: "Guest",
    };
  }
  handleChange = (user) => {
    this.setState({
      radio: user,
    });
  };
  userLogin = () => {
    this.setState({ user: this.state.radio });
    localStorage.setItem("LoggedIn_User", this.state.radio);
    let LoggedIn_User = localStorage.getItem("LoggedIn_User");

    if (LoggedIn_User === "Admin") {
      this.props.history.push("/Admin/allEvents");
      this.props.getAllEventsAPI();
    } else {
      this.props.history.push("/Guest/allLaunches");
      this.props.getAllLaunchesAPI();
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="login-panel">
          <Card style={{ width: "18rem" }} className="login-body">
            <Card.Body>
              <Card.Title>LOGIN AS</Card.Title>
              <Card.Text>
                <div className="radio radio-btn">
                  <label>
                    <input
                      type="radio"
                      name="roles"
                      className="radio-input"
                      onClick={() => this.handleChange("Admin")}
                      value="Admin"
                    />
                    Admin
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="roles"
                      className="radio-input"
                      value="Guest"
                      onClick={() => this.handleChange("Guest")}
                      defaultChecked={true}
                    />
                    Guest
                  </label>
                </div>
              </Card.Text>
              <Button variant="primary" onClick={() => this.userLogin()}>
                Login
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    allLaunchesResponse: store.allLaunchesResponse,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getAllLaunchesAPI: (payload) => dispatch(allLaunch(payload)),
  getAllEventsAPI: (payload) => dispatch(allEvents(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm));
//export default LoginForm;
