import React from "react";
// import AddTodo from "../containers/AddTodo";
// import TodoList from "../containers/TodoList";
// import Footer from "../containers/Footer";
import Register from './../components/Register';
import Login from './../components/Login';
import { NotFound } from './../components/Notfound';
import { ProtectedRoute } from '../components/ProtectedRoute'
import MainDashboard from './../components/Dashboard/mainDashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function App() {

  return (
    <Switch>
      <Route exact path="/" render>
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <ProtectedRoute path="/dashboard" component={MainDashboard}>

      </ProtectedRoute>
      <Route >
        <NotFound />
      </Route>
    </Switch>)
}

export default App;
