import React from "react";
import PropTypes from "prop-types";

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Columns from 'grommet/components/Columns';
import Toast from 'grommet/components/Toast';

class ClassTemplate extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    
    //this.callbackFunction = this.callbackFunction.bind(this);
    this.handleConfirmationToastClose = this.handleConfirmationToastClose.bind(this);
    
    
      this.state =
      {
          stateShowConfirmationToast : false,
          stateMissingContact : false,
          stateMissingMessage : false,
      }
    
  }
  
  handleSendMessageClick (e)
  {
    e.preventDefault();

    let fieldMissing= false;
    
    const contactString = this.refs.refCourriel.componentRef.value.trim();
    const messageString = this.refs.refMessage.value.trim();
    
    if( contactString.length === 0 ) fieldMissing = true;
    if( messageString.length === 0 ) fieldMissing = true;
    
    this.setState( { stateMissingContact : (contactString.length === 0) } );
    this.setState( { stateMissingMessage : (messageString.length === 0) } );
    
    if(fieldMissing) return;
    
    this.refs.refCourriel.componentRef.value = "";
    this.refs.refMessage.value = "";
    
    this.setState( {stateShowConfirmationToast : true} );
  }
  
  handleConfirmationToastClose()
  {
    this.setState( {stateShowConfirmationToast : false} );
  }

  render() {
    return (
      <Article>

      {
        this.state.stateShowConfirmationToast ?
        (<Toast status='ok' onClose={this.handleConfirmationToastClose}>
            Merci, votre message a bien été envoyé! Nous vous recontacterons très rapidement.
        </Toast>) : null
      }
        <Columns justify='center'>
          <Section align='center' pad='medium' margin='medium' colorIndex='light-2' separator='all'>
            <Form>
            
              <FormField label="Courriel ou Téléphone" error={this.state.stateMissingContact?"Merci d'indiquer un moyen de vous contacter":null} >
                <TextInput ref="refCourriel" onDOMChange={ () => { this.setState({stateMissingContact:false})} } />
              </FormField>
              
              <FormField label="Message" error={this.state.stateMissingMessage?"Vous n'avez rien à nous dire? :)":null}>
                <textarea rows="5" type="text" ref="refMessage" onChange={ () => { this.setState({stateMissingMessage:false})} }/>
              </FormField>
              
              <Button label="Envoyer!" type="submit" primary={true} onClick={ (e) => this.handleSendMessageClick(e) }/>
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