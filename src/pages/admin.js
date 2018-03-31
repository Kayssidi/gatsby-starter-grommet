import React from "react";
import PropTypes from "prop-types";

import AdminHeader from "../components/adminHeader";

class AdminPage extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    
    //this.callbackFunction = this.callbackFunction.bind(this);
    
    /*
      this.state =
      {
          field1 : value1,
          field2 : value2,
      }
    */
  }

  render() {
    return (
      <AdminHeader/>
    );
  }
}

AdminPage.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (AdminPage);
