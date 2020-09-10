import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  allLaunch,
  oneLaunch,
  upcomingLaunch,
  pastLaunch,
  latestLaunch,
  nextLaunch,
} from "../containers/GuestPage/GuestAction";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import {
  allEvents,
  companyDetails,
  allMissions,
} from "../containers/AdminPage/AdminAction";

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
    };
  }

  //---------Guest------------
  getAllLaunches = (topic) => {
    this.props.getAllLaunches_API();
    this.props.onSelectTopic(topic);
    this.setState({ activeId: topic });
  };
  getLatestLaunches = (topic) => {
    this.props.getLatestLaunches_API();
    this.props.onSelectTopic(topic);
    this.setState({ activeId: topic });
  };
  getUpcomingLaunches = (topic) => {
    this.props.getUpcomingLaunches_API();
    this.props.onSelectTopic(topic);
    this.setState({ activeId: topic });
  };
  getPastLaunches = (topic) => {
    this.props.getPastLaunches_API();
    this.props.onSelectTopic(topic);
    this.setState({ activeId: topic });
  };
  getNextLaunches = (topic) => {
    this.props.getNextLaunches_API();
    this.props.onSelectTopic(topic);
    this.setState({ activeId: topic });
  };

  //---------Admin--------------
  getAllEvents = (topic) => {
    this.props.getAllEvents_API();
    this.props.onSelectTopic(topic);
    this.setState({ activeId: topic });
  };
  getAllMissions = (topic) => {
    this.props.getAllMissions_API();
    this.props.onSelectTopic(topic);
    this.setState({ activeId: topic });
  };
  getCompanyInfo = (topic) => {
    this.props.getCompanyInfo_API();
    this.props.onSelectTopic(topic);
    this.setState({ activeId: topic });
  };

  render() {
    return (
      <div className="sidenav">
        {this.props.role === "Guest" ? (
          <ul>
            <li>
              {" "}
              <Link
                className={this.state.activeId === "allLaunch" && "active"}
                to="/Guest/allLaunches"
                onClick={() => this.getAllLaunches("allLaunch")}
              >
                All launches
              </Link>
            </li>
            <li>
              <Link
                className={this.state.activeId === "latestLaunch" && "active"}
                to="/Guest/latestLaunches"
                onClick={() => this.getLatestLaunches("latestLaunch")}
              >
                Latest Launches
              </Link>
            </li>
            <li>
              <Link
                className={this.state.activeId === "upcomingLaunch" && "active"}
                to="/Guest/upcomingLaunches"
                onClick={() => this.getUpcomingLaunches("upcomingLaunch")}
              >
                Upcoming Launches
              </Link>
            </li>
            <li>
              <Link
                className={this.state.activeId === "pastLaunch" && "active"}
                to="/Guest/pastLaunches"
                onClick={() => this.getPastLaunches("pastLaunch")}
              >
                Past Launches
              </Link>
            </li>
            <li>
              <Link
                className={this.state.activeId === "nextLaunch" && "active"}
                to="/Guest/nextLaunches"
                onClick={() => this.getNextLaunches("nextLaunch")}
              >
                Next Launches
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link
                className={this.state.activeId === "allEvents" && "active"}
                to="/Admin/allEvents"
                onClick={() => this.getAllEvents("allEvents")}
              >
                All Events
              </Link>
            </li>
            <li>
              <Link
                className={this.state.activeId === "allMission" && "active"}
                to="/Admin/allMission"
                onClick={() => this.getAllMissions("allMission")}
              >
                All Missions
              </Link>
            </li>
            <li>
              <Link
                className={this.state.activeId === "companyInfo" && "active"}
                to="/Admin/companyInfo"
                onClick={() => this.getCompanyInfo("companyInfo")}
              >
                About Company
              </Link>
            </li>
          </ul>
          //   <div>
          //     <a
          //       href="javascript:void(0)"
          //       onClick={() => this.getAllEvents("allEvents")}
          //     >
          //       Events
          //     </a>
          //     <a
          //       href="javascript:void(0)s"

          //     >
          //       Missions
          //     </a>
          //     <a
          //       href="javascript:void(0)"
          //       onClick={() => this.getCompanyInfo("companyInfo")}
          //     >
          //       Company
          //     </a>
          //   </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    stringLiterals: store.stringLiterals,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getAllLaunches_API: (payload) => dispatch(allLaunch(payload)),
  getUpcomingLaunches_API: (payload) => dispatch(upcomingLaunch(payload)),
  getNextLaunches_API: (payload) => dispatch(nextLaunch(payload)),
  getPastLaunches_API: (payload) => dispatch(pastLaunch(payload)),
  getLatestLaunches_API: (payload) => dispatch(latestLaunch(payload)),

  getAllEvents_API: (payload) => dispatch(allEvents(payload)),
  getAllMissions_API: (payload) => dispatch(allMissions(payload)),
  getCompanyInfo_API: (payload) => dispatch(companyDetails(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SideNavBar));
