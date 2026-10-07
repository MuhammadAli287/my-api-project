
const express = require ('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json([
        {
            id: 1,
            name: 'Muhammad Ali',
            age: 21,
            city: 'Lahore',
            email:'i.muhammadali287@gmail.com'
        },
         {
            id: 2,
            name: 'Abdullah',
            age: 25,
            city: 'Karachi',
            email:'abd@gmail.com'
        },
         {
            id: 3,
            name: 'Fatima',
            age: 20,
            city: 'Lahore',
            email:'i.Fatimali@gmail.com'
        }
    ])
})

module.exports = router;


