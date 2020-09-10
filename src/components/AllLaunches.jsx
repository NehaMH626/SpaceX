import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Card, Badge } from "react-bootstrap";
import "../containers/GuestPage/Guest.css";
import PageLoader from "../../src/components/PageLoader";

class AllLaunches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allLaunchesData: [],
    };
  }

  updateAllLaunch = () => {
    this.setState({ allLaunchesData: this.props.allLaunchesResponse });
  };
  componentDidMount() {
    if (this.props.allLaunchesResponse.length) {
      this.updateAllLaunch();
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.allLaunchesResponse !== this.props.allLaunchesResponse) {
      this.updateAllLaunch();
    }
  }
  render() {
    return (
      <div>
        <PageLoader loader={this.props.loading}></PageLoader>
        <h4>All Launches</h4>
        <div className="row">
          {this.state.allLaunchesData?.map((data, index) => {
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
    allLaunchesResponse: store.GuestReducer.allLaunchesResponse,
    loading: store.GuestReducer.loader,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AllLaunches));
//export default AllLaunches;
