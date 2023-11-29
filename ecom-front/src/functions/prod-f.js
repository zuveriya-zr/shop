import axios from 'axios'
// create a Product
export const createProd =async (product,authtoken) =>{
    return await axios.post(`${process.env.REACT_APP_API}/product`,product,
    {
    headers:{
        // value = key are same then you can type it once
        authtoken,
      }}
      
      )
}

// display products with count limit
export const getAllProds =async (count) =>
   await axios.get(`${process.env.REACT_APP_API}/products/${count}` )

   // remove
export const removeProd =async (slug,authtoken) =>{
  return await axios.delete(`${process.env.REACT_APP_API}/product/${slug}`,
  {
  headers:{
      // value = key are same then you can type it once
      authtoken,
    }}
    
    )
}

// display single product
export const getProduct =async (slug) =>
   await axios.get(`${process.env.REACT_APP_API}/product/${slug}` )


   //update product

export const updateProd =async (slug,product,authtoken) =>{
  return await axios.put(`${process.env.REACT_APP_API}/product/${slug}`,product,
  {
  headers:{
      // value = key are same then you can type it once
      authtoken,
    }}
    
    )
}