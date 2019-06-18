import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

class TherapistForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      therapist_name: '',
      therapist_location: '',
      therapist_rating: '',
      therapist_comments: ''
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
    const { therapist_name, therapist_location, therapist_rating, therapist_comments} = this.state

    return (
      <div className="LoginForm">
        <h2>Therapist</h2>
        <FormControl onSubmit={this.handleOnSubmit} >
          <div key={this.id}>
            <TextField
              type="string"
              onChange={this.handleOnChange}
              name="therapist_name"
              value={therapist_name}
              label="Therapist Name"
              margin="normal"
            />
          </div>
          < br />
          <div>
            <TextField
              type="string"
              onChange={this.handleOnChange}
              name="therapist_location"
              value={therapist_location}
              label="Therapist Location"
            />
          </div>
          < br />
          <div>
            <TextField
              type="string"
              onChange={this.handleOnChange}
              name="therapist_rating"
              value={therapist_rating}
              label="Therapist Rating"
            />
          </div>
          < br />
          <div>
            <TextField
              type="text"
              onChange={this.handleOnChange}
              name="therapist_comments"
              value={therapist_comments}
              label="Comments"
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



export default (TherapistForm)
