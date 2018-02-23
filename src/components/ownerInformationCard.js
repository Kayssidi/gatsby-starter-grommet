import React from "react";
import PropTypes from "prop-types";

import Card from "grommet/components/Card";
import Form from "grommet/components/Form";
import FormField from "grommet/components/FormField";
import TextInput from "grommet/components/TextInput";
import Button from "grommet/components/Button";
import Label from "grommet/components/Label";

import base from "../database/base";

// http://grommet.io/docs/icon/
import UserIcon from "grommet/components/icons/base/User";
import ValidateIcon from "grommet/components/icons/base/Validate";
import Status from "grommet/components/icons/Status";

class OwnerInformationCard extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.onValidateInfo = this.onValidateInfo.bind(this);

    this.state = {
      stateHasBeenValidated: false,
      stateOwnersInformation: undefined
    };
  }

  onValidateInfo(event) {
    event.preventDefault();
    //this.setState({ stateHasBeenValidated: true });
    //console.log(this.state.stateHasBeenValidated);
    let userObject = {
      nom: this.refs.refNom.componentRef.value,
      prenom: this.refs.refPrenom.componentRef.value,
      adresse: this.refs.refAdresse.value,
      couriel: this.refs.refCouriel.componentRef.value,
      telephone: this.refs.refTelephone.componentRef.value
    };
    console.log(userObject);
    //console.log(this.refs.refAdresse);

    base
      .push(`users/`, { data: userObject })
      .then(() => {
        this.setState({ stateHasBeenValidated: true });
      })
      .catch(err => {
        // handle error
      });
  }

  render() {
    return (
      <Card
        description="Comment pouvons nous vous joindre:"
        contentPad="none"
        label={<UserIcon />}
      >
        <FormField label="Nom">
          <TextInput ref="refNom" />
        </FormField>

        <FormField label="Prénom">
          <TextInput ref="refPrenom" />
        </FormField>

        <FormField label="Adresse">
          <textarea rows="3" type="text" ref="refAdresse" />
        </FormField>

        <FormField label="Couriel">
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
          icon={this.state.stateHasBeenValidated ? <Status value="ok" /> : null}
        />
      </Card>
    );
  }
}

OwnerInformationCard.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default OwnerInformationCard;