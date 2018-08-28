import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";

class HelloUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "FOULEN",
      number: ".... .... .... ....",
      month: "..",
      day: ".."
    };
  }

  //Name of Card Owner
  nameChange(n) {
    this.setState({
      name: n.target.value
    });
  }
  //Card Number
  numberChange(c) {
    this.setState({
      number: c.target.value
    });
  }
  //Expiration
  monthChange(m) {
    this.setState({
      month: m.target.value
    });
  }
  dayChange(d) {
    this.setState({
      day: d.target.value
    });
  }
  renderCardNumber = number => {
    number = this.state.number.toString();
    // '7253325678951245'
    let resultStr = "";
    for (let i = 0; i < this.state.number.length; i += 4) {
      resultStr += this.state.number.slice(i, i + 4) + " ";
    }
    return resultStr.trim();
  };
  render() {
    return (
      <div className="card">
        <div className="card-container">
          <h1 className="card-title">Company name</h1>
          <img
            className="card-logo"
            src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png"
            alt=""
          />
          <p className="card-number">{this.state.number}</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="name">
              <label1>
                CARDHOLDER
                <p className="card-name">{this.state.name}</p>
              </label1>
            </div>
            <div className="expiration">
              <br />
              <label1>
                <p className="card-date">
                  {this.state.month} / {this.state.day}
                </p>
              </label1>
            </div>
          </div>
          <br /> <br /> <br />
          <label2>
            NAME
            <input
              type="text"
              maxLength="20"
              onChange={this.nameChange.bind(this)}
            />
          </label2>{" "}
          <br />
          <br />
          <label2>
            NUMBER
            <input
              type="text"
              maxLength="19"
              onChange={this.numberChange.bind(this)}
            />
          </label2>{" "}
          <br />
          <br />
          <label2 className="exp" style={{ display: "flex" }}>
            EXPIRATION DATE
          </label2>
          <input
            type="text"
            maxLength="2"
            onChange={this.monthChange.bind(this)}
          />
          <input
            type="text"
            maxLength="2"
            onChange={this.dayChange.bind(this)}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<HelloUser />, document.getElementById("root"));
