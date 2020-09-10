import React, { Component } from "react";
import AppHeader from "../../components/AppHeader";
import SideNavBar from "../../components/SideNavBar";
import AllEvents from "../../components/Events";
import AllMissions from "../../components/Missions";
import CompanyInfo from "../../components/CompanyInfo";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestData: "allEvents",
    };
  }
  getSelectedInfo = (topic) => {
    this.setState({ requestData: topic });
  };

  render() {
    return (
      <div>
        <AppHeader history={this.props.history} />
        <div className="row">
          <div className="col-md-3">
            <SideNavBar onSelectTopic={this.getSelectedInfo} role="Admin" />
          </div>
          <div className="col-md-9 sub-container" style={{ marginTop: "77px" }}>
            {this.state.requestData === "allEvents" ? (
              <AllEvents />
            ) : this.state.requestData === "allMission" ? (
              <AllMissions />
            ) : this.state.requestData === "companyInfo" ? (
              <CompanyInfo />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
