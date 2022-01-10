import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Login } from './components/Login';
import { Home } from './components/Home';
import { Employees } from './views/Employees';
import { EmployeesForm } from './views/Employees/EmployeesForm';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route exact path="/employees" component={Employees} />
        <Route path="/employees/form" component={EmployeesForm} />
      </Switch>
    </BrowserRouter>
  );
}
