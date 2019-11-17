import React from 'react';
import Calc from './Calc';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <h1
                    style={{ textAlign: "center" }}>
                    Food Calc
                </h1>

                <Calc />
            </div>

        )
    }
}