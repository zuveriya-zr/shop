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