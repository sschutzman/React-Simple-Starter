import React from 'react';
import ReactDOM from 'react-dom';

// create a new component. This should produce HTML.
const App = () => {
    return <div>Hi</div>;
}


// Take this components generated HTNL and put it on the page(in the dom)

ReactDOM.render(<App/>, document.querySelector('.container'));