import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Dashboard from './component/dashboard/Dashboard';
import ProjectDetails from './component/projects/ProjectDetails';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';
import CreateProject from './component/projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/project/:id' component={ProjectDetails} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/createProject' component={CreateProject} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
