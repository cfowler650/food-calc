import React from 'react';
import _ from 'lodash';


const data = [
    {
        id: 1,
        name: 'egg',
        protein: 6,
        fat: 5,
        carbs: 0.6,
        calories: 78,
        measurement: "quantity"
    },
    {
        id: 2,
        name: 'white rice',
        protein: 8,
        fat: 5,
        carbs: 0.6,
        calories: 78,
        measurement: "cup"
    },
    {
        id: 3,
        name: 'black beans',
        protein: 9,
        fat: 5,
        carbs: 0.6,
        calories: 78,
        measurement: "cup"
    },


]




export default class Calc extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    id: 1,
                    name: 'egg',
                    protein: 6,
                    fat: 5,
                    carbs: 0.6,
                    calories: 78,
                    measurement: "quantity"
                },
                {
                    id: 2,
                    name: 'white rice',
                    protein: 8,
                    fat: 5,
                    carbs: 0.6,
                    calories: 78,
                    measurement: "cup"
                },
                {
                    id: 3,
                    name: 'black beans',
                    protein: 9,
                    fat: 5,
                    carbs: 0.6,
                    calories: 78,
                    measurement: "cup"
                },
            ],

            selectedFood: '',
            amount: 1,
            total: [0, 0, 0, 0]
        }


    }

    handleFoodChange(e) {
        this.setState({ selectedFood: e.target.value });
    }

    handleAmountChange(e) {
        this.setState({ amount: e.target.value });
    }

    filteredFoods() {
        const filtered = this.state.data.filter(food => food.name === this.state.selectedFood);
        return filtered
    }

    measuredInCups() {
        let selectedFoodObj = this.state.data.find(food => food.name === this.state.selectedFood);

        if (selectedFoodObj) {
            return Object.values(selectedFoodObj).includes("cup");
        }

    }

    handleAdd(total) {
        let selectedFoodObj = this.state.data.find(food => food.name === this.state.selectedFood);
        if (selectedFoodObj) {
            let temp = this.state.total.slice(0)

            temp[0] += selectedFoodObj.protein
            temp[1] += selectedFoodObj.fat
            temp[2] += selectedFoodObj.carbs
            temp[3] += selectedFoodObj.calories

            this.setState({ total: temp })
        }
    }

    render() {


        return (
            <div style={{ textAlign: 'center', margin: "2em" }}>
                <div className="main-container" style={{ display: "inline-block", border: "2px solid gray", width: "600px", }}>
                    <div className="top-two-flex-container" style={{ display: "flex", height: "300px", borderBottom: "2px solid gray" }}>
                        <div style={{ flex: "1", padding: "1em", borderRight: "1px solid gray" }}>
                            <h2>Input</h2>
                            <div style={{ margin: "1em" }}>
                                <div style={{ margin: "1em", display: "flex" }}>
                                    <select onChange={(e) => this.handleFoodChange(e)} style={{ width: "100%", height: "40px", fontSize: "20px" }}>
                                        {/* <option value="choose food">Chooses Food</option>
                                                <option value="egg">Egg</option>
                                                <option value="black beans">Black Beans</option>
                                                <option value="white rice">White Rice</option> */}
                                        {this.state.data.map(food => (
                                            <option value={food.name}>{food.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {this.measuredInCups() ?
                                <>
                                    <h2>Amount</h2>
                                    <div style={{ margin: "1em" }}>
                                        <div style={{ margin: "1em", display: "flex" }}>
                                            <select onChange={(e) => this.handleAmountChange(e)} style={{ width: "100%", height: "40px", fontSize: "20px" }}>
                                                <option value="Quantity">Quantity</option>


                                                <>
                                                    <option value="1">1 cup</option>
                                                    <option value="2">2 cup</option>
                                                    <option value="3">3 cup</option>
                                                    <option value="4">4 cup</option>
                                                    <option value="5">5 cup</option>
                                                </>

                                            </select>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <h2>Amount</h2>
                                    <div style={{ margin: "1em" }}>
                                        <div style={{ margin: "1em", display: "flex" }}>
                                            <select onChange={(e) => this.handleAmountChange(e)} style={{ width: "100%", height: "40px", fontSize: "20px" }}>
                                                <option value="Quantity">Quantity</option>


                                                <>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </>

                                            </select>
                                        </div>
                                    </div>
                                </>
                            }
                            <button style={{
                                width: "100px",
                                height: "40px",
                                fontSize: "20px",
                                textTransform: "uppercase",
                                borderRadius: "2%",
                                border: "none",
                                cursor: "pointer",
                                boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
                                backgroundColor: "teal",
                                color: "white"
                            }}
                                onClick={() => this.handleAdd()}
                            >
                                Add </button>
                        </div>

                        <div style={{ flex: "1", padding: "1em", }}>
                            <h2>Total</h2>
                            <div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ flex: "1", padding: "1em 0.5em" }}>
                                        {this.filteredFoods().map(food => (
                                            <ul >
                                                <li key={Math.random() * 1000 / 100}>
                                                    Protein: {Math.floor(food.protein * this.state.amount)}g
                                                            </li>
                                                <li key={Math.random() * 1000 / 100}>
                                                    Fat: {Math.floor(food.fat * this.state.amount)}g
                                                            </li>
                                                <li key={Math.random() * 1000 / 100}>
                                                    Carbs: {Math.floor(food.carbs * this.state.amount)}g
                                                            </li>
                                                <li key={Math.random() * 1000 / 100}>
                                                    Calories: {Math.floor(food.calories * this.state.amount)}
                                                </li>
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                    <div className="bottom-container">
                        <div className="bottom-container-contents" style={{ marginTop: "1em" }}>
                            <h2>Total for today</h2>
                            <div className="totals-div" style={{ margin: "10px 0px", padding: "10px 0px" }}>


                                <div className="title-container">
                                    <p className="nutrient-title">Protein</p>
                                    <p className="nutrient">{Math.floor(this.state.total[0])}g</p>
                                </div>
                                <div className="title-container">
                                    <p className="nutrient-title">Fats</p>
                                    <p className="nutrient">{Math.floor(this.state.total[1])}</p>
                                </div>
                                <div className="title-container">
                                    <p className="nutrient-title">Carbs</p>
                                    <p className="nutrient">{Math.floor(this.state.total[2])}</p>
                                </div>
                                <div className="title-container">
                                    <p className="nutrient-title">Calories</p>
                                    <p className="nutrient">{Math.floor(this.state.total[3])}</p>
                                </div>

                                {/* <ul>
                                    <li>Protein {this.state.total[0]} </li>
                                    <li>Fats {this.state.total[1]} </li>
                                    <li>Carbs {this.state.total[2]} </li>
                                    <li>Calories {this.state.total[3]} </li>

                                </ul> */}

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}