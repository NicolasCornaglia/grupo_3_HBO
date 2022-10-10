import React, { useEffect, useState } from "react";
import './Products.css'
import { getAllUsers } from '../services/user-service'


function Users() {
    const [lastUser, setLastUser] = useState({})
    const [AllUsers, setAllUsers] = useState([])

    useEffect(() => {
        // LAST USER
        getAllUsers().then(res => {
            setLastUser(res.data.users[res.data.users.length - 1])
        })

        // ALL USERS
        getAllUsers().then(res => {
            setAllUsers(res.data.users)
        })

    }, [])

    return (
        <div>
            <div className="container">
                <div className="title"> Último usuario creado </div>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre completo</th>
                            <th>Email</th>
                            <th>Número de telefono</th>
                            <th>Ciudad</th>
                            <th>Genero</th>
                            <th>Rol</th>
                            <th>Avatar</th>
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
                                {lastUser.phonenumber}
                            </td>
                            <td className="content">
                                {lastUser.city}
                            </td>
                            <td className="content">
                                {lastUser.gender}
                            </td>
                            <td className="content">
                                {lastUser.role}
                            </td>
                            <td className="content">
                                <a href={lastUser.avatar}>Imagen de perfil</a>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="title"> Listado de usuarios </div>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre completo</th>
                            <th>Email</th>
                            <th>Número de telefono</th>
                            <th>Ciudad</th>
                            <th>Genero</th>
                            <th>Rol</th>
                            <th>Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AllUsers.map(user => {
                            return (
                                <tr>
                                    <th className="content" scope="row">
                                        {user.id}
                                    </th>
                                    <td className="content">
                                        {user.name}
                                    </td>
                                    <td className="content">
                                        {user.email}
                                    </td>
                                    <td className="content">
                                        {user.phonenumber}
                                    </td>
                                    <td className="content">
                                        {user.city}
                                    </td>
                                    <td className="content">
                                        {user.gender}
                                    </td>
                                    <td className="content">
                                        {user.role}
                                    </td>
                                    <td className="content">
                                        <a href={user.avatar}>Imagen de perfil</a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Users;