import React from "react";
import PropTypes from "prop-types";

import Box from 'grommet/components/Box';

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Columns from 'grommet/components/Columns';
import Label from 'grommet/components/Label';

import ReservationCard from '../components/reservationCard'
import DogInformationCard from "../components/dogInformationCard";
import OwnerInformationCard from "../components/ownerInformationCard";
import ValidationCard from "../components/validationCard";

import LikeIcon from "grommet/components/icons/base/Like";
import FavIcon from "grommet/components/icons/base/Favorite";
import Status from 'grommet/components/icons/Status';

//const CmpntStateless = props => <div>{props.children}</div>;

class BookingPage extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    
    //this.callbackFunction = this.callbackFunction.bind(this);
    this.validateDateTime = this.validateDateTime.bind(this);
    
      this.state =
      {
          stateActivePanel : [0,1,2],
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
    
    const newArray = this.state.stateActivePanel.filter(panel => panel!=0);
    this.setState( {stateActivePanel : newArray });
  }

  render() {
    return (
      
    <Article>
        <Section>
          <Accordion active={this.state.stateActivePanel} openMulti={true}>
            <AccordionPanel heading={ this.dateTimeTitle() }>
              <Columns justify="center">
                <Box
                  align="center"
                  pad="medium"
                  margin="medium"
                  colorIndex="light-2"
                  separator="all"
                >
                  <ReservationCard propsDateSelected={new Date(2018, 1, 28)} propBookDateTime={ this.validateDateTime } />
                </Box>
              </Columns>
            </AccordionPanel>

            <AccordionPanel heading="Vos Information">
              <Columns justify="center">
                <Box
                  align="center"
                  pad="medium"
                  margin="medium"
                  colorIndex="light-2"
                  separator="all"
                >
                  <OwnerInformationCard />
                </Box>

                <Box
                  align="center"
                  pad="medium"
                  margin="medium"
                  colorIndex="light-2"
                  separator="all"
                >
                  <DogInformationCard />
                </Box>
              </Columns>
            </AccordionPanel>

            <AccordionPanel heading="Validation">
              <Columns justify="center">
                <Box
                  align="center"
                  pad="medium"
                  margin="medium"
                  colorIndex="light-2"
                  separator="all"
                >
                  <ValidationCard />
                </Box>
              </Columns>
            </AccordionPanel>
          </Accordion>
        </Section>

        <Section />
      </Article>
      
    );
  }
}

BookingPage.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (BookingPage);
