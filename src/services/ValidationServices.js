const ValidateForm = (values, type = '') => {
  const errors = {};

  if (!values) return errors;

  // Username validation
  if (!values.userName) {
    errors.userName = 'Required';
  }

  // Password validation
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8 || values.password.length > 10) {
    errors.password = 'Password must be between 8 to 10 characters long.';
  }

  if (type !== 'login') {
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailPasses = values.email.match(emailRegEx);

    // Email validation
    if (!values.email) {
      errors.email = 'Required';
    } else if (!emailPasses) {
      errors.email = 'Invalid email address';
    }
    // Confirm password validation
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Required';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Password fields do not match.';
    }
  }

  return errors;
};

export default ValidateForm;
