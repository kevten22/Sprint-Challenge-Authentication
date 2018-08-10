import React, { Component } from 'react';
import axios from 'axios';



class Signup extends Component {
    state= {
        username: '',
        password: ''
    }
    render() {
        return (
            <div className="signup">
                <h1> Register a Joke account </h1>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input 
                            value={this.state.username}
                            onChange={this.inputChangeHandler} 
                            type="text" 
                            name="username"/>
                    </div>
                    <div>
                        <input 
                            value={this.state.password} 
                            onChange={this.inputChangeHandler} 
                            type="password" 
                            name="password" />
                    </div>
                    <div>
                        <button type="submit">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    inputChangeHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    submitHandler = event => {
        event.preventDefault();

        axios.post('http://localhost:5000/api/register', this.state).then(res => {
            const token = res.data;

            localStorage.setItem('jwt', token);
        })
        .catch(err => {
            console.error('Error in registering');
        })

        
    }
}

export default Signup;