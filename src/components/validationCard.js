import React from "react";
import PropTypes from "prop-types";

import Card from "grommet/components/Card";
import FormField from "grommet/components/FormField";
import TextInput from "grommet/components/TextInput";
import Button from "grommet/components/Button";

import ExtensibleTextArea from "./extensibleTextArea";

import base from "../database/base";
import moment from "moment";

class ValidationCard extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.onValidateInfo = this.onValidateInfo.bind(this);
    this.onValidateUserInfo = this.onValidateUserInfo.bind(this);
    this.onValidateDogInfo = this.onValidateDogInfo.bind(this);

/*
      this.state =
      {
          stateTextAreaFocused : false,
      }
*/
  }
  
  onValidateInfo(event) {
    event.preventDefault();
    
    let uid;
    base.push(`users/`, { data: this.props.propUserObject })
        .then( (newLocation) => {
                                  uid = newLocation.key;
                                  this.props.propDogObject.user = uid;
                                  this.userUid = uid;
                                  this.onValidateUserInfo();
                })
        .catch( err => { console.log("error"); });

  }
  
  onValidateUserInfo() {
    let uid;
    base.push(`dogs/`, { data: this.props.propDogObject })
        .then( (newLocation) => {
                                  uid = newLocation.key;
                                  this.dogUid = uid;
                                  this.onValidateDogInfo();
                })
        .catch( err => { console.log("error2"); });
  }
  
  onValidateDogInfo()
  {
    let dateTimeObject = {
      user : this.userUid,
      dog  : this.dogUid,
    }
    base.push(`booking/${this.props.propBookingDateTime}`, { data: dateTimeObject })
        .then( (newLocation) => { this.props.propValidForm(); })
        .catch( err => { console.log("error3"); });
  }
  
  render() {
    
  //buttonTxt = () => `Réserver le ${moment(this.state.stateDateSelected).format("DD/MM/YYYY")}
  //                   à ${moment(this.state.stateTimeSelected, ["H:m"]).format("HH:mm")}`;
    let bookingDate = moment(this.props.propBookingDateTime).format("DD/MM/YYYY");
    let bookingTime = moment(this.props.propBookingDateTime, ["H:m"]).format("HH:mm");
                     
    let desciptionLabel = `Souhaitez vous nous communiquer une information supplémentaire avant de valider de réserver de la séance du ${bookingDate} à ${bookingTime} pour ${this.props.propDogObject.nom}?`;
    
    return (
        <Card
          description={desciptionLabel}
          contentPad="none"
        >
          <FormField label="Une question? Une précision? Dites nous tout ...">
            <ExtensibleTextArea propFocusedSize="10" propBluredSize="5"/>
          </FormField>

          <Button label="Réserver la séance" type="button" primary={true} onClick={e => this.onValidateInfo(e)}/>

        </Card>
    );
  }
}

ValidationCard.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default ValidationCard;