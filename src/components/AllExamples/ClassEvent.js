import { Component } from "react";
class ClassEvent extends Component{

    handleClick() {
        console.log("class based event handling");
    }
    render() {
        return(
            <div>
                this is the class based component
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}
export default ClassEvent;