import React from "react";
import PropTypes from "prop-types";

import Card from "grommet/components/Card";
import FormField from "grommet/components/FormField";
import TextInput from "grommet/components/TextInput";
import Button from "grommet/components/Button";

import base from "../database/base";

import ExtensibleTextArea from "./extensibleTextArea";

class OwnerInformationCard extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.onValidateInfo = this.onValidateInfo.bind(this);

    this.state = {
      stateUserObject:undefined,
      stateInvalidFormsObject:{},
    };
  }

  onValidateInfo(event) {
    event.preventDefault();

    //console.log(this.state.stateHasBeenValidated);
    let userObject = {
      nom: this.refs.refNom.componentRef.value,
      prenom: this.refs.refPrenom.componentRef.value,
      adresse: this.refs.refAdresse.componentRef.value,
      couriel: this.refs.refCouriel.componentRef.value,
      telephone: this.refs.refTelephone.componentRef.value,
    };
    console.log(userObject);
    
    //if there is at least 1 key value empty -> allFieldsFilled is false
    let allFieldsFilled = true;
    for (let key of Object.keys(userObject))
    {
      if(!userObject[key])
      {
        allFieldsFilled = false;
      }
    }
    if(allFieldsFilled)
    {
      this.setState( {stateUserObject : userObject} );
      this.props.propValidForm();
    }
    //console.log(this.refs);

    /*base
      .push(`users/`, { data: userObject })
      .then(() => {
        this.props.propValidForm();
      })
      .catch(err => {
        // handle error
      });
    */
  }

  render() {
    return (
      <Card
        description="Comment pouvons nous vous joindre:"
        contentPad="none"
      >
        <FormField label="Nom" error="">
          <TextInput ref="refNom" />
        </FormField>

        <FormField label="Prénom" error="Nop">
          <TextInput ref="refPrenom" />
        </FormField>

        <FormField label="Adresse">
          <ExtensibleTextArea propFocusedSize="5" propBluredSize="1" ref="refAdresse"/>
        </FormField>

        <FormField label="Couriel" error={this.state.stateInvalidFormsObject.couriel}>
          <TextInput ref="refCouriel" />
        </FormField>

        <FormField label="Téléphone">
          <TextInput ref="refTelephone" />
        </FormField>

        <Button
          label="Valider"
          type="button"
          primary={true}
          onClick={e => this.onValidateInfo(e)}
        />
      </Card>
    );
  }
}

OwnerInformationCard.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default OwnerInformationCard;