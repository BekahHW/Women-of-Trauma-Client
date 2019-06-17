import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: ''
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
    const { first_name, last_name, username, email, password } = this.state

    return (
      <div className="LoginForm">
        <h2>Signup or Login</h2>
        <FormControl onSubmit={this.handleOnSubmit} >
          <div key={this.id}>
            {/* <label htmlFor="first_name">First Name</label> */}
            <TextField
              type="string"
              onChange={this.handleOnChange}
              name="first_name"
              value={first_name}
              id="standard-name"
              label="First Name"
              margin="normal"
            />
          </div>
          < br />
          <div>
          {/* <label htmlform="last_name">Last Name</label> */}
            <TextField
            type="string"
            onChange={this.handleOnChange}
            name="last_name"
            value={last_name}
            label="Last Name"
          />
          </div>
        < br />
          <div>
            <TextField
              type="string"
              onChange={this.handleOnChange}
              name="username"
              value={username}
              label="Username"
            />
          </div>
          < br />
            <div>
            <TextField
              type="email"
              onChange={this.handleOnChange}
              name="email"
              value={email}
              label="Email"
              autoComplete="email"

            />
          </div>
          < br />    
          <div>
            <TextField
              onChange={this.handleOnChange}
              name="password"
              value={password}
              label="Password"
              type="password"
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



// const mapStateToProps = (state) => {
//   return ({
//     narrativeFormData: state.narrativeFormData,
//   })
// }
// export default (withStyles(styles),
  // withTheme)(LoginForm)

export default (LoginForm)
