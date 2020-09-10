import React, { Component } from "react";
import AppHeader from "../../components/AppHeader";
import SideNavBar from "../../components/SideNavBar";
import AllLaunches from "../../components/AllLaunches";
import LatestLaunches from "../../components/LatestLaunches";
import UpcomingLaunches from "../../components/UpcomingLaunches";
import PastLaunches from "../../components/PastLaunches";
import NextLaunches from "../../components/NextLaunches";

class Guest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestData: "allLaunch",
    };
  }

  getSelectedInfo = (topic) => {
    this.setState({ requestData: topic });
  };
  render() {
    return (
      <div>
        <AppHeader history={this.props.history} />

        <div className="row" style={{ marginTop: "77px" }}>
          <div className="col-md-3">
            <SideNavBar onSelectTopic={this.getSelectedInfo} role="Guest" />
          </div>
          <div className="col-md-9" style={{ marginTop: "5vh" }}>
            {this.state.requestData === "allLaunch" ? (
              <AllLaunches />
            ) : this.state.requestData === "latestLaunch" ? (
              <LatestLaunches />
            ) : this.state.requestData === "upcomingLaunch" ? (
              <UpcomingLaunches />
            ) : this.state.requestData === "pastLaunch" ? (
              <PastLaunches />
            ) : this.state.requestData === "nextLaunch" ? (
              <NextLaunches />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Guest;
