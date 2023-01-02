import React from 'react';

class AddContact extends React.Component{
    add = (e) => {
        e.preventDefault();
        if(this.state.name==="" && this.state.email===""){
            alert("all the fields are mandatory")
            return
        }
        console.log(this.state);
    }
    render() {
        return(
            <div classname="ui main">
                <h2>Add Contacts</h2>
                {this.props.name}
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" value={this.props.name} placeholder="Name" onChange={(e)=> this.props.setName(e)}></input>
                    </div>
                
                    {/* <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={(e)=> this.setState({email:e.target.value})}></input>
                    </div> */}
                    <button classname="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;