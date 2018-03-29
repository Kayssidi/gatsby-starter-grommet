import React from "react";
import PropTypes from "prop-types";

import Card from "grommet/components/Card";
import FormField from "grommet/components/FormField";
import TextInput from "grommet/components/TextInput";
import Button from "grommet/components/Button";

import ExtensibleTextArea from "./extensibleTextArea";

import moment from "moment";

class ValidationCard extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.onValidateInfo = this.onValidateInfo.bind(this);

/*
      this.state =
      {
          stateTextAreaFocused : false,
      }
*/
  }
  
  onValidateInfo(event) {
    event.preventDefault();
    this.props.propValidForm();
  }
  
  render() {
    
  //buttonTxt = () => `Réserver le ${moment(this.state.stateDateSelected).format("DD/MM/YYYY")}
  //                   à ${moment(this.state.stateTimeSelected, ["H:m"]).format("HH:mm")}`;
    let bookingDate = moment(this.props.propBookingDateTime).format("DD/MM/YYYY");
    let bookingTime = moment(this.props.propBookingDateTime, ["H:m"]).format("HH:mm");
                     
    let desciptionLabel = `Souhaitez vous nous communiquer une information supplémentaire avant de valider de réserver de la séance du ${bookingDate} à ${bookingTime} pour ${this.props.propDogName}?`;
    
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