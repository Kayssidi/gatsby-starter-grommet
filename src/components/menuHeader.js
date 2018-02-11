import React from "react";
import PropTypes from "prop-types";

import Header from "grommet/components/Header";
import Box from "grommet/components/Box";
import Anchor from "grommet/components/Anchor";
import Responsive from "grommet/utils/Responsive";

import Heading from "grommet/components/Heading";
import Hero from "grommet/components/Hero";
import Image from "grommet/components/Image";

// http://grommet.io/docs/icon/
import FavIcon from "grommet/components/icons/base/Favorite";
import HelpIcon from "grommet/components/icons/base/Help";
import MailIcon from "grommet/components/icons/base/Mail";

// http://grommet.io/docs/color/

class MenuHeader extends React.Component {
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
    return (
      <div>
        <Header size="small" colorIndex="light-2">
          <Box responsive full="horizontal" justify="center" textAlign="center">
            {this.state.small ? (
              <Anchor id="anchorFav" icon={<FavIcon />} label="" href="#" />
            ) : (
              <Anchor icon={<FavIcon />} label="R?server" href="#" />
            )}
          </Box>

          <Box responsive full="horizontal" justify="center" textAlign="center">
            {this.state.small ? (
              <Anchor icon={<MailIcon />} label="" href="#" />
            ) : (
              <Anchor icon={<MailIcon />} label="Contacter" href="#" />
            )}
          </Box>

          <Box responsive full="horizontal" justify="center" textAlign="center">
            {this.state.small ? (
              <Anchor icon={<HelpIcon />} label="" href="#" />
            ) : (
              <Anchor icon={<HelpIcon />} label="Information" href="#" />
            )}
          </Box>
        </Header>
        <Hero
          background={
            <Image
              src="http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Dachshund-2.jpg"
              fit="cover"
              full={true}
            />
          }
          size="small"
          backgroundColorIndex="dark"
        >
          <Heading margin="none">Tunousoul Massage</Heading>
        </Hero>
      </div>
    );
  }
}

MenuHeader.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default MenuHeader;
