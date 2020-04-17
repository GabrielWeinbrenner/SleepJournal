import React, { Component } from 'react'

export class SleepLog extends Component {
    render() {
        return (
            <div className="col sleepLog" >
                <div className="logs">
                    <h1>Dreams:</h1>
                    <p></p>
                    <h1>Sleep Quality:</h1>
                    <p></p>

                </div>
                <div className="row buttons">
                    <button type="button" class="sleepBtn col btn btn-primary">Edit</button>
                    <button type="button" class="sleepBtn col btn btn-danger">Delete</button>
                </div>
            </div>
        )
    }
}

export default SleepLog
