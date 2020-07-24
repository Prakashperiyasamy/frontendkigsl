import React from "react";
// import AddTodo from "../containers/AddTodo";
// import TodoList from "../containers/TodoList";
// import Footer from "../containers/Footer";
import Register from './../components/Register';
import Login from './../components/Login';
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
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/dashboard">
        <MainDashboard />
      </Route>
    </Switch>)
}

export default App;
