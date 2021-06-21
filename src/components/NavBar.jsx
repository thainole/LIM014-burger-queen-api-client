import React from 'react';
import {
  NavLink,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { TakeOrder } from './Orders/TakeOrder';
import { OrderStatus } from './Orders/OrderStatus';
import { OrderHistory } from './Orders/OrderHistory';
import { ChefView } from './Orders/ChefView';
import burger from '../img/burger.png'

export const NavBar = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <nav className="navbar-expand-md navbar-light bg-secondary d-flex">
        <img className="me-auto" src={burger} alt="burger" width="40" height="34" />
        <ul className="nav nav-tabs justify-content-end">
          <li className="nav-item">
            <NavLink to={`${url}/hacer-pedidos`} className="nav-link" aria-current="page">
              Hacer pedido
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`${url}/cocina`} className="nav-link">
              Cocina
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`${url}/estado`} className="nav-link">
              Estado
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`${url}/historial`} className="nav-link">
              Historial
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
