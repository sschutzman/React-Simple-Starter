import React, { Component } from 'react';
//this is our class based component. class based componenets are used whenever we have a component that needs to be
// aware of state

class SearchBar extends Component{
    //this initializes state
    constructor(props){
        super(props);

        this.state = {term: ''};
    }
    render(){
        return (
            <div>
                <input
                    //this makes use of state by updating the user input whenever the state changes.
                    value={this.state.term}
                    //this is our event handler that tells us what is changing, and what state is manipulating
                    onChange={(event) => this.setState({term: event.target.value})} />
            </div>
        );
    }

}
//exports to index
export default SearchBar;