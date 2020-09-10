import React from "react";
import { Button, Card, Badge, Accordion } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PageLoader from "../../src/components/PageLoader";
import "../containers/AdminPage/Admin.css";

class CompanyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyData: [],
    };
  }

  updateCompanyData = () => {
    this.setState({ companyData: this.props.companyDetailsResponse });
  };

  componentDidMount() {
    this.updateCompanyData();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.companyDetailsResponse !== this.props.companyDetailsResponse
    ) {
      this.updateCompanyData();
    }
  }

  render() {
    return (
      <div>
        <PageLoader loader={this.props.loading}></PageLoader>
        <h4>About Company</h4>

        <Card className="cardHeader">
          <Card.Header>{this.state.companyData?.["name"]}</Card.Header>
          <Card.Body
            className="cardBody"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #602954, #212847)!important",
            }}
          >
            <Card.Text>
              Founder : {this.state.companyData?.["founder"]}
            </Card.Text>
            <Card.Text>
              Founded: {this.state.companyData?.["founded"]}
            </Card.Text>
            <Card.Text>CEO : {this.state.companyData?.["ceo"]}</Card.Text>
            <Card.Text>{this.state.companyData?.["summary"]}</Card.Text>
            {/* <Card.Text>
              Headquaters : {this.state.companyData?.headquarters.address}
              ,
              {this.state.companyData?.["headquarters"]["city"]},
              {this.state.companyData?.["headquarters"]["state"]}
            </Card.Text> */}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    companyDetailsResponse: store.AdminReducer.companyDetailsResponse,
    loading: store.AdminReducer.loader,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CompanyInfo));
//export default CompanyInfo;
