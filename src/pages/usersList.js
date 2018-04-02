import React from "react";
import PropTypes from "prop-types";

import AdminHeader from "../components/adminHeader";

import Box from "grommet/components/Box";
import Card from "grommet/components/Card";
import Button from 'grommet/components/Button';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

import base from "../database/base";

import CloseIcon from "grommet/components/icons/base/Close";
import FavoriteIcon from "grommet/components/icons/base/Favorite";

import moment from "moment";

class UsersListPage extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    
    //this.callbackFunction = this.callbackFunction.bind(this);
    this.handleDeleteMessage = this.handleDeleteMessage.bind(this);
    
    this.state =
    {
      stateUsers : [],
    }
  }

  handleDeleteMessage(key)
  {
    /*base.remove(`users/${key}/`)
        .then(() => {  })
        .catch(error => {  });*/
  }
  
  componentDidMount()
  {
    base.fetch( "/users", { context: this, asArray: true })
        .then(data => { this.setState( { stateUsers: data } ) })
        .catch(error => { /*handle error*/ });
  }
  
  render() {
    return (
      <Box>
        <AdminHeader/>
        <Box wrap={true} responsive padding='large' margin='large' direction="row" justify="around">
            {
              this.state.stateUsers.map( (user,idx) =>
  
                <Card key={user.key}
                      separator="all"
                      margin="small"
                      colorIndex="light-1"
                      label={ `${user.telephone} ${user.couriel}` }
                      heading={ `${user.nom} ${user.prenom}` }
                      description={user.adresse} >
                  
                  {
                    user.dogs.map( (dog,idx) =>
                      <Box separator="all" direction="column">
                        <Box direction="row" justify='around'>
                          <Box>{dog.nom}</Box>
                          <Box>{dog.race}</Box>
                          <Box>{dog.age}</Box>
                        </Box>
                        <Box>{dog.pathologie}</Box>
                      </Box>
                    )
                  }
                  
                  <List>
                  <ListItem separator='horizontal'>Réservations</ListItem>
                  {
                    user.booking.map( (dateTime,idx) =>
                      <ListItem justify='between'>
                        <span>{moment(dateTime).format("DD/MM/YYYY")}</span>
                        <span>{moment(dateTime, ["H:m"]).format("HH:mm")}</span>
                      </ListItem>
                    )
                  }
                  </List>

                  <Box separator="all" direction="row" justify="end" responsive={false} >
                    <Button icon={<FavoriteIcon />} />
                    <Button icon={<CloseIcon />}   onClick={ () => this.handleDeleteMessage(user.key) }/>
                  </Box>
                </Card>
              )
            }
        </Box>
      </Box>
      );
  }
}

UsersListPage.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (UsersListPage);
