import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Card, Badge } from "react-bootstrap";
import "../containers/GuestPage/Guest.css";
import PageLoader from "../../src/components/PageLoader";

class PastLaunches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastLaunchesData: [],
    };
  }
  updatePastLaunches = () => {
    this.setState({
      pastLaunchesData: this.props.pastLaunchesResponse,
    });
  };
  componentDidMount() {
    if (this.props.pastLaunchesResponse.length) {
      this.updatePastLaunches();
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.pastLaunchesResponse !== this.props.pastLaunchesResponse) {
      this.updatePastLaunches();
    }
  }
  render() {
    return (
      <div>
        <PageLoader loader={this.props.loading}></PageLoader>
        <h4> Launches</h4>
        <div className="row">
          {this.state.pastLaunchesData?.map((data, index) => {
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
    pastLaunchesResponse: store.GuestReducer.pastLaunchesResponse,
    loading: store.GuestReducer.loader,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PastLaunches));
//export default PastLaunches;
