import React from 'react';

class Lifecycle extends React.Component {
     constructor() {
     super();
     this.state = {
        favoritecolor: 'red'
     };
 }
   
 componentDidMount() {
    setTimeout(()=>{this.setState({favoritecolor: 'blue'})}
    ,100)
 }

 componentDidUpdate() {
    document.getElementById("mydiv").innerHTML= "the updated favorite is" + this.state.favoritecolor;
 }

  render() {
    return(
    <div>
        <h1>my favoritecolor:{this.state.favoritecolor} </h1>
        <div id="mydiv"></div>
    </div>
    );
  }
}

export default Lifecycle;
