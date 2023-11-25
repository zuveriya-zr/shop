import axios from 'axios'

export const createUpdateUser =async (authtoken) =>{
    return await axios.post(`${process.env.REACT_APP_API}/create-update-user`,{},{
      headers:{
        // value = key are same then you can type it once
        authtoken,
      }
    })
    }
   
   
    export const currentUser =async (authtoken) =>{
      return await axios.post(`${process.env.REACT_APP_API}/current-user`,{},{
        headers:{
          // value = key are same then you can type it once
          authtoken,
        }
      })
      }
     

      
    export const AdminUser =async (authtoken) =>{
      return await axios.post(`${process.env.REACT_APP_API}/admin-user`,{},{
        headers:{
          // value = key are same then you can type it once
          authtoken,
        }
      })
      }
     