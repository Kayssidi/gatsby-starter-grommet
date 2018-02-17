import React from "react";
import PropTypes from "prop-types";

import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';

import MailIcon from "grommet/components/icons/base/Mail";
import HostIcon from "grommet/components/icons/base/Host";


const AdminOption = props => <Box align="center" full="horizontal" pad="small">
                               <Anchor icon={props.children} label={props.label} href={props.href} />
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
      
        <AdminOption label="Inbox" href="inbox"><MailIcon /></AdminOption>
        <AdminOption label="Archives" href="archives"><HostIcon /></AdminOption>
        
      </Box>
    );
  }
}

AdminPage.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (AdminPage);
