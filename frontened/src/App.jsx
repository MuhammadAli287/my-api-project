
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App(){

  const [products, setproducts]= useState([]);

  const [user, setuser]= useState([]);

// this tech is use when wo call both/all api
// together that res/req send on same time 
useEffect(()=>{

  async function getdata(){
    const [productresponse, userresponse] = await Promise.all([
      fetch ('http://localhost:5000/api/products'),
      fetch ('http://localhost:5000/api/users')
    ])

    const productdata = await productresponse.json()
    const userdata = await userresponse.json()

    setproducts(productdata)
    setuser(userdata)
  }

  getdata();

},[]);


  // *******************
 // " yeah ak he use effect apply kr rahay hain  multiple api py lakin yeah b good approch nhi hai 
 // agar product pehlay chahiye or user baad ma chahiye to yeah good approach hai "

//  useEffect(()=>{
//     async function getdata(){
//       let productresponse = await fetch('http://localhost:5000/api/products');
//       const productdata= await productresponse.json();
//       setproducts(productdata);

//       // for the users api 

//        let userresponse = await fetch('http://localhost:5000/api/users');
//       const userdata= await userresponse.json();
//       setuser(userdata);


//     };
//     getdata();
//   }, []);



   // *******************
  // "yeah alag alag use effect apply kr rahay hain api py lakin yeah good approch nhi hai" 

  // useEffect(()=>{
  //   async function getproducts(){
  //     let response = await fetch('http://localhost:5000/api/products');
  //     const data= await response.json();
  //     setproducts(data);


  //   };
  //   getproducts();
  // }, []);

  // useEffect(()=>{
  //   async function getuser(){
  //     let response = await fetch('http://localhost:5000/api/users');
  //     const data= await response.json();
  //     setuser(data);
  //   };
  //   getuser();
  // },[]);


  return(
    <> 
    {/* product sec  */}
    <h1 className=" p-6 text-center text-4xl font-bold animate-ping font-sans text-amber-900 ">Cards </h1>
    <h1 className=" p-6 text-center text-3xl font-semibold font-sans text-amber-800 ">Data Comes From Backend Using APi's </h1>
     
    <section>
      <h1 className=" p-6 text-center text-3xl font-bold font-sans ">Product Card</h1>
  <h1 className=" p-6 text-center text-2xl font-bold font-sans ">First</h1>
  <h1 className=" p-6 text-center font-bold font-sans ">All Cards Dis</h1>

      <div className="p-6 rounded-lg grid gap-4 md:grid-cols-3 ">
   {products.map((product)=>(
        <Card 
         key={product.id}
   //  {...product}
   type='products'
   data = {product}
     
     />
     
))}
</div>
</section>

<hr />

 {/* users section    */}
<section>
  <h1 className=" p-6 text-center text-3xl font-bold ">User Card</h1>
   <h1 className=" p-6 text-center text-2xl font-bold ">Second</h1>
  
  
     <div className="p-6 rounded-lg grid gap-4 md:grid-cols-3 " >
  {user.map((user)=>(
 
    <Card
     key={user.id}
   // {...user}
   type='users'
   data = {user}
     />
    
  ))}
  </div>

</section>

    </>
  )
}

export default App;