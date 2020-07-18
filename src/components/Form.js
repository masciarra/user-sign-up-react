import React, { Component } from 'react'
// import './Form.css'


class Form extends Component {
    
    constructor(props){
        super(props)
        // this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            username: '',
            password: ''
        }
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
    
    submitHandler(event){
        // alert('test');
        // alert(`${this.state.firstName}`)
        alert(this.state.firstName)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Hello, welcome to our platform.</h1>
                <h2>Please proceed with sign up</h2>
                <form className = 'form' onSubmit = {this.submitHandler}>
                    <div>
                        <label className = 'label'>First Name</label>
                        <input type='text' value={this.state.firstName} onChange = {this.firstNameChangeHandler}/>
                    </div>
                    <div>
                        <label className = 'label'>Last Name</label>
                        <input type='text' value={this.state.lastName} onChange = {this.lastNameChangeHandler}/>
                    </div>
                    <div>
                        <label className = 'label'>Date of Birth</label>
                        <input type='text' value={this.state.dateOfBirth} onChange = {this.dateOfBirthChangeHandler}/>
                    </div>
                    <div>
                        <label className = 'label'>Username</label>
                        <input type='text' value={this.state.username} onChange = {this.usernameChangeHandler}/>
                    </div>
                    <div>
                        <label className = 'label'>Password</label>
                        <input type='text' value={this.state.password} onChange = {this.passwordChangeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
