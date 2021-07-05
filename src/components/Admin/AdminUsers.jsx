import React from 'react'
import {ModalAddUsers} from './ModalAddUsers';
import {usersRequest, deleteUser, updateUser } from '../../services/users'

export const AdminUsers = () => {

  const [users, setUsers] = React.useState([])
  const storedToken = localStorage.getItem('token');

  const getUsers = async() => {
    try {
      const response = await usersRequest(storedToken);
      setUsers(response) ;
    }
    catch (err) {
      console.log(err)
    }
  };

  React.useEffect(() => {
    getUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deleteUsers = async(id) => {
    try { 
      await deleteUser(storedToken, id);
      await getUsers();
    }
    catch (err) {
      console.log(err)
    }
  }

  const initialValues = {
    email: "",
    password: "",
    roles: {
      admin: false,
    }
  };
  
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [values, setValues] = React.useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'roles' && value === 'true' 
    ? setValues({ ...values, [name]: {admin: true}})
    : setValues({ ...values, [name]: value })
  };

  const updateUserModal =(objUser) => {
    handleShow();
    setValues(objUser);// muestra los valores al modal
  }

  const saveModal = async (newObjUser) => {
    try {//newObjectProduct es el objeto 
      const storedToken = localStorage.getItem("token");
      await updateUser(storedToken, newObjUser);
      await getUsers();
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <section className="container-fluid p-3 w-100 col">
      <h3 className="w-100 text-center ">Lista de usuarios</h3>
      <div className="d-flex w-100 justify-content-end">
        <button className="btn btn-danger" onClick={handleShow}>
          Agregar usuario
        </button>
        <ModalAddUsers 
          getUsers={getUsers}
          initialValues={initialValues}
          values={values}
          setValues={setValues}
          handleChange={handleChange} 
          show={show}
          handleClose={handleClose}
          storedToken={storedToken}
          saveModal={saveModal}
        />
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
              <td onClick={()=>updateUserModal(user)}>✏</td>
          </tr>
          ))}
        </tbody>
      </table>
    </section>
    </div>
  )
}
