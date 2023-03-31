import React, { Component } from 'react'

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 1, };
        this.randNum = this.randNum.bind(this)
    }
    randNum() {
        let rand = Math.floor(Math.random() * this.props.maxNum);
        this.setState({ num: rand });
    }

    render() {
        return (
            <div>
                <h1>Number is {this.state.num}</h1>
                {this.state.num === 7
                    ? <h3>YOU WIN!!!</h3>
                    : <button onClick={this.randNum}>Random Number</button>}
            </div>
        )
    }
}

export default Clicker;

// Another way to make the conditional!
// {this.state.num !==7 && <button onClick={this.randNum}>Random Number</button>}
// {this.state.num ===7 && <h3>YOU WIN!!!</h3>}