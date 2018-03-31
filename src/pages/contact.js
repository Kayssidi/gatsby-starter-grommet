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
import Notification from 'grommet/components/Notification';

import base from "../database/base";
import moment from "moment";

class ContactPage extends React.Component {

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
    const ts = moment().format();
    
    if( contactString.length === 0 ) fieldMissing = true;
    if( messageString.length === 0 ) fieldMissing = true;
    
    this.setState( { stateMissingContact : (contactString.length === 0) } );
    this.setState( { stateMissingMessage : (messageString.length === 0) } );
    
    if(fieldMissing) return;
    
    const messageObject =
    {
      contact : contactString,
      message : messageString,
      timestamp : ts,
    }
    
    base.push(`inbox/`, { data: messageObject })
        .then( () => {
                      this.refs.refCourriel.componentRef.value = "";
                      this.refs.refMessage.value = "";
                      this.setState( {stateShowConfirmationToast : true} );
                     })
        .catch( err => { /* handle error */ });
  }
  
  handleConfirmationToastClose()
  {
    this.setState( {stateShowConfirmationToast : false} );
  }

  render() {
    
    let validationNotif = null;
    if(this.state.stateShowConfirmationToast)
      validationNotif = <Notification message='Merci, votre message a bien été envoyé! Nous vous répondrons très rapidement.'
                                      status='ok' margin='small'
                                      closer={true} onClose={ () => this.handleConfirmationToastClose() }/>;
    
    return (
      <Article>
        {validationNotif}
        <Columns justify='center'>
          <Section align='center' pad='medium' margin='medium' colorIndex='light-2' separator='all'>
            <Form>
            
              <FormField label="Courriel ou Téléphone" error={this.state.stateMissingContact?"Merci d'indiquer un moyen de vous contacter":null}>
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

ContactPage.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (ContactPage);