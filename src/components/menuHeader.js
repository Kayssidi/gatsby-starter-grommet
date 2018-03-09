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
import CalendarIcon from "grommet/components/icons/base/Calendar";
import InfoIcon from "grommet/components/icons/base/Info";
import MailIcon from "grommet/components/icons/base/Mail";
import InboxIcon from "grommet/components/icons/base/Inbox";

// http://grommet.io/docs/color/

import imgHeader from "../assets/img/IMG_20141101_141538.jpg";

const CmpntMenuItem = props => {
                                const leftMargin  = props.leftMargin  ? props.leftMargin  : "none";
                                const rightMargin = props.rightMargin ? props.rightMargin : "none";
                                return (
                                  <Box margin={{ left:leftMargin, right:rightMargin }}>
                                    <Anchor icon={props.children} label={props.label} path={{ path: props.path, index: true }} />
                                  </Box>
                                );
                              }

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

  // display Icon+Label or just Label
  labelReserve = () => this.state.small ? "":"Réserver";
  labelContact = () => this.state.small ? "":"Contacter";
  labelInfo    = () => this.state.small ? "":"Information";
  labelAdmin   = () => this.state.small ? "":"Admin";

  render() {
    return (
      <div>
        <Header size="small" colorIndex="light-2" justify="between">

          <CmpntMenuItem label={this.labelReserve()} path='/booking' leftMargin='large'><CalendarIcon /></CmpntMenuItem>
          <CmpntMenuItem label={this.labelInfo()}    path='/info'><InfoIcon /></CmpntMenuItem>
          <CmpntMenuItem label={this.labelContact()} path='/contact'><MailIcon /></CmpntMenuItem>
          <CmpntMenuItem label={this.labelAdmin()}   path='/admin' rightMargin='large'><InboxIcon /></CmpntMenuItem>
          
        </Header>
        <Hero
          background={
            <Image
              src={imgHeader}
              fit="cover"
              full={true}
            />
          }
          size="small"
          backgroundColorIndex="dark"
        >
          <Heading margin="none"><Anchor label="Tunousoul Massage" path={{ path: '/', index: true }}/></Heading>
        </Hero>
      </div>
    );
  }
}

MenuHeader.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default MenuHeader;
