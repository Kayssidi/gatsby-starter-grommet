import React from "react";
import PropTypes from "prop-types";

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';

import Card from 'grommet/components/Card';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Headline from 'grommet/components/Headline';

// http://grommet.io/docs/icon/
import LinkNextIcon from "grommet/components/icons/base/LinkNext";

class MainPage extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <Article >

        <Section pad='large' justify='center' align='center'>
          <Headline margin='none'>Section 1</Headline>
        </Section>
        <Section pad='large' justify='center' align='center' colorIndex='grey-4'>
          <Headline margin='none'>Section 2</Headline>
        </Section>
        
        <Section pad={{ vertical: 'none' }} >
          

          <Columns justify='center'>

            <Box align='center' pad='medium' margin='medium' colorIndex='light-2' separator='all'>

            </Box>

            <Box align='center' pad='medium' margin='medium' colorIndex='light-2' separator='all'>
              <Card thumbnail='https://www.chien.fr/assets/img/000/291/large/massage-canin.jpg'
                    heading='Le Massage Canin'
                    description='En apprendre plus sur les bienfaits du massage canin'
                    contentPad='none'
                    link={<Anchor href='' label='Suite' reverse={true} icon={<LinkNextIcon />} />}
              />
            </Box>

          </Columns>

        </Section>

      </Article>
    );
  }
}

MainPage.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (MainPage);
