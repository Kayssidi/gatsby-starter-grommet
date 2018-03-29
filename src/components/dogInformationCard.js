import React from "react";
import PropTypes from "prop-types";

import Card from "grommet/components/Card";
import FormField from "grommet/components/FormField";
import TextInput from "grommet/components/TextInput";
import Button from "grommet/components/Button";

import ExtensibleTextArea from "./extensibleTextArea";

class DogInformationCard extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.onValidateInfo = this.onValidateInfo.bind(this);
    
    this.state =
    {
        stateDogObject:undefined,
        stateInvalidFormsObject:{},
    }
  }
  
  onValidateInfo(event) {
    event.preventDefault();

    let dogObject = {
      nom: this.refNom.componentRef.value,
      age: this.refAge.componentRef.value,
      race:this.refRace.componentRef.value,
      pathologie: this.refPathologie.componentRef.value,
    };
    
    //if there is at least 1 key value empty -> allFieldsFilled is false
    let allFieldsFilled = true;
    let invalidFormsObject = this.state.stateInvalidFormsObject;
    for (let key of Object.keys(dogObject))
    {
      if(key=="age") continue;
      if(key=="pathologie") continue;
      
      if(!dogObject[key])
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
      this.setState( {stateDogObject : dogObject} );
      this.props.propValidForm( dogObject.nom );
    }
    
    this.setState( {stateInvalidFormsObject : invalidFormsObject} );
  }
  
  componentDidMount()
  {
    this.refNom.componentRef.focus();
  }

  render() {
    return (
      <Card description="Dites nous en plus sur votre animal:" contentPad="none" >
      
        <FormField label="Nom" error={this.state.stateInvalidFormsObject.nom}>
          <TextInput ref={ textInputEl => this.refNom = textInputEl }/>
        </FormField>

        <FormField label="Race" error={this.state.stateInvalidFormsObject.race}>
          <TextInput ref={ textInputEl => this.refRace = textInputEl }/>
        </FormField>
        
        <FormField label="Age" help="Optionnel">
          <TextInput ref={ textInputEl => this.refAge = textInputEl }/>
        </FormField>

        <FormField label="Eventuelle pathologie" help="Optionnel">
          <ExtensibleTextArea propFocusedSize="5" propBluredSize="1" ref={ textInputEl => this.refPathologie = textInputEl }/>
        </FormField>

        <Button label="Valider" type="button" primary={true} onClick={e => this.onValidateInfo(e)} />
        
      </Card>
    );
  }
}

DogInformationCard.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default DogInformationCard;