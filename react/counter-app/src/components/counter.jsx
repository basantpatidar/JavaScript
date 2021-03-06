import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({value: this.state.value + 1});
  }

  render() {
    console.log("props", this.props);
    
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  //Creating a badge to count number of items in cart.
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  // // If items in cart are 0 then shows "zero" else digit
    formateCount() {
      const { value: count } = this.state;
      return count === 0 ? "Zero" : count;
    }
}

export default Counter;
