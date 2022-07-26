const express= require('express');
const bodyParser= require ('body-parser');
const cors= require ('cors');
const dotenv= require ('dotenv');
const verification = require('./routes/verify.js')


const app = express();
const PORT = process.env.PORT || 4000
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//Routes

app.use('/', verification)

app.listen(PORT,()=>{console.log(`server running on port:-> http://localhost:${PORT}`); })
