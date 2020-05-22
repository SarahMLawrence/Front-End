//============//
//  IMPORTS   //
//============//
import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

//====================//
//  CLASS COMPONENT   //
//====================//
class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            credentials: {
                username: "",
                password: "",
            },
        };
    }

    //==============================================//
    //  Keeping track of state for the input and    //
    //  Updating the value on chage                 //
    //==============================================//
    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value,
            },
        });
        console.log(this.state.credentials);
    };

    //================//
    //  POST REQUEST  //
    //================//
    login = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/auth/login", this.state.credentials)
        .then((res) => {
            window.localStorage.setItem('token', res.data.payload);
        })
        .catch((err) => {
            console.log('The error is ', err);
            alert('INVALID: YOU CANNOT SIGN IN ');
        });
    };

    render() {
        return (
            <div>
                <form>
                    <input/>
                </form>
            </div>
        )
    }


}
export default Login;