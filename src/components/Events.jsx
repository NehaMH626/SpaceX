import React from "react";
import { Button, Card, Badge, Accordion } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PageLoader from "../../src/components/PageLoader";
import "../containers/AdminPage/Admin.css";

class AllEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allEventsData: [],
    };
  }

  updateEventData = () => {
    this.setState({ allEventsData: this.props.allEventsResponse });
  };

  componentDidMount() {
    this.updateEventData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.allEventsResponse !== this.props.allEventsResponse) {
      this.updateEventData();
    }
  }

  render() {
    return (
      <div>
        <PageLoader loader={this.props.loading}></PageLoader>
        <h4>Events History</h4>
        <Accordion defaultActiveKey="0">
          {this.state.allEventsData?.map((data, index) => {
            return (
              <Card className="cardHeader">
                <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                  {data.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index.toString()}>
                  <Card.Body className="cardBody">
                    <Card.Text>Event Id : {data.id}</Card.Text>
                    <Card.Text>Flight No. : {data.flight_number}</Card.Text>
                    <Card.Text>Event Date : {data.event_date_utc}</Card.Text>
                    <Card.Text>Event Details: {data.details}</Card.Text>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}

          {/* <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card> */}
        </Accordion>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    allEventsResponse: store.AdminReducer.allEventsResponse,
    loading: store.AdminReducer.loader,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AllEvents));
//export default AllEvents;
