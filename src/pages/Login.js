import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Signup.css';
import { Formik } from 'formik';
import ValidateForm from '../services/ValidationServices';

export default function Login() {
  // This entire component can be deleted
  // with some refactoring in the future
  // very similar to sign up
  return (
    <div className="form-container">
      <h1>Login Form</h1>
      <Formik
        className="form"
        initialValues={{ password: '', userName: '' }}
        validate={(values) => ValidateForm(values, 'login')}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
            <div>
              <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                Login
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
