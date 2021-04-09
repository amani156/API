import React, { useEffect, useState } from "react";

import axios from 'axios';
function UserList() {

    const [users, setUsers]= useState( );
 


    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
         setUsers(res.data);
        }).catch(err=>console.error(err))

        
    }
   ,[])
    
    return (
        <div>
            {console.log(users)}
            {users!==undefined?users.map((el)=><p>{el.name}</p>):null}
            
            
        </div>
    )
}

export default UserList


