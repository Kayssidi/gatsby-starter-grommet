import React from "react";
import PropTypes from "prop-types";

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';

import Card from 'grommet/components/Card';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Quote from 'grommet/components/Quote';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';

import ReservationCard from '../components/reservationCard';

class MainPage extends React.Component {
  state = {};

  constructor(props) {
    super(props);

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

      <Article >

        <Section pad={{ vertical: 'none' }} >
          

          <Columns justify='center'>

            <Box align='center' pad='medium' margin='medium' colorIndex='light-2' separator='all'>
              <ReservationCard />
            </Box>

            <Box align='center' pad='medium' margin='medium' colorIndex='light-2' separator='all'>
              <Card thumbnail='https://www.chien.fr/assets/img/000/291/large/massage-canin.jpg'
                heading='Le Massage Canin'
                description='En apprendre plus sur les bienfaits du massage canin'
                contentPad='none'
                link={<Anchor href=''
                  label='Suite ...' />}
              />
            </Box>

          </Columns>

        </Section>

        <Section align='center'>
          <Quote credit='Juni Pi' emphasizeCredit>
            <Paragraph>Im walking on sunshine</Paragraph>
            <Paragraph>woohoo</Paragraph>
          </Quote>
        </Section>

      </Article>
    );
  }
}

MainPage.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (MainPage);
