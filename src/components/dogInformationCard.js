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
    
    this.setState( {stateDogObject : dogObject} );
    this.props.propValidForm();
  }

  render() {
    return (
      <Card
        description="Dites nous en plus sur votre animal:"
        contentPad="none"
      >
        <FormField label="Nom">
          <TextInput ref="refNom"/>
        </FormField>

        <FormField label="Age">
          <TextInput ref="refAge"/>
        </FormField>

        <FormField label="Race">
          <TextInput ref="refRace"/>
        </FormField>

        <FormField label="Eventuelle pathologie">
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