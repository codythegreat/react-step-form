import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }


  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details"></AppBar>
          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            name='occupation'
            onChange={handleChange}
            defaultValue={values.occupation}
          />
          <br/>
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            name='city'
            onChange={handleChange}
            defaultValue={values.city}
          />
          <br/>
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            name='bio'
            onChange={handleChange}
            defaultValue={values.bio}
          />
          <br/>
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  botton: {
    margin: 15
  }
};

export default FormPersonalDetails
