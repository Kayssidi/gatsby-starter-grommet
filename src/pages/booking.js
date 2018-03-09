import React from "react";
import PropTypes from "prop-types";

import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Columns from 'grommet/components/Columns';
import Label from 'grommet/components/Label';
import Anchor from "grommet/components/Anchor";
import Animate from 'grommet/components/Animate';

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
    this.setState((prevState) => { return {stateCurrentForm: prevState.stateCurrentForm + 1}; });
  }
  
  validateDogInfo()
  {
    this.setState((prevState) => { return {stateCurrentForm: prevState.stateCurrentForm + 1}; });
  }
  
  validateBooking()
  {
    
  }
  
  goBackInForm(e)
  {
    this.setState((prevState) => { return {stateCurrentForm: prevState.stateCurrentForm - 1}; });
  }

  render() {

    let transitionType = 'fade';
    let currentForm0 = null;
    if(this.state.stateCurrentForm == 0)
      currentForm0 =<Animate enter={{"animation": transitionType, "duration": 300}} keep={false}>
                      <ReservationCard propBookDateTime={ this.validateDateTime } />
                    </Animate>;

    let currentForm1 = null;
    if(this.state.stateCurrentForm == 1)
      currentForm1 =<Animate enter={{"animation": transitionType, "duration": 300}} keep={false}>
                      <OwnerInformationCard propValidForm={ this.validateUserInfo }/>
                    </Animate>;

    let currentForm2 = null;
    if(this.state.stateCurrentForm == 2)
      currentForm2 =<Animate enter={{"animation": transitionType, "duration": 300}} keep={false}>
                      <DogInformationCard propValidForm={ this.validateDogInfo }/>
                    </Animate>;

    let currentForm3 = null;
    if(this.state.stateCurrentForm == 3)
      currentForm3 =<Animate enter={{"animation": transitionType, "duration": 300}} keep={false}>
                      <ValidationCard />
                    </Animate>;
    return (
    <Article>
        <Section>
        
          <Box direction="column" align="center">
          
          <FormProgress propCurrentProgress={this.state.stateCurrentForm}/>
          
          <Columns justify="center">
              
              <Box pad="medium" margin="medium" colorIndex="light-2" separator="all" >
                <Box>{this.state.stateCurrentForm>0?<Anchor icon={<PrevIcon />} label='retour' onClick={ e => this.goBackInForm(e) }/>:null}</Box>
                  <Box>{currentForm0}</Box>
                  <Box>{currentForm1}</Box>
                  <Box>{currentForm2}</Box>
                  <Box>{currentForm3}</Box>
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
