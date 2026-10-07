
const express = require ('express')
const router = express.Router()

//" agar hm kisi or ki api use kr rhay hain link to aisay karien gy " 
router.get('/',async (req,res)=>{

    try{
        const response = await fetch('https://test.futureinnovativetech.com/data/products.json')

        if(!response.ok){
            throw new error ('response not coming from server');
        }

        const products = await response.json()
        res.json(products);
    }
    catch(error){
        console.log(error);

        res.status(500).json({
            'message' : 'Api not responding encountered a server error'
        })
    }
})


// "agar hm apni api banaien to yeah us ekarien gy"

// router.get('/',(req,res)=>{
//     res.json([
//         {
//             id: 1,
//             title: 'product-1',
//             desc: 'Laptop- Icore-5 ps87',
//             price: '300 Rs'
//         },
//          {
//             id: 2,
//             title: 'product-2',
//             desc: 'MacBook- ithin 9pro',
//             price: '700 Rs'
//         },
//          {
//             id: 3,
//             title: 'product-3',
//             desc: 'Lenovo- intel i5',
//             price: '1300 Rs'
//         },
//     ])
// })

module.exports = router;