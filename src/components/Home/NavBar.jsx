// import React from 'react';
// import {
//     NavLink,
//     Switch,
//     Route,
//   } from "react-router-dom";
// import {ServerView} from '../Server/ServerView';
// import {ChefView} from '../Chef/ChefView';
// import {AdminView} from '../Admin/AdminView'

// export const NavBar = ({path, url}) => {
//     return (
//     <div>
//       <nav>
//         <ul>
//           <li><NavLink to={`${url}/mesero`}>Mesero</NavLink></li>
//           <li><NavLink to={`${url}/chef`}>Chef</NavLink></li>
//           <li><NavLink to={`${url}/admin`}>Admin</NavLink></li>
//         </ul>
//       </nav>
//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic.</h3>
          
//         </Route>
//         <Route exact path={`${path}/mesero`}>
//           <ServerView />
//         </Route>
//         <Route exact path={`${path}/chef`}>
//           <ChefView />
//         </Route>
//         <Route exact path={`${path}/admin`}>
//           <AdminView />
//         </Route>
//       </Switch>
//     </div>
//     )
// }
