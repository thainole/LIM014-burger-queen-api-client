import React from 'react'
import { ModalAddUsers } from './ModalAddUsers';
import { getFn, updateFn, deleteFn } from '../../services/crud'

export const AdminUsers = () => {

  const [users, setUsers] = React.useState([])
  
  //---------------- RENDERIZANDO USUARIOS ------------------
  const getUsers = async() => {
    try {
      const storedToken = localStorage.getItem('token');
      const response = await getFn(storedToken, 'users');
      setUsers(response) ;
    }
    catch (err) {
      console.log(err)
    }
  };

  React.useEffect(() => {
    getUsers();
  }, [])

  //-------------------- SETTEO PARA MODAL ---------------------
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const initialValues = {
    email: "",
    password: "",
    roles: {
      admin: false,
    }
  };

  const [values, setValues] = React.useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'roles' && value === 'true' 
    ? setValues({ ...values, [name]: {admin: true}})
    : setValues({ ...values, [name]: value })
  };

  const updateUserModal =(objUser) => {
    handleShow();
    setValues(objUser);
  }

  const saveModal = async (newObjUser) => {
    try { 
      const storedToken = localStorage.getItem("token");
      await updateFn(storedToken, 'users', newObjUser);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUsers = async(obj) => {
    try { 
      const storedToken = localStorage.getItem('token');
      await deleteFn(storedToken, 'users', obj);
      await getUsers();
    }
    catch (err) {
      console.log(err)
    }
  };
  

  return (
    <div>
      <section className="container-fluid p-3 w-100 col">
      <h3 className="w-100 text-center">Lista de usuarios</h3>
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
          saveModal={saveModal}
        />
      </div>
      <table className="table table-sm table-hover w-100 mt-3 mx-2">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user._id}</td>
              <td>{user.email}</td>
              <td className="ps-2">{user.roles.admin === true ? 'true' : 'false'}</td>
              <td className="btn ms-2" onClick={()=>deleteUsers(user)}>🗑</td>
              <td className="btn ms-1" onClick={()=>updateUserModal(user)}>✏</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
    </div>
  )
}
