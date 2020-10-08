import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Signup.css';
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import ValidateSignUpForm from '../services/ValidationServices';
import SignUpCall from '../API/SignUp/SignUp';

export default function SignUp() {
  return (
    <div className="form-container">
      <h1>Sign Up Form</h1>
      <Formik
        className="form"
        initialValues={{
          email: '', password: '', userName: '', confirmPassword: '',
        }}
        validate={(values) => ValidateSignUpForm(values)}
        onSubmit={async (values) => {
          try {
            await SignUpCall(values);
            const token = window.localStorage.getItem('token');

            if (token) {
              return <Redirect to="/dashboard" />;
            }
          } catch (err) {
            // TODO: show a popup with error
            console.log('Sign Up error:', err);
          }

          return false;
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="form" noValidate autoComplete="off">
            <TextField
              id="userName"
              name="userName"
              label="User Name"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userName}
              fullWidth
            />
            {errors.userName && touched.userName && errors.userName}
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              fullWidth
            />
            {errors.email && touched.email && errors.email}
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              fullWidth
            />
            {errors.password && touched.password && errors.password}
            <TextField
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              fullWidth
            />
            {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
            <div>
              <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                Sign Up
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
