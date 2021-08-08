import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Layout from "./pages/Layout/Layout"
import  Main from "./pages/main/Main"
import  NotFound from "./pages/NotFound/NotFound.jsx"
import  SignIn from "./pages/signin/SignIn"
import  Login from "./pages/login/Login"
import EditBadge from './pages/EditBadge/EditBadge';
import Badges from "./pages/Badges/Badges"
import BadgeDetails from "./components/BadgeDetails"
import NewBadge from "./pages/NewBadge/NewBadge"
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
<BrowserRouter>
      <Layout>
       <Switch>
         <Route exact path = "/main" component={Main}></Route>
         <Route exact path = "/login" component={Login}></Route>
         <Route exact path = "/SignIn" component={SignIn}></Route>
         <Route exact path = "/new" component={NewBadge}></Route>
         <Route exact path  = "/badges" component = {Badges}></Route>
         <Route exact path = "/:badgeId" component={BadgeDetails}></Route>
         <Route exact path = "/:badgeId/edit" component={EditBadge}></Route>
         <Route component={NotFound}></Route>

       </Switch>
      </Layout>
    
</BrowserRouter>      
    );
}

export default App;
