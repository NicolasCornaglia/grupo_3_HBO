import React, { useEffect, useState } from "react";
import './Products.css'
import { getAllUsers } from '../services/user-service'


function Users() {
    const [lastUser, setLastUser] = useState({})

    useEffect(() => {
        // LAST User
        getAllUsers().then(res => {
            setLastUser(res.data.users[res.data.users.length - 1])
        })

    }, [])

    return (
        <div>
            <div className="container">
                <div className="title"> Ultimo producto creado </div>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="content" scope="row">
                                {lastUser.id}
                            </th>
                            <td className="content">
                                {lastUser.name}
                            </td>
                            <td className="content">
                                {lastUser.email}
                            </td>
                            <td className="content">
                                {lastUser.detail}
                                aca va la url a lo q devuelve la api del detalle o deberia ir la vista de detalle del rod
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Users;