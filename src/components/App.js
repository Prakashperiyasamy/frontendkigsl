import React, { useEffect } from "react";
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
import {useHistory} from 'react-router'
function App() {
    // console.log(useHistory().)
    let history = useHistory()
    useEffect(()=>{
      window.addEventListener("popstate", () => {
        history.go();
      });
    },[history])
  return (
    <Switch>
      <Route exact path="/" component={Login}>

      </Route>
      <Route path="/register" component={Register}>

      </Route>
      <ProtectedRoute path="/dashboard" component={MainDashboard}>
      </ProtectedRoute>
      <Route >
        <NotFound />
      </Route>
    </Switch>)
}

export default App;
