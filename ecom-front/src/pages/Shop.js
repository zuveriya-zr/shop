import React, { useState, useEffect } from "react";
import { getAllProds } from "../functions/prod-f";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../component/cards/ProductCard";
import Loader from "../component/Loader";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    listAllProd();
  }, []);

 
useEffect(()=>{
  listAllProd()
  },[])
  
  const listAllProd =()=>{
    getAllProds(10)
    .then((res)=> {
      console.log(res.data)
  setProducts(res.data)
    })
    .catch((err)=> console.log("fetching all prod err ==>",err))
  }
  
  return (
    <div className="container-fluid">
      
        
        
          {loading ? (
            <Loader />
          ) : (
             <img
            className="h-60 w-full rounded-lg object-cover "
            src="https://t4.ftcdn.net/jpg/03/20/46/13/360_F_320461388_5Snqf6f2tRIqiWlaIzNWrCUm1Ocaqhfm.jpg"
            alt="nature image"
          />
          )}

          {products.length === 0 && <p>No products found</p>}

          <div className="row container mx-auto pb-5">
          {products.map((product) => (
              <div  className="col-md-4 mt-3">
                <ProductCard key={product._id}
                  product={product} />
              </div>
            ))}
          </div>
        </div>
    
    
  );
};

export default Shop;
