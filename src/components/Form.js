import React, { Component } from 'react'
import './Form.css'
import axios from 'axios'

var retrieveData = null;


class Form extends Component {
    

    constructor(props){
        super(props)
        this.state = {
            formFields: {
                firstName: '',
                lastName: '',
                dateOfBirth: '',
                username: '',
                password: ''
            }
        }
    }

    changeHandler = (e) => {
        let formFields = {...this.state.formFields};
        if(e.target.name == 'dateOfBirth'){
            const dateParts = e.target.value.split("/");
            const date = dateParts[2] + '-' + dateParts[0] + '-' + dateParts[1];
            formFields[e.target.name] = date;
            console.log('date baby!:' + date);
        }else{
            formFields[e.target.name] = e.target.value;
        }
        this.setState({
         formFields
        });
    }
    
    submitHandler = (e) => {
        // alert(`${this.state.firstName} ${this.state.lastName} ${this.state.dateOfBirth} ${this.state.username} ${this.state.password}`)
        // http://127.0.0.1:3002/api/posts
        // http://httpbin.org/post
        e.preventDefault();
        // console.log(this.state);
        // https://jsonplaceholder.typicode.com/posts
        // axios
        //     .post('http://127.0.0.1:3002/api/posts', this.state)
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => {
        //     console.log(error)
        //     });
        
        console.log("state before submitting: " + this.state.formFields.dateOfBirth);


        axios({
            method: 'post',
            url: 'http://127.0.0.1:3002/api/posts',
            data: this.state.formFields,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        axios({
            method: 'get',
            url: 'http://127.0.0.1:3002/api/gets',
            data: retrieveData,
        })

        console.log(retrieveData);
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Hello, welcome to our platform.</h1>
                    <h2>Please proceed with sign up.</h2>
                    <form className = 'form' onSubmit = {this.submitHandler}>
                        <div>
                            <label>First Name</label>
                            <input 
                                type='text' 
                                value={this.state.firstName} 
                                onChange = {this.changeHandler}
                                name='firstName'
                            />
                        </div>
                        <div>
                            <label>Last Name</label>
                            <input 
                                type='text' 
                                value={this.state.lastName} 
                                onChange = {this.changeHandler}
                                name='lastName'
                            />
                        </div>
                        <div>
                            <label>Date of Birth</label>
                            <input 
                                // type='date' 
                                value={this.state.dateOfBirth} 
                                onChange = {this.changeHandler}
                                name='dateOfBirth'
                            />
                        </div>
                        <div>
                            <label>Username</label>
                            <input 
                                type='text' 
                                value={this.state.username} 
                                onChange = {this.changeHandler}
                                name='username'
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input 
                                type='text' 
                                value={this.state.password} 
                                onChange = {this.changeHandler}
                                name='password'
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div>
                    <p className='dobexample'>example: 6/30/2020</p>
                </div>
            </div>
        )
    }
}

export default Form
