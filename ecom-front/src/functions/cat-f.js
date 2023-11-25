import axios from 'axios'
//all the categories is listed
export const getCatgeories =async () =>{
     return await axios.get(`${process.env.REACT_APP_API}/categories`)
}

//to get single category
export const getSingleCat =async (slug) =>{
    // value ={slug}
    return await axios.get(`${process.env.REACT_APP_API}/category/${slug}`)
}

// remove
export const removeCat =async (slug,authtoken) =>{
    return await axios.delete(`${process.env.REACT_APP_API}/category/${slug}`,
    {
    headers:{
        // value = key are same then you can type it once
        authtoken,
      }}
      
      )
}

// update
export const updateCat =async (slug,category,authtoken) =>{
    return await axios.put(`${process.env.REACT_APP_API}/category/${slug}`,category,
    {
    headers:{
        // value = key are same then you can type it once
        authtoken,
      }}
      
      )
}

// create a category
export const createCat =async (category,authtoken) =>{
    return await axios.post(`${process.env.REACT_APP_API}/category`,category,
    {
    headers:{
        // value = key are same then you can type it once
        authtoken,
      }}
      
      )
}

// get sub cat based on parent category
export const getCatSubs =async (_id) =>{
     await axios.get(`${process.env.REACT_APP_API}/category/subs/${_id}` )
}