import React from 'react'
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import { AdminProducts } from "./AdminProducts"
import { AdminUsers } from "./AdminUsers"
import burger from '../../img/burger.png'

export const AdminNavBar = () => {

  let { path, url } = useRouteMatch();

  return (
    <div>
      <nav className="navbar-expand-md navbar-light bg-danger d-flex">
        <img className="me-auto ms-lg-2 mt-lg-2 ms-md-1 mt-md-1" src={burger} alt="burger" width="40" height="34" />
        <ul className="nav nav-tabs justify-content-end p-0.5">
          <li className="nav-item p-lg-1">
            <NavLink to={`${url}/usuarios`} className="nav-link" aria-current="page">
              Administrar usuarios
            </NavLink>
          </li>
          <li className="nav-item p-lg-1">
            <NavLink to={`${url}/productos`} className="nav-link">
              Administrar productos
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path={path}>
          <AdminUsers />
        </Route>
        <Route exact path={`${path}/usuarios`}>
          <AdminUsers />
        </Route>
        <Route exact path={`${path}/productos`}>
          <AdminProducts />
        </Route>
      </Switch>
    </div>
  )
}
