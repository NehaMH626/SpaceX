import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Card, Badge } from "react-bootstrap";
import "../containers/GuestPage/Guest.css";
import PageLoader from "../../src/components/PageLoader";

class NextLaunches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextLaunchesData: [],
    };
  }
  componentDidMount() {
    if (this.props.nextLaunchesResponse.length) {
      this.setState({
        nextLaunchesData: this.props.nextLaunchesResponse,
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.nextLaunchesResponse !== this.props.nextLaunchesResponse) {
      this.setState({
        nextLaunchesData: this.props.nextLaunchesResponse,
      });
    }
  }
  render() {
    return (
      <div>
        <PageLoader loader={this.props.loading}></PageLoader>
        <h4>Next Launches</h4>
        <div className="row">
          <div className="col-md-4">
            <Card className="launchCard">
              <Card.Header>
                {this.state.nextLaunchesData?.["rocket"]?.["rocket_name"]}
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Launch Data :{" "}
                  {this.state.nextLaunchesData?.["launch_date_local"]}
                </Card.Text>
                <Card.Text>
                  Mission Name : {this.state.nextLaunchesData?.["mission_name"]}
                </Card.Text>
                <Card.Text>
                  Nation :{" "}
                  {
                    this.state.nextLaunchesData?.["rocket"]?.["second_stage"][
                      "payloads"
                    ][0]["nationality"]
                  }
                </Card.Text>
                {this.state.nextLaunchesData?.["launch_success"] === true ? (
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
    nextLaunchesResponse: store.GuestReducer.nextLaunchesResponse,
    loading: store.GuestReducer.loader,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NextLaunches));
//export default NextLaunches;
