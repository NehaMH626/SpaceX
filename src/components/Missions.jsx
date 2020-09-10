import React from "react";
import { Button, Card, Badge, Accordion } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PageLoader from "../../src/components/PageLoader";
import "../containers/AdminPage/Admin.css";

class AllMissions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMissionsData: [],
    };
  }

  updateMissionData = () => {
    this.setState({ allMissionsData: this.props.allMissionsResponse });
  };

  componentDidMount() {
    this.updateMissionData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.allMissionsResponse !== this.props.allMissionsResponse) {
      this.updateMissionData();
    }
  }

  render() {
    return (
      <div>
        <PageLoader loader={this.props.loading}></PageLoader>
        <h4>Missions</h4>
        <Accordion defaultActiveKey="0">
          {this.state.allMissionsData?.map((data, index) => {
            return (
              <Card className="cardHeader">
                <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                  {data.mission_name}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index.toString()}>
                  <Card.Body className="cardBody">
                    <Card.Text>Mission Id : {data.mission_id}</Card.Text>
                    <Card.Text>
                      Manufacturers : {data.manufacturers.join()}
                    </Card.Text>
                    <Card.Text>Mission Details: {data.description}</Card.Text>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    allMissionsResponse: store.AdminReducer.allMissionsResponse,
    loading: store.AdminReducer.loader,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AllMissions));
//export default AllMissions;
