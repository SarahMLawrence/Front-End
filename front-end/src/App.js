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
import SlideShow from "./components/SlideShow";

// import Registration from "./components/Registration";
import Register from "./components/Register";

import LandingPage from "./components/LandingPage";
import PostPage from "./components/PostPage";

import "./App.css";

import logo from "./images/how-to-logo-small.png";

import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <Router>
      <div>
        <div>
          <div >
            {/* <Jumbotron> */}
              <nav>
              <img src={logo} className="App" alt="logo" />
                <Link to="/userlogin">
                  <h3>Login</h3>
                </Link>
                <Link to="/register">
                  <h3>Register</h3>
                </Link>
                {/* <Link to="/postpage">
                  <h3>See Posts</h3>
                </Link> */}
              </nav>

              <SlideShow />
              <div className="forms">
              <Route path="/userlogin" component={Login} />
            <Route path="/register" component={Register} />
            {/* <Route path="/postpage" component={PostPage}/> */}
            </div>
{/*  

              <img src={logo} className="App" alt="logo" /> */}
            {/* </Jumbotron> */}

          
          </div>
<div>
            <Switch>
              <PrivateRoute exact path="/postpage" component={PostPage} />
            </Switch>
          </div> 
        </div>
      </div>
    </Router>
  );
}

export default App;
