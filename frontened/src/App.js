import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Appointment from './components/Appointment';
import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './pages/AdminDashboard';
import BlogList from './pages/BlogList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/appointment" component={Appointment} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/blogs" component={BlogList} />
      </Switch>
    </Router>
  );
}

export default App;
