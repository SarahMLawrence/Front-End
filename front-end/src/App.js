// //=================//
// //    IMPORTS      //
// //=================//
// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";

// import Login from "./components/Login";
// // import Registration from './components/Registration';
// import MainHeader from "./components/MainHeader";
// import { Button } from "reactstrap";
// import "./App.css";

// //==============================//
// //    CLASS COMPONENT           //
// //==============================//

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { credentials: {} };
//   }

//   render() {
//     return (
//       <Router>
//         <div className="myApp">
//           <MainHeader />
//           <Route path="/" component={Login} />
//           {/*        
//         <Button outline color="primary"><Link to="/login">Log in</Link></Button>
//         <Button outline color="info"><Link to="/registration">Sign Up</Link></Button>
//         <Route path="/" component={Login}/> */}
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;

import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./components/Dashboard";

import Login from "./components/Login";

// import Registration from "./components/Registration";
import Register from "./components/Register";

import LandingPage from "./components/LandingPage";

import PostPage from "./components/PostPage";

import "./App.css";

import logo from "./logo.jpg";

import { Jumbotron } from "reactstrap";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Jumbotron>
            <Link to="/dashboard">
              <img src={logo} className="App" alt="logo" />
            </Link>

            <h1>
              {" "}
              <br /> Ready to build a better you?
            </h1>
          </Jumbotron>

          
          <Link to="/postpage">
              <h3>See Posts</h3>
              </Link>

          <Switch>
            <Route path="/userlogin">
              <Login />
            </Route>

            <Route path="/registration">
              {/* <Registration /> */}
              <Register />
            </Route>

            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/landingpage">
              <LandingPage />
            </Route>

            <PrivateRoute
            exact 
            path="/postpage"
            component={PostPage}
             />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
