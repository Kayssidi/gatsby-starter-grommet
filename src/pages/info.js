import React from "react";
import PropTypes from "prop-types";

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Paragraph from 'grommet/components/Paragraph';
import Columns from 'grommet/components/Columns';

// http://grommet.io/docs/icon/
import FavIcon from "grommet/components/icons/base/Favorite";

class ClassTemplate extends React.Component {
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
      <Columns justify='center'>
        <Accordion>
          <AccordionPanel heading="Réserver une séance">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          </AccordionPanel>
  
          <AccordionPanel heading='Quels sont les tarifs?'>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          </AccordionPanel>
          
          <AccordionPanel heading='Quelques conseils'>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          </AccordionPanel>
        </Accordion>
      </Columns>
    );
  }
}

ClassTemplate.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (ClassTemplate);
