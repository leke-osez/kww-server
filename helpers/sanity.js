const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "8funxy33",
  dataset: "production",
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

module.exports = client
