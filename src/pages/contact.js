import React from "react";
import PropTypes from "prop-types";

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Columns from 'grommet/components/Columns';

class ClassTemplate extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    
    //this.callbackFunction = this.callbackFunction.bind(this);
    
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
      <Article scrollStep={true} controls={true}>

        <Columns justify='center'>
          <Section align='center' pad='medium' margin='medium' colorIndex='light-2' separator='all'>
            <Form>
            
              <FormField label="email">
                <TextInput />
              </FormField>
              
              <FormField label="message">
                <TextInput />
              </FormField>
              
              <Button label="Envoyer!" type="submit" primary={true}/>
            </Form>
          </Section>
        </Columns>

      </Article>

    );
  }
}

ClassTemplate.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (ClassTemplate);
