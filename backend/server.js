const express = require('express')

// is ko cmd ma install b karna hai pehlay
// npm install cors
const cors = require ('cors')
const app = express()
app.use(cors());

// "agar ak he api create karni ho gi to server/ isi 
// ma he kr laien gy agar multiple karni houn gi to phr 
// alag files banaien gy js ki phr us ko yahan import karein 
// gy or phr yahan sy aagay frontend ko pass karien gy" 


// app.get('/api/products', (req,res)=>{

//     // single string print karwanay ky liya 
//     // res.send('Hello from express.js');

//     const product = [
//         {
//             id:1,
//             title: 'product - 1',
//             price: '700 Rs'
//         },
//          {
//             id:2,
//             title: 'product - 2',
//             price: '500 Rs'
//         },
//         {
//             id:3,
//             title: 'product - 3',
//             price: '999 Rs'
//         }
//     ]

//     res.send(product).json();
// });

const productroute = require('./routes/product')
const userroute = require('./routes/users')

app.use('/api/products', productroute)
app.use('/api/users', userroute)

app.listen(5000,()=>{
    console.log('Express is running on 5000 port');
})




