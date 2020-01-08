import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images? 
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  state = {
    weight: 0.5
  }
  displayEyeColor = () => {
    if (this.props.eyeColor === "blue") 
      return <img src={BlueBaby} style={{height: '200px'}} alt="MasterBlasterJrJr" />
    else if (this.props.eyeColor === "sun") 
      return <img src={SunBaby} style={{height: '200px'}} alt="MasterBlasterJrJr" />
    else
      return <img src={GlowingBaby} style={{height: '200px'}} alt="MasterBlasterJrJr" />
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  changeWeight = e => {
    if (e.target.name === "+") {
      this.setState ({
        weight: this.state.weight + 0.1
      })
    }
    else this.setState({
      weight: this.state.weight - 0.1
    })
  }

  render() {
    const {name, hobby, id} = this.props.info;
    return (
      <li className="hogbabies">
        <h1>Name: {name}</h1>
        <h3>Weight: {Math.round(this.state.weight*10)/10 } tonnes</h3>
        <h3>Hobby: {hobby} </h3>
        <h4>Eye Color: {this.props.eyeColor} </h4>
          
        <Button name="+" onClick = {(e) => this.changeWeight(e)}>
          Increase Weight
        </Button>
        <Button name="-" onClick = {(e) => this.changeWeight(e)}>
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          {this.displayEyeColor()}
        </div>
        
      </li>
    )
  }
}
