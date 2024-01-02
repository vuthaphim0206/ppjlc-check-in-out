module.exports = {
  /* other config options */
  /* ... */

  // Add the exportPathmap function
  exportPathMap: async function () {
    return {
      // Define your page routes here
      '/': { page: '/' },
      // Add more routes as needed
    };
  },
  
  // Add the basePath if your app is not hosted on the root of the domain
  basePath: '/your-app-path',

  // Configure the target as `serverless`
  target: 'serverless',
};
