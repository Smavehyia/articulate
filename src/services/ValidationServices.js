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
    // Email validation
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
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
