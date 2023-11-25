import axios from 'axios'
//all the sub categories is listed
export const getSubs =async () =>{
     return await axios.get(`${process.env.REACT_APP_API}/subs`)
}

//to get single sub category
export const getSub =async (slug) =>{
    // value ={slug}
    return await axios.get(`${process.env.REACT_APP_API}/sub/${slug}`)
}

// remove
export const removeSub =async (slug,authtoken) =>{
    return await axios.delete(`${process.env.REACT_APP_API}/sub/${slug}`,
    {
    headers:{
        // value = key are same then you can type it once
        authtoken,
      }}
      
      )
}

// update
export const updateSub =async (slug,sub,authtoken) =>{
    return await axios.put(`${process.env.REACT_APP_API}/sub/${slug}`,sub,
    {
    headers:{
        // value = key are same then you can type it once
        authtoken,
      }}
      
      )
}

// create a category
export const createSub =async (sub,authtoken) =>{
    //sub==> sub and parent
    return await axios.post(`${process.env.REACT_APP_API}/sub`,sub,
    {
    headers:{
        // value = key are same then you can type it once
        authtoken,
      }}
      
      )
}