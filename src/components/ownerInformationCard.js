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
      nom: this.refNom.componentRef.value,
      prenom: this.refPrenom.componentRef.value,
      adresse: this.refAdresse.componentRef.value,
      couriel: this.refCouriel.componentRef.value,
      telephone: this.refTelephone.componentRef.value,
    };
    
    //if there is at least 1 key value empty -> allFieldsFilled is false
    let allFieldsFilled = true;
    let invalidFormsObject = this.state.stateInvalidFormsObject;
    for (let key of Object.keys(userObject))
    {
      if(key=="telephone") continue;
      
      if(!userObject[key])
      {
        allFieldsFilled = false;
        invalidFormsObject[key] = true;
      }
      else
      {
        invalidFormsObject[key] = false;
      }
    }
    if(allFieldsFilled)
    {
      this.setState( {stateUserObject : userObject} );
      this.props.propValidForm( userObject );
    }
    
    this.setState( {stateInvalidFOrmsObject : invalidFormsObject});

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

  componentDidMount()
  {
    this.refNom.componentRef.focus();
  }
  
  render() {
    return (
      <Card description="Comment pouvons nous vous joindre:" contentPad="none">
      
        <FormField label="Nom" error={this.state.stateInvalidFormsObject.nom}>
          <TextInput ref={ textInputEl => this.refNom = textInputEl } />
        </FormField>

        <FormField label="Prénom" error={this.state.stateInvalidFormsObject.prenom}>
          <TextInput ref={ textInputEl => this.refPrenom = textInputEl } />
        </FormField>

        <FormField label="Adresse" error={this.state.stateInvalidFormsObject.adresse}>
          <ExtensibleTextArea propFocusedSize="5" propBluredSize="1" ref={ textInputEl => this.refAdresse = textInputEl }/>
        </FormField>

        <FormField label="Couriel" error={this.state.stateInvalidFormsObject.couriel}>
          <TextInput ref={ textInputEl => this.refCouriel = textInputEl } />
        </FormField>

        <FormField label="Téléphone" help={<i>Optionnel</i>}>
          <TextInput ref={ textInputEl => this.refTelephone = textInputEl } />
        </FormField>

        <Button label="Valider" type="button" primary={true} onClick={e => this.onValidateInfo(e)} />
        
      </Card>
    );
  }
}

OwnerInformationCard.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default OwnerInformationCard;