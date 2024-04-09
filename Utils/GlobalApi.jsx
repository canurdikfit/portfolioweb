
const API_KEY = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const API_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const contentful = require("contentful");

const client = contentful.createClient({
  space: API_KEY,
  accessToken: API_TOKEN,
});

export { client };
