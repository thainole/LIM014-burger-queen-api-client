import React from 'react'
import {ModalAddUsers} from './ModalAddUsers';
import {usersRequest, deleteUser } from '../../services/users'

export const AdminUsers = () => {

  const [users, setUsers] = React.useState([])
  
  const getUsers = async() => {
    try {
      const storedToken = localStorage.getItem('token');
      const response = await usersRequest(storedToken);
      setUsers(response) ;

    }
    catch (err) {
      console.log(err)
    }
  };

  React.useEffect(() => {
    getUsers();
  }, [])

  const deleteUsers = async(id) => {
    console.log(id);
    try {
      const storedToken = localStorage.getItem('token');
      await deleteUser(storedToken, id);
      await getUsers();
    }
    catch (err) {
      console.log(err)
    }
  }

  // const btnDelete = (id) => {
  //   cursor: pointer,
  // }

  return (
    <div>
      <section className="container-fluid p-3 w-100 col">
      <h3 className="w-100 text-center ">Lista de usuarios</h3>
      <div className="d-flex w-100 justify-content-end">
        <ModalAddUsers getUsers={getUsers}/>
      </div>
      <table className="table table-sm table-hover w-100 mt-3 mx-2">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Rol - admin</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user._id}</td>
              <td>{user.email}</td>
              <td>{user.roles.admin === true ? 'true' : 'false'}</td>
              <td onClick={()=>deleteUsers(user._id)}>🗑</td>
              <td>✏</td>
          </tr>
          ))}
        </tbody>
      </table>
    </section>
    </div>
  )
}
