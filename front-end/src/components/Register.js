//============//
//  IMPORTS   //
//============//
import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Alert,
} from "reactstrap";
import "../App.css";
import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";
import LogIn from "./Login";
import axios from "axios";
import * as yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const onSubmit = data => {

  alert(JSON.stringify(data));

};

const Register = (props) => {
  const [greyButton, setGreyButton] = useState(true);

  const { register, handleSubmit, errors } = useForm({});

  const [ newUser, setNewUser ] = useState({
    username: "",
    password: "",
    email: "",
    phone_number: ""
  });

  //
  //  HANDLECHANGES
  const handleChanges = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  }

  const registerUser = (e) => {
    axiosWithAuth()
      .post("/register", newUser)
      .then((res) => {
        console.log("register response: ", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", JSON.stringify(res.data.id));

        setTimeout(() => props.history.push("/login"), 2000);

        let welcomeMessage = res.data.message;

         console.log('welcome message', welcomeMessage)



      })

      .catch(err => console.log(err));
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form onSubmit={onSubmit}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Label for="fullname">
                <InputGroupText>Full Name</InputGroupText>
              </Label>
            </InputGroupAddon>

            <Input
              id="fullname"
              name="fullname"
              placeholder="first and last name"
              // value={fdata.fullname}
              onChange={handleChanges}
            />

            {newUser.fullname.length > 0 ? (
              <Alert color="danger">{newUser.fullname}</Alert>
            ) : null}
          </InputGroup>

          <br />

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Label for="username">
                <InputGroupText>Username</InputGroupText>
              </Label>
            </InputGroupAddon>

            <Input
              id="username"
              name="username"
              placeholder="choose your username"
              // value={fdata.username}
              onChange={handleChanges}
            />

            {newUser.username.length > 0 ? (
              <Alert color="danger">{newUser.username}</Alert>
            ) : null}
          </InputGroup>

          <br />

          <FormGroup>
            <Label for="email">Email</Label>

            <Input
              type="email"
              id="email"
              name="email"
              placeholder="email address"
              // value={fdata.email}
              onChange={handleChanges}
            />

            {newUser.email.length > 0 ? (
              <Alert color="danger">{newUser.email}</Alert>
            ) : null}
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>

            <Input
              type="password"
              id="password"
              name="password"
              placeholder="create password"
              // value={fdata.password}
              onChange={handleChanges}
            />

{newUser.password.length > 0 ? (
              <Alert color="danger">{newUser.password}</Alert>
            ) : null}
          </FormGroup>

          <FormGroup>
            <Label for="passwordConfirmation">Password confirmation</Label>

            <Input
              type="passwordConfirmation"
              id="passwordConfirmation"
              name="passwordConfirmation"
              placeholder="confirm password"
              // value={fdata.passwordConfirmation}
              onChange={handleChanges}
            />

            {newUser.passwordConfirmation.length > 0 ? (
              <Alert color="danger">{newUser.passwordConfirmation}</Alert>
            ) : null}
          </FormGroup>

          <Link to="/landingpage">
            <Button disabled={greyButton}>Submit</Button>
          </Link>
        </Form>

        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/userlogin">
            <LogIn />
          </Route>

          <Route path="/landingpage">
            <LandingPage />
          </Route>
        </Switch>

        <Link to="/userlogin">
          <p>Already have an account? Click here to Sign in.</p>
        </Link>
      </header>
    </div>
  );

}

export default Register;