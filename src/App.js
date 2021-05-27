import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Layout from "./pages/Layout/Layout"
import  Main from "./pages/main/Main"
import  Error from "./pages/error/Error"
import  SignIn from "./pages/signin/SignIn"
import  Login from "./pages/login/Login"

import NewBadge from "./pages/NewBadge/NewBadge"





function App() {
  return (
<BrowserRouter>
      <Layout>
       <Switch>
         <Route exact path = "/" component={Main}></Route>
         <Route exact path = "/login" component={Login}></Route>
         <Route exact path = "/SignIn" component={SignIn}></Route>
         <Route exact path = "/new" component={NewBadge}></Route>
         <Route component={Error}></Route>
       </Switch>
      </Layout>
    
</BrowserRouter>      
    );
}

export default App;
