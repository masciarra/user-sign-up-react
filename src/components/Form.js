import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    
    submitHandler(){
        console.log('test');
    }
    
    render() {
        return (
            <div>
                <form>
                    <h1>Hello, welcome to our platform.</h1>
                    <h2>Please proceed with sign up</h2>
                    <p>First Name</p>
                    <input type='text' />
                    <p>Last Name</p>
                    <input type='text' />
                    <p>Date of Birth</p>
                    <input type='text' />
                    <p>Username</p>
                    <input type='text' />
                    <p>Password</p>
                    <input type='text' />
                    <p ></p>
                    <button onClick={this.submitHandler}>Submit</button>
                    
                </form>
                {/* <button onClick={this.submitHandler}>Submit</button> */}
            </div>
        )
    }
}

export default Form
