import React, { Component } from 'react'
import './Form.css'
import axios from 'axios'
import Moment from 'react-moment';
import moment from 'moment';

var retrieveData = null;


class Form extends Component {


    constructor(props) {
        super(props)
        this.state = {
            formFields: {
                firstName: '',
                lastName: '',
                email: '',
                dateOfBirth: '',
                username: '',
                password: ''
            }
        }
    }

    changeHandler = (e) => {
        let formFields = { ...this.state.formFields };
        if (e.target.name === 'dateOfBirth') {
            const dateParts = e.target.value.split("/");
            const date = dateParts[2] + '-' + dateParts[0] + '-' + dateParts[1];
            formFields[e.target.name] = date;
        } else {
            formFields[e.target.name] = e.target.value;
        }
        this.setState({
            formFields
        });
    }

    submitHandler = (e) => {
        e.preventDefault();

        // var date = new Date(this.state.formFields.dateOfBirth);
        // const dateString = date.toISOString();
        // console.log(dateString.substring(0,10));


        axios({
            method: 'post',
            url: 'http://127.0.0.1:3002/api/posts',
            data: this.state.formFields,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        // axios({
        //     method: 'get',
        //     url: 'http://127.0.0.1:3002/api/gets',
        //     data: retrieveData,
        // })

        // console.log(retrieveData);

        axios.get('http://127.0.0.1:3002/api/gets')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    render() {
        return (
            <div>
                <div className='formBox'>

                    <form className='form' onSubmit={this.submitHandler}>
                        <h1>Hello, welcome to our platform.</h1>
                        <h2>Please proceed with sign up.</h2>
                        <div>
                            <label>First Name</label>
                            <input
                                type='text'
                                value={this.state.firstName}
                                onChange={this.changeHandler}
                                name='firstName'
                            />
                        </div>
                        <div>
                            <label>Last Name</label>
                            <input
                                type='text'
                                value={this.state.lastName}
                                onChange={this.changeHandler}
                                name='lastName'
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                type='email'
                                value={this.state.email}
                                onChange={this.changeHandler}
                                name='email'
                            />
                        </div>
                        <div>
                            <label>Date of Birth</label>
                            <input
                                // type='date' 
                                value={this.state.dateOfBirth}
                                onChange={this.changeHandler}
                                name='dateOfBirth'
                            />
                        </div>
                        <div>
                            <label>Username</label>
                            <input
                                type='text'
                                value={this.state.username}
                                onChange={this.changeHandler}
                                name='username'
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type='text'
                                value={this.state.password}
                                onChange={this.changeHandler}
                                name='password'
                            />
                        </div>
                        <button type="submit">Submit</button>
                        <div>
                            <p className='dobexample'>example: 6/30/2020</p>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default Form
