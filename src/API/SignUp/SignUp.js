import Axios from 'axios';
// This module creates separation between the API and our components
// If the api changes, we will need to update this module only
// Rest of the components using the API won't need modifications
// This module can also be unit tested and expanded easily for new functionality
// without affecting rest of the application

// Duties of this module
// 1. Build a query based on user input
// 2. Issue the query
// 3. Normalize the results for consumption by other components

function buildSignUpQuery({
  userName, email, password, confirmPassword,
}) {
  // TODO: encrypt the password before making a request
  return {
    body: {
      userName,
      email,
      password,
      confirmPassword,
    },
  };
}

function normalizeResponse(response) {
  return response;
}

export default async function SignUpCall(payload) {
  const query = buildSignUpQuery(payload);
  const options = {
    method: 'post',
    // TODO: use env variable for prefix
    url: 'http://localhost:5001/articulate-3fb4b/us-central1/api/signup',
    data: query.body,
  };

  try {
    const response = await Axios(options);
    // Set token
    if (response.data.token) {
      window.localStorage.setItem('token', response.data.token);
    }
    console.log('response', response);
  } catch (err) {
    console.log('error', err);
  }
}
