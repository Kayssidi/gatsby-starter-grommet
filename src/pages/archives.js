import React from "react";
import PropTypes from "prop-types";

import InboxPage from './inbox'

//const CmpntStateless = props => <div>{props.children}</div>;

class ArchivesPage extends React.Component {
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
    return (<InboxPage archives />);
  }
}

ArchivesPage.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (ArchivesPage);
