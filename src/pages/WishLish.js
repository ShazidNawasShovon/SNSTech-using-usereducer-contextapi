import React from 'react';
import { useProducts } from '../context/ProductProvider';
import ProductCard from '../components/ProductCard';


const WishLish = () => {
    const {state:{wishlist,loading,error},}=useProducts();
    let content;
    if(loading){
      content=<p>Loading ... </p>
    }
    else if(error){
      content=<p>Somethings went Wrong....</p>
    }
    else if(!loading && !error && wishlist.length===0){
      content=<p>Nothing to display, Because there is No Products in the cart</p>
    }
    else if(!loading && !error && wishlist.length){
      content=wishlist.map((product)=>(<ProductCard key={product._id} product={product} />))
    }
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {content} 
      </div>
    );
};

export default WishLish;