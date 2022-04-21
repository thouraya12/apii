import React, {useState, useEffect}from 'react'
import axios from 'axios'
const Users = () => {
    const[usersList , setUsersList]= useState([])
    const getData =async()=>{
        
        await axios .get("https://jsonplaceholder.typicode.com/users")
       .then(res=>{setUsersList(res.data)})
       .catch(err=> console.log(err))

    }
    useEffect(()=>{
        getData()

    },[])
  return (
    <div>
       
        {
            usersList.map(user=>(
                <div key={user.id}>
                    <h1> {user.name}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default Users