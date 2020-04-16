import React, { Component } from 'react'

export class App extends Component {
    // getSleepData(){
    //     fetch("http://localhost:3000/fitbit/auth")
    //     .then(data => {
    //         return data.json();
    //     })
    //     .then(d => console.log(d));
    // }
    constructor(){
        this.state = {
            currentDate = "04/10/2002",
        }
    }
    render() {
        return (
            <div>
                <HorizontalDates />
                <div>
                    <SleepAnalysis />
                    <SleepLog />
                </div>
            </div>
        )
    }
}

export default App
