import React from "react";
import PropTypes from "prop-types";

class ExtensibleTextArea extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    
    //this.callbackFunction = this.callbackFunction.bind(this);
    this.cbOnFocus = this.cbOnFocus.bind(this);
    this.cbOnBlur = this.cbOnBlur.bind(this);
    
    this.state =
    {
      stateFocused : false,
    }
  }

  cbOnFocus() { this.setState( {stateFocused:true}); }
  cbOnBlur() { this.setState( {stateFocused:false}); }

  render() {
    return (
      <textarea rows={this.state.stateFocused ? this.props.propFocusedSize:this.props.propBluredSize}
                type="text"
                onFocus={this.cbOnFocus}
                onBlur={this.cbOnBlur}
      />
    );
  }
}

ExtensibleTextArea.propTypes = {
  propFocusedSize: PropTypes.string.isRequired,
  propBluredSize:  PropTypes.string.isRequired,
  
};

export default (ExtensibleTextArea);
