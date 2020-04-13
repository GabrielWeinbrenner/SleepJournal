import React, { Component } from 'react'

export class App extends Component {
    getSleepData(){
        fetch("http://localhost:3000/fitbit/auth")
        .then(data => {
            return data.json();
        })
        .then(d => console.log(d));
    }
    render() {
        return (
            <div>
                App
            </div>
        )
    }
}

export default App
