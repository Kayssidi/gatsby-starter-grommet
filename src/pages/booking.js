import React from "react";
import PropTypes from "prop-types";

import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Columns from 'grommet/components/Columns';
import Label from 'grommet/components/Label';
import Anchor from "grommet/components/Anchor";

import FormProgress from '../components/formProgress';
import ReservationCard from '../components/reservationCard';
import DogInformationCard from "../components/dogInformationCard";
import OwnerInformationCard from "../components/ownerInformationCard";
import ValidationCard from "../components/validationCard";

// http://grommet.io/docs/icon/
import LikeIcon from "grommet/components/icons/base/Like";
import FavIcon from "grommet/components/icons/base/Favorite";
import PrevIcon from "grommet/components/icons/base/CaretPrevious";

class BookingPage extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    
    //this.callbackFunction = this.callbackFunction.bind(this);
    this.validateDateTime = this.validateDateTime.bind(this);
    this.validateUserInfo = this.validateUserInfo.bind(this);
    this.validateDogInfo  = this.validateDogInfo.bind(this);
    this.validateBooking  = this.validateBooking.bind(this);
    
      this.state =
      {
          stateCurrentForm : 0,
          stateValidatedDateTime : undefined,
      }
  }


  //dateTimeTitle = () => `Réservation de la séance`;

  dateTimeTitle = () => this.state.stateValidatedDateTime ?
                        <Label>Réservation de la séance <Status value='ok' /></Label>
                      : <Label>Réservation de la séance</Label>;
  
  validateDateTime(timestamp)
  {
    this.setState( {stateValidatedDateTime : timestamp} );
    this.setState((prevState) => { return {stateCurrentForm: prevState.stateCurrentForm + 1}; });
  }
  
  validateUserInfo()
  {
    console.log('validateUserInfo');
    this.setState((prevState) => { return {stateCurrentForm: prevState.stateCurrentForm + 1}; });
  }
  
  validateDogInfo()
  {
    console.log('validateDogInfo');
    this.setState((prevState) => { return {stateCurrentForm: prevState.stateCurrentForm + 1}; });
  }
  
  validateBooking()
  {
    
  }
  
  goBackInForm(e)
  {
    console.log('goBackInForm');
    this.setState((prevState) => { return {stateCurrentForm: prevState.stateCurrentForm - 1}; });
  }

  render() {

    let currentForm = null;
    if(this.state.stateCurrentForm == 0)
      currentForm = <ReservationCard propsDateSelected={new Date(2018, 1, 28)} propBookDateTime={ this.validateDateTime } />;
    else if(this.state.stateCurrentForm == 1)
      currentForm = <OwnerInformationCard propValidForm={ this.validateUserInfo }/>;
    else if(this.state.stateCurrentForm == 2)
      currentForm = <DogInformationCard propValidForm={ this.validateDogInfo }/>;
    else if(this.state.stateCurrentForm == 3)
      currentForm = <ValidationCard />;

    return (
    <Article>
        <Section>
        
          <Box direction="column" align="center">
          
          <FormProgress propCurrentProgress={this.state.stateCurrentForm}/>
          
          <Columns justify="center">
              
              <Box pad="medium" margin="medium" colorIndex="light-2" separator="all" >
                <Box>{this.state.stateCurrentForm>0?<Anchor icon={<PrevIcon />} label='retour' onClick={ e => this.goBackInForm(e) }/>:null}</Box>
                <Box>{currentForm}</Box>
              </Box>
          </Columns>
          </Box>
        </Section>
      </Article>
      
    );
  }
}

BookingPage.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (BookingPage);
