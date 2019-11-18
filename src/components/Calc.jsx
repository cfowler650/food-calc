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
    }
]




export default class Calc extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedFood: '',
            amount: 1,

        }

        this.handleFoodChange = this.handleFoodChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.filteredFoods = this.filteredFoods.bind(this);
    }

    handleFoodChange(e) {
       this.setState({selectedFood: e.target.value});
    }

    handleAmountChange(e) {
        this.setState({...this.state, amount: e.target.value});
    }

    filteredFoods() {
      const filtered = data.filter(food => food.name === this.state.selectedFood);
      return filtered
    }

    render() {

        const {isMeasuredInCups} = this.state;
        return (
            <div style={{ textAlign: 'center', margin: "2em" }}>

                <div style={{ display: "inline-block", border: "2px solid gray", width: "600px", height: "500px" }}>
                    <div style={{ display: "flex", height: "500px" }}>

                        <div style={{ flex: "1", padding: "1em", borderRight: "1px solid gray" }}>

                            <h2>Input</h2>
                            <div style={{ margin: "1em" }}>
                                <div style={{ margin: "1em", display: "flex" }}>
                                    <select onChange={this.handleFoodChange} style={{ width: "100%", height: "40px", fontSize: "20px" }}>
                                        <option value="choose food">Chooses Food</option>
                                        <option value="egg">Egg</option>
                                        <option value="black beans">Black Beans</option>
                                        <option value="white rice">White Rice</option>
                                    </select>
                                </div>
                            </div>


                            <h2>Amount</h2>
                            <div style={{ margin: "1em" }}>
                                <div style={{ margin: "1em", display: "flex" }}>
                                    <select onChange={this.handleAmountChange}style={{ width: "100%", height: "40px", fontSize: "20px" }}>
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



                            <button style={{ width: "100px",
                            height: "40px",
                            fontSize: "20px",
                            textTransform: "uppercase",
                            borderRadius: "2%",
                            border: "none",
                            cursor:"pointer",
                            boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
                            backgroundColor: "teal",
                            color: "white" }}
                            >
                                Add </button>

                        </div>



                        <div style={{ flex: "1", padding: "1em", }}>
                            <h2>Total</h2>

                            <div>
                               <div style={{display: "flex"}}>
                                   <div style={{flex: "1", padding: "1em 0.5em"}}>
                                        <ul style={{listStyle: "none", textAlign: "left"}}>

                                            {this.filteredFoods().map(food => (
                                                <>
                                                    <li key={1}>
                                                        Protein: {Math.floor(food.protein * this.state.amount)}g
                                                    </li>
                                                    <li key={2}>
                                                        Fat: {Math.floor(food.fat * this.state.amount)}g
                                                    </li>
                                                    <li key={3}>
                                                        Carbs: {Math.floor(food.carbs * this.state.amount)}g
                                                    </li>
                                                    <li key={4}>
                                                        Calories: {Math.floor(food.calories * this.state.amount)}
                                                    </li>
                                                </>
                                            ))}
                                        </ul>
                                   </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        )
    }
}