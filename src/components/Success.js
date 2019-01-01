import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // this is where you can process form info through backend
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success"></AppBar>
          <h1>Thank you for your submission!</h1>
          <p>You will get an email regarding your new account soon.</p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Success
