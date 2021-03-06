import React from "react";
import PropTypes from "prop-types";

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Paragraph from 'grommet/components/Paragraph';
import Columns from 'grommet/components/Columns';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';

import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

// http://grommet.io/docs/icon/
import FavIcon from "grommet/components/icons/base/Favorite";

class InfoPage extends React.Component {
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
      
      <Columns justify='center' size='large'>
        
        <Accordion active={3} pad="large">

          <AccordionPanel heading="Réserver une séance">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          </AccordionPanel>
  
          <AccordionPanel heading='Quels sont les tarifs?'>
            <Table>
              <thead>
                <tr>
                  <th>Id</th>   <th>Name</th>   <th>Note</th>
                </tr>
              </thead>
              <tbody>
                <TableRow>
                  <td>1</td>   <td>Alan</td>   <td className='secondary'>plays accordion</td>
                </TableRow>
                
                <TableRow>
                  <td>2</td>   <td>Chris</td>   <td className='secondary'>drops the mic</td>
                </TableRow>

                <TableRow>
                  <td>3</td>   <td>Eric</td>   <td className='secondary'>rides a bike</td>
                </TableRow>

                <TableRow>
                  <td>4</td>   <td>Tracy</td>   <td className='secondary'>travels the world</td>
                </TableRow>
              </tbody>
            </Table>
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

InfoPage.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (InfoPage);
