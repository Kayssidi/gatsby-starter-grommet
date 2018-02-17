import React from "react";
import PropTypes from "prop-types";



import Card from 'grommet/components/Card';
import Columns from 'grommet/components/Columns';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

import CloseIcon from "grommet/components/icons/base/Close";
import ArchiveIcon from "grommet/components/icons/base/Archive";
import FavoriteIcon from "grommet/components/icons/base/Favorite";

import base from "../database/base";

import moment from "moment";

class InboxPage extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    
    //this.callbackFunction = this.callbackFunction.bind(this);
    this.handleDeleteMessage = this.handleDeleteMessage.bind(this);
    
    this.state =
    {
      stateMessages : [],
    }
    
  }

  componentDidMount()
  {
    base.bindToState('inbox/', { context: this, state: 'stateMessages', asArray: true });
  }
  
  handleDeleteMessage(key)
  {
    base.remove(`inbox/${key}/`)
        .then(() => { /* handle success */ })
        .catch(error => { /* handle error */ });
        
    return true;
  }
  
  handleArchiveMessage(pMessageObject)
  {
    
    base.push(`archive/`, { data: pMessageObject })
        .then( () => { this.handleDeleteMessage( pMessageObject.key) })
        .catch(err => { /* handle error */ });
  }
  
  render() {
    return (
      <Columns responsive={false} size="small" justify="center">
        
          {
            this.state.stateMessages.map( (msg,idx) =>

              <Card key={msg.key}
                    separator="all"
                    margin="small"
                    colorIndex="light-1"
                    label={ `[#${idx}] ${msg.timestamp}` }
                    heading={msg.contact}
                    description={msg.message} >
                    <Box separator="all" direction="row" justify="end">
                      <Button icon={<FavoriteIcon />} />
                      <Button icon={<ArchiveIcon />} onClick={ () => this.handleArchiveMessage(msg) }/>
                      <Button icon={<CloseIcon />}   onClick={ () => this.handleDeleteMessage(msg.key) }/>
                    </Box>
              </Card>
            )
          }
        
      </Columns>
    
    );
  }
}

InboxPage.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (InboxPage);
