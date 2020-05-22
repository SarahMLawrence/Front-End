//=================//
//    IMPORTS      //
//=================//
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import PrivateRoute from './components/PrivateRoute';
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
        <div className="App">
        <div className="nav">
       
        <Button outline color="primary"><Link to="/login">Log in</Link></Button>
        <Button outline color="info"><Link to="/registration">Sign Up</Link></Button>
        <Route path="/" component={Login}/>
        </div>
        <div>
          <Switch>
            <PrivateRoute
            exact path="/post-page"
            // component={}
            />
          </Switch>
        </div>
        </div>
        </div>
 
      </Router>
    );
  }
}




export default App;
