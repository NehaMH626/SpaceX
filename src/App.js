import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "../src/config/store";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { browserHistory } from "react-router";
// import { createHashHistory } from "history";
import Login from "../src/containers/Login/Login";
import Admin from "../src/containers/AdminPage/Admin";
import Guest from "../src/containers/GuestPage/Guest";
import AllLaunches from "../src/components/AllLaunches";
import LatestLaunches from "../src/components/LatestLaunches";
import SideNavBar from "../src/components/SideNavBar";
import UpcomingLaunches from "./components/UpcomingLaunches";
import PastLaunches from "./components/PastLaunches";
import NextLaunches from "./components/NextLaunches";
import AllEvents from "./components/Events";
import AllMissions from "./components/Missions";
import CompanyInfo from "./components/CompanyInfo";

let privateRouter =
  "/(/Guest/allLaunches|/Guest/upcomingLaunches|/Guest/latestLaunches|/Guest/pastLaunches|/Guest/nextLaunches)";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/Admin" component={Admin} />
            <Route path="/Guest" component={Guest} />
            {/* <Route path={privateRouter} component={SideNavBar} /> */}
            <Route path="/Guest/allLaunches" component={AllLaunches} />
            <Route path="/Guest/latestLaunches" component={LatestLaunches} />
            <Route
              path="/Guest/upcomingLaunches"
              component={UpcomingLaunches}
            />
            <Route path="/Guest/pastLaunches" component={PastLaunches} />
            <Route path="/Guest/nextLaunches" component={NextLaunches} />
            <Route path="/Admin/allEvents" component={AllEvents} />
            <Route path="/Admin/allMission" component={AllMissions} />
            <Route path="/Admin/companyInfo" component={CompanyInfo} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
