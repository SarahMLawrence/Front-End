//=================//
//    IMPORTS      //
//=================//
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import Home from './components/Home';
// import Registration from './components/Registration';
import MainHeader from './components/MainHeader';
import {Button} from 'reactstrap';
import './App.css';

//==============================//
//    CLASS COMPONENT           //
//==============================//

class App extends React.Component{
  constructor(){
    super();
    this.state = { credentials: {} };
  }

  render(){
    return(
      <Router>
      <div className="myApp">
        <MainHeader />
      <Route path="/" component={Login} />
{/*        
        <Button outline color="primary"><Link to="/login">Log in</Link></Button>
        <Button outline color="info"><Link to="/registration">Sign Up</Link></Button>
        <Route path="/" component={Login}/> */}
        </div>
        <div>
          <Switch>
           <PrivateRoute path="/home" component={Home}/>
          </Switch>
        </div>
  
 
      </Router>
    );
  }
}




export default App;
