import React from 'react'

const ProductsCard = ({products ,del}) => {
    return (
    <div className='p-2 h-fit border-2 flex flex-col gap-10 rounded-2xl bg-purple-200'>
        <div className='w-100 h-150'>
            <img src={products.image} alt="" />
        </div>
        <div>
            <h2 className='font-semibold text-2xl'>{products.title.substring(0,15)}</h2>
            <p className='text-xl'>{products.category}</p>
            <p className='text-green-600 text-xl'>{products.price}</p>
            <button onClick={()=>{
                del(products.id);
            }}  className='p-2 bg-red-700 rounded-xl'>Delete</button>
        </div>
    </div>
    );
};

export default ProductsCard
//for ui creation
