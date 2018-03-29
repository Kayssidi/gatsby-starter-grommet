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
      nom: this.refs.refNom.componentRef.value,
      age: this.refs.refAge.componentRef.value,
      race:this.refs.refRace.componentRef.value,
      pathologie: this.refs.refPathologie.componentRef.value,
    };
    console.log(dogObject);
    
    //this.setState( {stateDogObject : dogObject} );
    //this.props.propValidForm();
    
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
      this.setState( {stateUserObject : dogObject} );
      this.props.propValidForm( dogObject.nom );
    }
    
    this.setState( {stateInvalidFOrmsObject : invalidFormsObject});
  }
  
  componentDidMount()
  {
    this.refs.refNom.componentRef.focus();
  }

  render() {
    return (
      <Card
        description="Dites nous en plus sur votre animal:"
        contentPad="none"
      >
        <FormField label="Nom" error={this.state.stateInvalidFormsObject.nom}>
          <TextInput ref="refNom"/>
        </FormField>

        <FormField label="Race" error={this.state.stateInvalidFormsObject.race}>
          <TextInput ref="refRace"/>
        </FormField>
        
        <FormField label="Age" help="Optionnel">
          <TextInput ref="refAge"/>
        </FormField>

        <FormField label="Eventuelle pathologie" help="Optionnel">
          <ExtensibleTextArea propFocusedSize="5" propBluredSize="1" ref="refPathologie"/>
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

DogInformationCard.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default DogInformationCard;