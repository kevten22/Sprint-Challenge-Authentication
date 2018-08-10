import React, { Component } from 'react';
import axios from 'axios';


class Jokes extends Component {
    state = {
        jokes: [],
    }
    render() {
        return (
            <div className="Jokes">
                <ul>
                    {this.state.jokes.map(joke =>
                        <li key={joke.id}>
                            Type: {joke.type}
                                 {joke.setup}
                                 {joke.punchline}
                        </li>)}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        const token = localStorage.getItem('jwt');
        const requestOptions = {
            headers: {
                Authorization: token
            }
        }
        axios
            .get('http://localhost:5000/api/jokes', requestOptions)
            .then(res => {
                this.setState({ jokes: res.data });
            })
            .catch(err => {
                console.error('Axios failed');
            })
    }
}

export default Jokes;