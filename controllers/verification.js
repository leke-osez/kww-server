const crypto = require('crypto');
const client = require('../helpers/sanity.js')
const secret = process.env.SECRET_KEY_PAYSTACK;

exports.handleVerification = async (req, res)=>{
    const hash = crypto.createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');
    if (hash == req.headers['x-paystack-signature']) {
    // Retrieve the request's body
    const event = req.body;
    // Do something with event  
    client.create(event).then((res) => {
        console.log(`Bike was created, document ID is ${res._id}`)
      })
        console.log(event)
    }
    res.send(200);
}