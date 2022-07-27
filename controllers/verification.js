const crypto = require('crypto');
const client = require('../helpers/sanity.js')
const secret = process.env.SECRET_KEY_PAYSTACK;

exports.handleVerification = async (req, res)=>{
    console.log({name: 'sth'})

    const hash = crypto.createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');
    if (hash == req.headers['x-paystack-signature']) {
    // Retrieve the request's body
    const event = req.body;
    // Do something with event 
    res.sendStatus(200);

    const {data:{
        reference, amount, paid_at, metadata:{name, phone, state, address, ordered_items,quantity}, customer:{email, customer_code}
    }} = event
    
               
    const obj = {
        _type: 'order',
        customer_name: name,
        reference,
        ordered_items,
        total_price: parseInt(amount),
        total_quantity: parseInt(quantity),
        email,
        phone,
        state,
        address,
        customer_code,
        date_ordered: paid_at,
        isDelivered: false
    }

console.log(obj)
client.create(obj).then((res) => {
    console.log(`Bike was created, document ID is ${res._id}`)
  }).catch((err)=>console.log(`failed to create doc: ${err}`))
    // client
    // .patch('order') // Document ID to patch
    // .set(obj) // Shallow merge
    // .commit() // Perform the patch and return a promise
    // .then((updatedOrder) => {
    //     console.log('Hurray, the order is updated! New document:')
    //     console.log(updatedOrder)
    // })
    // .catch((err) => {
    //     console.error('Oh no, the update failed: ', err.message)
    // })
    
        
    }
}