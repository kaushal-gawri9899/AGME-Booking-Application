import React, { Component } from 'react'
import loginImg from '../Components/avatar.png'
import './CSS/todo.css'


class Register extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            email: "",
            firstName: "",
            lastName: "",
            password: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    userNamehandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !`)
        console.log(this.state);
        this.setState({
            email: "",
            firstName: "",
            lastName: "",
            password: '',
          
        })
     event.preventDefault()
        
    }

render() {
        return (
            <div className="registerBox">
                <img src={loginImg} class="avatar"></img>
                <form onSubmit={this.handleSubmit}>
                    <h1>CREATE AGME ACCOUNT</h1>
                    <p>UserName </p> <input type="text" value={this.state.username} onChange={this.userNamehandler} placeholder="Username" required /><br />
                    <p>Email</p> <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Email"  required/><br />
                    <p>FirstName</p> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName"  required/><br />
                    <p>LastName</p> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName"  required/><br />
                    <p>Password</p> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password" required /><br />
                    <br/><input type="submit" value="Register Account" />
                    <a href="Login">Back to Login</a><br></br><br></br>
                    <a href="Home">Home</a>
                </form>

            </div>
            
        )
    }
}

export default Register
