import React from 'react';


const data = [
   {
       name: 'egg',
       protein: 6,
       fat: 5,
       carbs: 0.6,
       calories: 78
    },
    {
       name: 'white rice',
       protein: 6,
       fat: 5,
       carbs: 0.6,
       calories: 78
    },
    {
       name: 'black beans',
       protein: 6,
       fat: 5,
       carbs: 0.6,
       calories: 78
    }
]




export default class Calc extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedFood: '',
            amount: 1
        }

        this.generateTotal = this.generateTotal.bind(this);
    }

   generateTotal(food, amount) {
        // console.log(food);
        // console.log(amount);
        let thisFood = data.find(element => element.name === food )
        return (
                <>
                    <li>Protein: { thisFood.protein * amount} </li>
                    <li>Fat: { thisFood.fat * amount }</li>
                    <li>Carbs: { thisFood.carbs * amount }</li>
                    <li>Calories: { thisFood.calories * amount }</li>
                </>
        )
   }

   handleClick() {
       console.log(this.state.selectedFood)
   }


    render() {
        const {selectedFood, amount} = this.state;
        return (
            <div style={{ textAlign: 'center', margin: "2em" }}>

                <div style={{ display: "inline-block", border: "2px solid gray", width: "600px", height: "500px" }}>
                    <div style={{ display: "flex", height: "500px" }}>

                        <div style={{ flex: "1", padding: "1em", borderRight: "1px solid gray" }}>

                            <h2>Input</h2>
                            <div style={{ margin: "1em" }}>
                                <div style={{ margin: "1em", display: "flex" }}>
                                    <select value={selectedFood} onChange={(e) => this.setState({selectedFood: e.target.value})} style={{ width: "100%", height: "40px", fontSize: "20px" }}>
                                        <option selected value='choose food'>Choose Food</option>
                                        <option value="egg">Egg</option>
                                        <option value="black beans">Black Beans</option>
                                        <option value="white rice">White Rice</option>
                                    </select>
                                </div>
                            </div>



                            <h2>Amount</h2>
                            <div style={{ margin: "1em" }}>
                                <div style={{ margin: "1em", display: "flex" }}>
                                    <select style={{ width: "100%", height: "40px", fontSize: "20px" }}>
                                        <option disabled selected value="volvo">Quantity</option>
                                        <option value="volvo">1</option>
                                        <option value="saab">2</option>
                                        <option value="mercedes">3</option>
                                        <option value="mercedes">4</option>
                                        <option value="mercedes">5</option>
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
                            onClick={() => {this.handleClick()}}>
                                Add </button>

                        </div>



                        <div style={{ flex: "1", padding: "1em", }}>
                            <h2>Total</h2>

                            <div>
                               <div style={{display: "flex"}}>
                                   <div style={{flex: "1", padding: "1em 0.5em"}}>
                                        <ul style={{listStyle: "none", textAlign: "left"}}>
                                            {
                                                selectedFood !== '' ?
                                                  this.generateTotal(selectedFood, amount)
                                                  :
                                                 <>
                                                    {/* <li>Protein</li>
                                                    <li>Fat</li>
                                                    <li>Carbs</li>
                                                    <li>Calories</li> */}
                                                  </>


                                            }



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