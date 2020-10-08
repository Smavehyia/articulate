import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Signup.css';

export default function SignUp() {
  return (
    <div className="form-container">
      <h1>Sign Up Form</h1>
      <form className="form" noValidate autoComplete="off">
        <TextField id="userName" label="User Name" variant="outlined" fullWidth />
        <TextField id="email" label="Email" variant="outlined" fullWidth />
        <TextField id="password" label="Password" variant="outlined" fullWidth />
        <TextField id="confirmPassword" label="Confirm Password" variant="outlined" fullWidth />
      </form>
      <Button variant="contained" color="primary">
        Sign Up
      </Button>
    </div>
  );
}
