import React from "react";
import PropTypes from "prop-types";

import AdminHeader from "../components/adminHeader";

import Card from 'grommet/components/Card';
import Columns from 'grommet/components/Columns';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';

import CloseIcon from "grommet/components/icons/base/Close";
import ArchiveIcon from "grommet/components/icons/base/Archive";
import FavoriteIcon from "grommet/components/icons/base/Favorite";

import base from "../database/base";

import moment from "moment";

  const CmpntButtonArchive = props =>
  {
    return props.archives?
           <Button icon={<ArchiveIcon />} />
          :<Button icon={<ArchiveIcon />} onClick={ () => props.archiveFunction( props.archiveMessage ) }/>
  }
  
class InboxPage extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    
    //this.callbackFunction = this.callbackFunction.bind(this);
    this.handleDeleteMessage = this.handleDeleteMessage.bind(this);
    this.handleArchiveMessage = this.handleArchiveMessage.bind(this);
    
    this.state =
    {
      stateMessages : [],
    }
    
  }

  getInboxPath = () => this.props.archives ? 'archives/':'inbox/';
  
  componentDidMount()
  {
    base.bindToState( this.getInboxPath(), { context: this, state: 'stateMessages', asArray: true });
  }
  
  handleDeleteMessage(key)
  {
    base.remove(`${this.getInboxPath()}${key}/`)
        .then(() => { /* handle success */ })
        .catch(error => { /* handle error */ });
  }
  
  handleArchiveMessage(pMessageObject)
  {
    base.push(`archives/`, { data: pMessageObject })
        .then( () => { this.handleDeleteMessage( pMessageObject.key) })
        .catch(err => { /* handle error */ });
  }
  
  timestamp2DateTime(pTimestamp)
  {
    return moment(pTimestamp).format("DD/MM/YYYY HH:mm");
  }
  
  render() {
    return (
      <Box>
        <AdminHeader/>
        <Box wrap={true} responsive padding='large' margin='large' direction="row" justify="around">
            {
              this.state.stateMessages.map( (msg,idx) =>
  
                <Card key={msg.key}
                      separator="all"
                      margin="small"
                      colorIndex="light-1"
                      label={ `[#${idx}] ${this.timestamp2DateTime(msg.timestamp)}` }
                      heading={msg.contact}
                      description={msg.message} >
  
                  <Box separator="all" direction="row" justify="end" responsive={false} >
                    <Button icon={<FavoriteIcon />} />
                    <CmpntButtonArchive archives={this.props.archives} archiveFunction={ this.handleArchiveMessage } archiveMessage={msg}/>
                    <Button icon={<CloseIcon />}   onClick={ () => this.handleDeleteMessage(msg.key) }/>
                  </Box>
  
                </Card>
              )
            }
          
        </Box>
      </Box>
    
    );
  }
}

InboxPage.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (InboxPage);
