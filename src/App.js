import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: "",
      y: "",
      color: "#FFFFFF"
    }
    this.showCoords = this.showCoords.bind(this)
    this.clearCoords = this.clearCoords.bind(this)
    this.generateColor = this.generateColor.bind(this)
  }

  showCoords(event) {
    var x = event.clientX
    var y = event.clientY
    this.setState({
      x:event.clientX,
      y:event.clientY,
      color:this.generateColor(x, y)
    })
  }

  clearCoords() {
    this.setState({
      x:"",
      y:"",
      color:"#FFFFFF"
    })
  }

  generateColor(x, y) {
    var xx = x.toString(16)
    var yy = y.toString(16)
    var zz = "00"
    return ("#"+zz+xx.toString()+yy.toString())
  }

  render() {
    const {color} = this.state
    return (
      <div style={{backgroundColor: color}}
           className="div-element"
           onMouseMove={this.showCoords}
           onMouseOut={this.clearCoords}>
           React Magic!!
      </div>
    )
  }
}

export default App;