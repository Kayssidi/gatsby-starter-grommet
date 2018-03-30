import React from "react";
import PropTypes from "prop-types";

import Header from "grommet/components/Header";
import Box from "grommet/components/Box";
import Anchor from "grommet/components/Anchor";
import Responsive from "grommet/utils/Responsive";

import Heading from "grommet/components/Heading";
import Hero from "grommet/components/Hero";
import Image from "grommet/components/Image";
import Card from "grommet/components/Card";

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

/*
  // display Icon+Label or just Label
  labelReserve = () => this.state.small ? "":"Réserver";
  labelContact = () => this.state.small ? "":"Contacter";
  labelInfo    = () => this.state.small ? "":"Information";
  labelAdmin   = () => this.state.small ? "":"Admin";
*/
  render() {
    
    let heroSize = this.state.small ? "small":"large";
    
    // display Icon+Label or just Label
    let labelReserve  = this.state.small ? "":"Réserver";
    let labelContact  = this.state.small ? "":"Contacter";
    let labelInfo     = this.state.small ? "":"Information";
    let labelAdmin    = this.state.small ? "":"Admin";

    let transparentLight2Color = this.state.small ? "#ffffff":"#f5f5f5CC";
  
    return (
      <div>
        <Header size="small" colorIndex="light-2" justify="between">

          <CmpntMenuItem label={labelReserve} path='/booking' leftMargin='large'> <CalendarIcon/> </CmpntMenuItem>
          <CmpntMenuItem label={labelInfo}    path='/info'>                       <InfoIcon />    </CmpntMenuItem>
          <CmpntMenuItem label={labelContact} path='/contact'>                    <MailIcon />    </CmpntMenuItem>
          <CmpntMenuItem label={labelAdmin}   path='/admin' rightMargin='large'>  <InboxIcon />   </CmpntMenuItem>
          
        </Header>
        
        <Hero size={heroSize} backgroundColorIndex="dark" background={ <Image src={imgHeader} fit="cover" full={true} /> }>
          <Card
              style={{backgroundColor: transparentLight2Color}}
              colorIndex="light-2"
              heading={ <Heading strong={true}>Tunousoul Massage</Heading> }
              description="Offrez à votre animal de companie une séance de massage et de détente."
              label="Massage canin à domicile"
              size="large"
              link={ <Anchor path={{ path: "/booking", index: true }} primary={true} label="Réserver une séance" /> } />
        </Hero>
      </div>
    );
  }
}

MenuHeader.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default MenuHeader;
