import React from "react";
import PropTypes from "prop-types";

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';

import Card from 'grommet/components/Card';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Responsive from "grommet/utils/Responsive";
import Image from 'grommet/components/Image';

// http://grommet.io/docs/icon/
import LinkNextIcon from "grommet/components/icons/base/LinkNext";

import imgTwingo from "../assets/img/IMG_20150117_125018.jpg";
import imgGrenoble from "../assets/img/Screenshot2018-04-08.png";

import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';

class MainPage extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this._onResponsive = this._onResponsive.bind(this);
  }

  componentDidMount() {
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount() {
    this._responsive.stop();
  }

  _onResponsive(small) {
    this.setState({ small });
  }
  
  render() {
    
    const fullSection = this.state.small ? "vertical":"false";
    
    return (

      <Article >

        <Section pad='large'  align='center' full={fullSection}>
          <Box direction="row">
            <Card thumbnail='https://www.chien.fr/assets/img/000/291/large/massage-canin.jpg'
                  alignSelf="start"
                  heading='Le Massage Canin'
                  link={<Anchor path={{ path: "/info", index: false }} label='En apprendre plus' reverse={true} icon={<LinkNextIcon />} primary={true} />}
            />
            <Box pad='small' alignSelf="start">
              <Paragraph margin="none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus metus sed urna ultricies, sed varius massa faucibus. Pellentesque at est aliquet, congue lorem at, imperdiet tellus. Duis commodo ipsum et condimentum ultricies. Donec finibus mattis justo eu faucibus. Aliquam sagittis justo eget ligula malesuada, quis egestas ipsum fermentum. Aenean lacinia purus felis. Ut sed nibh et nunc sodales accumsan. Proin eu libero euismod, volutpat ante quis, laoreet est. Phasellus porta magna vitae sem gravida iaculis. Nullam rhoncus, orci a laoreet laoreet, nisl neque semper leo, vel imperdiet elit dui vel neque.
              </Paragraph>
            </Box>
          </Box>
          
        </Section>
        <Section pad='large' justify='center' align='center' colorIndex='light-2' full={fullSection}>
          <Box direction="row" reverse={this.state.small}>
            <Box pad='small' alignSelf="start">
              <Paragraph margin="none">
                Avec la Tumesoul Mobile, je peux surmonter tout les obstacles de la région Grenobloise pour me rendre à votre domicile.
              </Paragraph>
              <Image src={imgGrenoble} />
            </Box>
            <Card thumbnail={imgTwingo}
                  alignSelf="start"
                  heading="J'arrive chez vous"
                  link={<Anchor path={{ path: "/info", index: false }} label='Réserver dans plus attendre' reverse={true} icon={<LinkNextIcon />} primary={true} />}
            />
          </Box>
        </Section>
        
        <Section pad='large' justify='center' align='center' colorIndex='light-1' full={fullSection}>
          <Box direction="row" reverse={this.state.small} justify="around" full="horizontal">
            <Box responsive={false} align='center'>
              <Meter vertical={false} type='arc' value={99.99} />
              <Value value={99.99} units='%' />
            </Box>
            <Box>
              <Headline size="small">99.99% de client satisfait (c'est précis)</Headline>
              <Paragraph>
                Nous restons joignable pour répondre à toutes vos interogations.
              </Paragraph>
              <Anchor path={{ path: "/contact", index: false }} label='Contactez-nous' reverse={true} icon={<LinkNextIcon />} primary={true} />
            </Box>
          </Box>
        </Section>

      </Article>
    );
  }
}

MainPage.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (MainPage);
