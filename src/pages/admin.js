import React from "react";
import PropTypes from "prop-types";

import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';

import MailIcon from "grommet/components/icons/base/Mail";
import HostIcon from "grommet/components/icons/base/Host";


const CmpntAdminOption = props => <Box align="center" full="horizontal" pad="small">
                                    <Anchor icon={props.children} label={props.label} path={{ path: props.path, index: true }} />
                                  </Box>;

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
      <Box>
      
        <CmpntAdminOption label="Inbox" path="inbox"><MailIcon /></CmpntAdminOption>
        <CmpntAdminOption label="Archives" path="archives"><HostIcon /></CmpntAdminOption>
        
      </Box>
    );
  }
}

AdminPage.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (AdminPage);
