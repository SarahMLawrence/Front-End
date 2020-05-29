//==========//
//  IMPORTS //
//==========//
import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Input, Button } from "reactstrap";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

  const handleChanges = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    console.log("New credentials from Login", userInfo);
  };

  let history = useHistory();
  const login = (e) => {
    e.preventDefault();
    setIsFetching(true);

    axiosWithAuth()
      .post("/auth/login", userInfo)
      .then((res) => {
        console.log(res);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", res.data.userInfo.username);
          localStorage.setItem("password", userInfo.password);
          localStorage.setItem("password", userInfo.password);
          
          // history.push("/postpage");
        } else {
          setError("Your login was unsuccessfull");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="login">
        <div className="form">
          <div className="FormForm">
            <Form inline onSubmit={login} className="loginForm">
              <h2>Login </h2>
              <FormGroup
                className="mb-2 mr-sm-2 mb-sm-0"
                style={{ padding: "1%" }}
              >
                <Input
                  type="text"
                  name="username"
                  placeholder="USERNAME"
                  value={userInfo.username}
                  onChange={handleChanges}
                  required
                />
              </FormGroup>
              <FormGroup
                className="mb-2 mr-sm-2 mb-sm-0"
                style={{ padding: "1%" }}
              >
                <Input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  value={userInfo.password}
                  onChange={handleChanges}
                  required
                />
              </FormGroup>
              <Button
                onClick={() => {
                  history.push("/postpage");
                }}
                className="btn"
                style={{ padding: "%" }}
              >
                Log in
              </Button>
            </Form>
            <p>{isFetching ? "Loading..." : null}</p>
            <p>{error ? error : null}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
