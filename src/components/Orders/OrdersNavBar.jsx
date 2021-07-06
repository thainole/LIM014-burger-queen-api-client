import React from 'react'
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import { TakeOrder } from './TakeOrder';
import { OrderStatus } from './OrderStatus';
import { OrderHistory } from './OrderHistory';
import { ChefView } from './ChefView';
import burger from '../../img/burger.png'

const jwtDecode = require('jwt-decode')

export const OrdersNavBar = () => {

  let { path, url } = useRouteMatch();
  
  const setUser = () => {
    const storedToken = localStorage.getItem('token');
    const decodedToken = jwtDecode.default(storedToken);
    return decodedToken.email
  }

  return (
    <div>
      <nav className="navbar-expand-md justify-content-between navbar-light bg-danger d-flex mb-1">
        <img className="me-auto ms-lg-2 mt-lg-2 ms-md-1 mt-md-1" src={burger} alt="burger" width="40" height="34" />
        <ul className="nav nav-tabs justify-content-end p-0.5">
          {
            setUser() !== 'chef@bq.com' 
             ? <li className="nav-item p-lg-1">
                <NavLink to={`${url}/hacer-pedidos`} className="nav-link" aria-current="page">
                  Hacer pedido
                </NavLink>
              </li>
            : null
          }
          {
            setUser() === 'chef@bq.com'
            ? <li className="nav-item p-lg-1">
                <NavLink to={`${url}/cocina`} className="nav-link">
                  Cocina
                </NavLink>
              </li>
            : null
          }
          {
            setUser() !== 'chef@bq.com' 
            ? <li className="nav-item p-lg-1">
                <NavLink to={`${url}/estado`} className="nav-link">
                  Estado
                </NavLink>
              </li>
            : null
          }
          <li className="nav-item p-lg-1">
            <NavLink to={`${url}/historial`} className="nav-link">
              Historial
            </NavLink>
          </li>
          <li className="nav-item p-lg-1">
            <NavLink exact to="/" className="nav-link">
              Salir
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path={path}>
          <TakeOrder />
        </Route>
        <Route exact path={`${path}/hacer-pedidos`}>
          <TakeOrder />
        </Route>
        <Route exact path={`${path}/cocina`}>
          <ChefView />
        </Route>
        <Route exact path={`${path}/estado`}>
          <OrderStatus />
        </Route>
        <Route exact path={`${path}/historial`}>
          <OrderHistory />
        </Route>
        
      </Switch>
    </div>
  )
}
