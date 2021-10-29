import React from "react";
import { Route, Link, Switch, Redirect, NavLink } from 'react-router-dom';


const App = () => {

  return (
    <Switch>
      <Route exact path="/">
        <div>
          <h1>Ramiro's Blog</h1>
          <h2> There's nothing here yet but there might be some day </h2>
        </div>
      </Route>
      <Route exact path="/ExtravaganzaOct2020List" component={() => { window.location = 'https://yugiohdeck.github.io/#G8R18kB7fUR82j1nIn9hrwuGuKQhGYL3HkmMJdsigwrZXOZUjT8wVCIj1BfUdH+ANBTsuWPhbJ+hkyhUMJq8efxLfT3qfSbpl1wtAoA=;Oqog7WYg0VN7FapXY+UTd+0AuOEoRq2oBq3xbpJZL/9sMb9cW6icVPNtcBA7d5aA;nSN27LBG2ppBpj5nxrXlO6xHFe/LRTwCfenE7i0=:HERO%20extravaganza'; return null;} }/>
    </Switch>

  );
};

export default App;
