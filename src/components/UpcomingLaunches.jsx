import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Card, Badge } from "react-bootstrap";
import "../containers/GuestPage/Guest.css";
import PageLoader from "../../src/components/PageLoader";

class UpcomingLaunches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UpcomingLaunchesData: [],
    };
  }
  componentDidMount() {
    if (this.props.upcomingLaunchesResponse.length) {
      this.setState({
        UpcomingLaunchesData: this.props.upcomingLaunchesResponse,
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.upcomingLaunchesResponse !== this.props.upcomingLaunchesResponse
    ) {
      this.setState({
        UpcomingLaunchesData: this.props.upcomingLaunchesResponse,
      });
    }
  }
  render() {
    return (
      <div>
        <PageLoader loader={this.props.loading}></PageLoader>
        <h4>Upcoming Launches</h4>
        <div className="row">
          {this.state.UpcomingLaunchesData?.map((data, index) => {
            return (
              <div className="col-md-4" key={index}>
                <Card className="launchCard">
                  <Card.Header>{data["rocket"]["rocket_name"]}</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Launch Data : {data["launch_date_local"]}
                    </Card.Text>
                    <Card.Text>Mission Name : {data["mission_name"]}</Card.Text>
                    <Card.Text>
                      Nation :{" "}
                      {
                        data["rocket"]["second_stage"]["payloads"][0][
                          "nationality"
                        ]
                      }
                    </Card.Text>
                    {data["launch_success"] === true ? (
                      <Badge variant="success">Success</Badge>
                    ) : (
                      <Badge variant="danger">Failed</Badge>
                    )}
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    upcomingLaunchesResponse: store.GuestReducer.upcomingLaunchesResponse,
    loading: store.GuestReducer.loader,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UpcomingLaunches));
//export default UpcomingLaunches;
