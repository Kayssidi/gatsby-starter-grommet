import React from "react";
import PropTypes from "prop-types";

import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';

import MailIcon from "grommet/components/icons/base/Mail";
import CalendarIcon from "grommet/components/icons/base/Calendar";
import UserIcon from "grommet/components/icons/base/User";
import ArchiveIcon from "grommet/components/icons/base/Archive";

const CmpntAdminOption = props => <Box align="center" full="horizontal" pad="small">
                                    <Anchor icon={props.children} label={props.label} path={{ path: props.path, index: true }} />
                                  </Box>;
                                  
class adminHeader extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    
    /* code */
    
    return (
      <Box direction="row" justify="between">
        <CmpntAdminOption label="Inbox" path="inbox"><MailIcon /></CmpntAdminOption>
        <CmpntAdminOption label="Archives" path="archives"><ArchiveIcon /></CmpntAdminOption>
        <CmpntAdminOption label="Réservation" path="bookingList"><CalendarIcon /></CmpntAdminOption>
        <CmpntAdminOption label="Clients" path="usersList"><UserIcon /></CmpntAdminOption>
      </Box>
    );
  }
}

adminHeader.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (adminHeader);
