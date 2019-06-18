import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

class TreatmentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      medication_name: '',
      medication_dosage: '',
      medication_side_effects: '',
      therapy_type: '',
      comments: ''
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }



  handleOnSubmit = event => {
    event.preventDefault()
    console.log('A');
    this.props.createLogin(this.props.loginFormData)
      .then(this.props.resetLoginForm)
    console.log('B');
  }
  render() {
    const { medication_name, medication_dosage, medication_side_effects, therapy_type, comments} = this.state

    return (
      <div className="LoginForm">
        <h2>Signup or Login</h2>
        <FormControl onSubmit={this.handleOnSubmit} >
          <div key={this.id}>
            <TextField
              type="string"
              onChange={this.handleOnChange}
              name="medication_name"
              value={medication_name}
              label="Medication Name"
              margin="normal"
            />
          </div>
          < br />
          <div>
            <TextField
              type="string"
              onChange={this.handleOnChange}
              name="medication_dosage"
              value={medication_dosage}
              label="Medication Dosage"
            />
          </div>
          < br />
          <div>
            <TextField
              type="string"
              onChange={this.handleOnChange}
              name="medication_side_effects"
              value={medication_side_effects}
              label="Side Effects"
            />
          </div>
          < br />
          <div>
            <TextField
              type="string"
              onChange={this.handleOnChange}
              name="therapy_type"
              value={therapy_type}
              label="Therapy Type"
            />
          </div>
          < br />
          <div>
            <TextField
              onChange={this.handleOnChange}
              name="comments"
              value={comments}
              label="Comments"
              type="string"
            />
          </div>
          < br />


          <Button type="submit" variant="contained" color="primary">
            Login
                </Button>

        </FormControl>
      </div>
    )
  }
}



export default (TreatmentForm)
