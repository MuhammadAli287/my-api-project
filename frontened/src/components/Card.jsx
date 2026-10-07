
function Card({type, data}){
    return(
     <>
        {type === 'products' &&(
             
      <div className="grid gap-4 p-6 bg-slate-500 text-center rounded-2xl">
       
            <h1 className="text-2xl font-bold">{data.title}</h1>
            {/* <span>{data.desc}</span> */}
            <span> {data.category}</span>
             <span className="bg-gray-400 py-1.5 font-bold"> {data.price} $</span>
        </div>
        )}

         {type === 'users' &&(
      <div className="grid gap-4 p-6 bg-gray-200 text-center">
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <span>{data.age}</span>
            <span>{data.city}</span>
            <span>{data.email}</span>
        </div>
        )}


     </>   
    )
     
    
}

export default Card;