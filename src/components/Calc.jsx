import React from 'react';


export default class Calc extends React.Component {
    render() {
        return (
            <div style={{ textAlign: 'center', margin: "2em" }}>

                <div style={{ display: "inline-block", border: "2px solid gray", width: "600px", height: "500px" }}>
                    <div style={{ display: "flex", height: "500px" }}>

                        <div style={{ flex: "1", padding: "1em", borderRight: "1px solid gray" }}>
                            <h2>Input</h2>
                            <div style={{ margin: "1em" }}>
                                <p>Choose Food:</p>
                                <div style={{ margin: "1em", display: "flex" }}>
                                    <select style={{ width: "100%", height: "40px", fontSize: "20px" }}>
                                        <option value="volvo">Egg</option>
                                        <option value="saab">Black Beans</option>
                                        <option value="mercedes">White Rice</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: "1", padding: "1em", }}>
                            <h2>Total</h2>

                            <div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}