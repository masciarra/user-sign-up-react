import React, { Component } from 'react'
import './Form.css'


class Form extends Component {
    
    constructor(props){
        super(props)
        // this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            username: '',
            password: '',
        }
    }


    submitHandler(event){
        // event.preventDefault();
        // const data = new FormData(event.target);
        // let s = data.get('firstName')
        // this.setState({
        //     firstName: s,
        //     lastName: data.get('lastName'),
        //     dateOfBirth: data.get('dateOfBirth'),
        //     username: data.get('username'),
        //     password: data.get('password')
        // });
        alert(`${this.state.firstName} ${this.state.lastName} ${this.state.password}`);
        event.preventDefault();
        // alert(this.state.firstName);
    }

    firstNameChangeHandler = (event) => {
        this.setState({
            firstName : event.target.value
        })
    }

    lastNameChangeHandler = (event) => {
        this.setState({
           lastName : event.target.value
            
        })
    }

    dateOfBirthChangeHandler = (event) => {
        this.setState({
           dateOfBirth : event.target.value
            
        })
    }

    usernameChangeHandler = (event) => {
        this.setState({
           username : event.target.value
            
        })
    }

    passwordChangeHandler = (event) => {
        this.setState({
           password : event.target.value
            
        })
    }
    
    render() {
        return (
            <div>
                <h1>Hello, welcome to our platform.</h1>
                <h2>Please proceed with sign up</h2>
                <form className = 'form' onSubmit = {this.submitHandler}>
                    <div>
                        <label className = 'label'>First Name</label>
                        <input type='text' name = 'firstName' value={this.state.firstName} onChange = {this.firstNameChangeHandler}/>
                    </div>
                    <div>
                        <label className = 'label'>Last Name</label>
                        <input type='text' name = 'lastName' value={this.state.lastName} onChange = {this.lastNameChangeHandler}/>
                    </div>
                    <div>
                        <label className = 'label'>Date of Birth</label>
                        <input type='text' name = 'dateOfBirth' value={this.state.dateOfBirth} onChange = {this.dateOfBirthChangeHandler}/>
                    </div>
                    <div>
                        <label className = 'label'>Username</label>
                        <input type='text' name = 'username' value={this.state.username} onChange = {this.usernameChangeHandler}/>
                    </div>
                    <div>
                        <label className = 'label'>Password</label>
                        <input type='text' name = 'password' value={this.state.password} onChange = {this.passwordChangeHandler}/>
                    </div>
                    <p ></p>
                    <button>Submit</button>
                    
                </form>
                {/* <button onClick={this.submitHandler}>Submit</button> */}
            </div>
        )
    }
}

export default Form
