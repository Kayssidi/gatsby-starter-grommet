import React from "react";
import PropTypes from "prop-types";

import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Label from 'grommet/components/Label';

import Status from 'grommet/components/icons/Status';
import CalendarIcon from "grommet/components/icons/base/Calendar";
import UserIcon from "grommet/components/icons/base/User";
import FavIcon from "grommet/components/icons/base/Favorite";
import LikeIcon from "grommet/components/icons/base/Like";
import Pulse from "grommet/components/icons/Pulse";

//const CmpntStateless = props => <div>{props.children}</div>;

/*
const CmpntStateless2 = props =>  {
                                    const var = 0;
                                    return (
                                      <div>{props.children}</div>
                                    );
                                  }
*/
const CmpntFormLabel = props => {
                                  const label = ['Réservation', 'Information' , 'Votre Animal' , 'Confirmation'];
                                  return (
                                    <Label margin="none" size="small">{label[props.propStep]}</Label>
                                  );
                                }
/*
const CmpntStateless3 = props => {
                                    return props.myProp? <div>{props.children}</div> : <div>{props.children}</div>
                                 }
*/

class FormProgress extends React.Component {
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
      <Box direction="column">
        <CmpntFormLabel propStep={this.props.propCurrentProgress}/>
        <Meter value={this.props.propCurrentProgress*25}/>
          <Box justify="between" direction="row" responsive={false}>
            { this.props.propCurrentProgress>=1?
                <Status value='ok' />
               :<CalendarIcon colorIndex={this.props.propCurrentProgress==0?"brand":"plain"}/>
            }
            { this.props.propCurrentProgress>=2?
                <Status value='ok' />
               :<UserIcon colorIndex={this.props.propCurrentProgress==1?"brand":"plain"}/>
            }
            { this.props.propCurrentProgress>=3?
                <Status value='ok' />
               :<FavIcon colorIndex={this.props.propCurrentProgress==2?"brand":"plain"}/>
            }
            { this.props.propCurrentProgress>=4?
                <Status value='ok' />
               :<LikeIcon colorIndex={this.props.propCurrentProgress==3?"brand":"plain"}/>
            }
        </Box>
      </Box>
      );
  }
}

FormProgress.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (FormProgress);
