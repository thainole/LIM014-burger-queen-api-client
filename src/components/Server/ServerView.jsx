import React from 'react';
import {
    NavLink,
    Switch,
    Route,
    useRouteMatch,
  } from "react-router-dom";
import { ServerTakeOrder } from './ServerTakeOrder';
import { ServerStatusOrder } from './ServerStatusOrder';
import { ServerHistoryOrder } from './ServerHistoryOrder';

export const ServerView = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to={`${url}/hacer-pedidos`}>Realizar pedidos</NavLink></li>
          <li><NavLink to={`${url}/estado-pedidos`}>Estado de los pedidos</NavLink></li>
          <li><NavLink to={`${url}/historial-pedidos`}>Historial de los pedidos</NavLink></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path={path}>
          <h2>route path</h2>
        </Route>
        <Route exact path={`${path}/hacer-pedidos`}>
          <ServerTakeOrder />
        </Route>
        <Route exact path={`${path}/estado-pedidos`}>
          <ServerStatusOrder />
        </Route>
        <Route exact path={`${path}/historial-pedidos`}>
          <ServerHistoryOrder />
        </Route>
      </Switch>
    </div>
  )
}
