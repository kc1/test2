// https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget/

// require('dotenv').config();
const fetch = require('node-fetch');
// const { EMAIL_TOKEN } = process.env
exports.handler = async event => {

  // EMAIL, ASKING

  // const email = 'bob123@mailinator.com';
  const email = JSON.parse(event.body).payload.EMAIL
  // const asking = '70000';
  const asking = JSON.parse(event.body).payload.ASKING
  console.log(`Recieved a submission: ${email}`)

  var formData = { 'email': email, 'first_name': '', 'last_name': asking, 'lists[]': 'LIST_NUM' };
  var encoded = Object.entries(formData).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");
  var endpoint = 'https://api.sendfox.com/contacts/?' + encoded;

  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer TOKEN-GOES-HERE',
      'Content-Type': 'application/json',
    }
    // body: JSON.stringify({ email }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted to Sendfox:\n ${data}`)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}
