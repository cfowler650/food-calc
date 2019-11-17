import React from 'react';


export default class Calc extends React.Component {
    render() {
        return (
            <div style={{ textAlign: 'center', margin: "2em" }}>

                <div style={{ display: "inline-block", border: "2px solid gray", width: "600px", height: "500px" }}>
                    <div style={{ display: "flex", height: "500px" }}>
                        <div style={{ flex: "1", padding: "1em", borderRight: "1px solid gray" }}>
                            Input
                        </div>
                        <div style={{ flex: "1", padding: "1em", }}>
                            Total
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}