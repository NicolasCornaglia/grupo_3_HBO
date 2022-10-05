import React from 'react';
import { useState, useEffect } from 'react'


function KpiTotalUsers() {
   const [users, setUsers] = useState({});

   useEffect(() => {
      fetch(`http://localhost:3001/api/users/`)
         .then(response => response.json())
         .then(data => {
            setUsers(data)
         })
         .catch(error => console.error(error));
   }, [])

   return (
      <div>
         <div className="kpi-container">
            <h1>Total de usuarios: {users.count}</h1>
         </div>
      </div>
   )

}

export default KpiTotalUsers