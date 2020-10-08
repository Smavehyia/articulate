// This module creates separation between the API and our components
// If the api changes, we will need to update this module only
// Rest of the components using the API won't need modifications
// This module can also be unit tested and expanded easily for new functionality
// without affecting rest of the application

// Duties of this module
// 1. Build a query based on user input
// 2. Issue the query
// 3. Normalize the results for consumption by other components
