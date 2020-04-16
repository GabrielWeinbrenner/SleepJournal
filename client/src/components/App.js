import React, { Component } from 'react'
import HorizontalDates from './HorizontalDates';
import SleepAnalysis from './SleepAnalysis';
import SleepLog from './SleepLog';
export class App extends Component {
    // getSleepData(){
    //     fetch("http://localhost:3000/fitbit/auth")
    //     .then(data => {
    //         return data.json();
    //     })
    //     .then(d => console.log(d));
    // }
    constructor(props){
        super(props);
        this.state = {
            currentDate: "04/10/2002",
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <HorizontalDates />
                </div>
                <div className="row">
                    <SleepAnalysis />
                    <SleepLog />
                </div>
            </div>
        )
    }
}

export default App
