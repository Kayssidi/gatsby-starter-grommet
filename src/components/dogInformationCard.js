import React from "react";
import PropTypes from "prop-types";

import Card from "grommet/components/Card";
import Form from "grommet/components/Form";
import FormField from "grommet/components/FormField";
import TextInput from "grommet/components/TextInput";
import Button from "grommet/components/Button";

// http://grommet.io/docs/icon/
import FavIcon from "grommet/components/icons/base/Favorite";

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
        label={<FavIcon />}
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
          <textarea rows="5" type="text" />
        </FormField>

        <Button label="Valider" type="submit" primary={true} />
      </Card>
    );
  }
}

DogInformationCard.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default DogInformationCard;