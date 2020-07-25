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
import { useHistory } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  let history = useHistory()
  useEffect(() => {
    window.addEventListener("popstate", () => {
      history.go();
    });
  }, [history])
  return (
    <>
      <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
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
      </Switch>
    </>)
}

export default App;
