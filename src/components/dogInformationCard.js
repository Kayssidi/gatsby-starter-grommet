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
      <Card
        description="Dites nous en plus sur votre animal:"
        contentPad="none"
      >
        <FormField label="Nom">
          <TextInput />
        </FormField>

        <FormField label="Age">
          <TextInput />
        </FormField>

        <FormField label="Race">
          <TextInput />
        </FormField>

        <FormField label="Eventuelle pathologie">
          <ExtensibleTextArea propFocusedSize="5" propBluredSize="1"/>
        </FormField>

        <Button
          label="Valider"
          type="button"
          primary={true}
          onClick={ () => this.props.propValidForm() }
        />
      </Card>
    );
  }
}

DogInformationCard.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default DogInformationCard;