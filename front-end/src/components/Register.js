//============//
//  IMPORTS   //
//============//

import React from "react";
// import { Form, FormGroup, Input, Button } from "reactstrap";
import { Form, withFormik, Field } from "formik";

import { Button } from "reactstrap";

import * as yup from "yup";

import { axiosWithAuth } from "../utils/axiosWithAuth";

function Register({ errors, touched, status }) {
  return (
    <div>
      <div className="register" style={{padding:'2%'}}>
        <h2 className="regTitle">Welcome new user!</h2>
        <Form className="registerForm" >
          {/* <FormGroup className="mb-2 mr-sm-2 mb-sm-0"  style={{padding: '1%'}}> */}
          <Field
          style={{margin:'2%', borderRadius: '4px', borderColor: 'silver', height: '2.5rem'}}
            key="username"
            type="text"
            name="username"
            placeholder="USERNAME"
          ></Field>
          {touched.username && errors.username && <p>{errors.username}</p>}
          {/* </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0"  style={{padding: '1%'}}> */}
          <Field
          style={{margin:'2%', borderRadius: '4px', borderColor: 'silver', height:'2.5rem'}}
            key="password"
            type="password"
            name="password"
            placeholder="PASSWORD"
            className="signUpPassword"
          ></Field>

          {touched.password && errors.password && <p>{errors.password}</p>}
          {/* </FormGroup> */}
          {/* <FormGroup className="mb-2 mr-sm-2 mb-sm-0"  style={{padding: '1%'}}> */}

          <Field
          style={{margin:'2%', borderRadius: '4px', borderColor: 'silver', height: '2.5rem'}}
            key="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="RE-TYPE PASSWORD"
            className="signUpConfirmPassword"
          ></Field>

          {touched.password && errors.password && <p>{errors.password}</p>}
          {/* </FormGroup> */}
          <Button type="submit" className="btn" style={{padding:'5%'}}>
            Sign Up Now
          </Button>
        </Form>
      </div>
    </div>
  );
}
const formikHOC = withFormik({
  mapPropsToValues({ username, password, confirmPassword }) {
    return {
      username: username || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
    };
  },
  validationSchema: yup.object().shape({
    // username: yup.string()
    // .username("Username not valud")
    // .required("Username is required"),
    password: yup
      .string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Password is required"),
  }),
  handleSubmit(values, { setStatus, props }) {
    const loginInfo = {
      username: values.username,
      password: values.username,
    };

    axiosWithAuth()
      .post("/auth/register", loginInfo)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.password);
      })

      .catch((err) => {
        console.log("SignUp Failed", err);
      });
    props.history.push("/postpage");
  },
})(Register);

export default formikHOC;
