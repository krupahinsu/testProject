import React, { Component } from 'react'


export default class Unmount extends Component {
    constructor(props) {
      super(props);
    
      this.state = { display: true};
    }
      delete= ()=>{
            this.setState({display: false});
      }
    
    
    render() {
        let comp;
        if(this.state.display) {
            comp = <CompoOne />;
        }
    
    return (
      <div>
        {comp}
        <button onClick={this.delete} >delete the component</button>
      </div>
    );
  }
}
 class CompoOne extends Component{

    //Defining the componentwillUnmount methorder
    componentWillUnmount() {
        alert('the component is going to be unmounted');
    }
    
    render() {
    return <h1>Hello world!!</h1>
    }       
  }
