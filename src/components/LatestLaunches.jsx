import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Card, Badge } from "react-bootstrap";
import "../containers/GuestPage/Guest.css";
import PageLoader from "../../src/components/PageLoader";

class LatestLaunches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latestLaunchesData: {},
    };
  }
  componentDidMount() {
    this.setState({ latestLaunchesData: this.props.latestLaunchesResponse });
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.latestLaunchesResponse !== this.props.latestLaunchesResponse
    ) {
      this.setState({ latestLaunchesData: this.props.latestLaunchesResponse });
    }
  }
  render() {
    return (
      <div>
        <PageLoader loader={this.props.loading}></PageLoader>
        <h4>Latest Launch</h4>
        <div className="row">
          <div className="col-md-4 ">
            <Card className="launchCard">
              <Card.Header>
                {this.state.latestLaunchesData?.["rocket"]?.["rocket_name"]}
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Launch Data :{" "}
                  {this.state.latestLaunchesData?.["launch_date_local"]}
                </Card.Text>
                <Card.Text>
                  Mission Name :{" "}
                  {this.state.latestLaunchesData?.["mission_name"]}
                </Card.Text>
                <Card.Text>
                  Nation :{" "}
                  {
                    this.state.latestLaunchesData?.["rocket"]?.["second_stage"][
                      "payloads"
                    ][0]["nationality"]
                  }
                </Card.Text>
                {this.state.latestLaunchesData?.["launch_success"] === true ? (
                  <Badge variant="success">Success</Badge>
                ) : (
                  <Badge variant="danger">Failed</Badge>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    latestLaunchesResponse: store.GuestReducer.latestLaunchesResponse,
    loading: store.GuestReducer.loader,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LatestLaunches));
