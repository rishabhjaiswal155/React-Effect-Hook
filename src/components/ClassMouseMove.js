import React, { Component } from 'react'

class ClassMouseMove extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }

    logMousePosition=e=>{
        this.setState({x:e.clientX, y:e.clientY })
    }

    componentDidMount(){
        window.addEventListener('mousemove',this.logMousePosition)
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove',this.logMousePosition)
    }
  render() {
    return (
      <div>ClassMouseMove<br/>
      X: {this.state.x}  <br/>
      Y: {this.state.y}
      </div>
    )
  }
}

export default ClassMouseMove