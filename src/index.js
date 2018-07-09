import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCdMLJQQWvGBOn3PG5oIHlv7rsf1JPDdOw';


// create a new component. This should produce HTML. App is our base component
//This is a functional based component. used whenever we're taking information and spitting it out into JSX
const App = () => {
    return(
        <div>
            <SearchBar/>
        </div>
    );
}


// Take this components generated HTNL and put it on the page(in the dom)

ReactDOM.render(<App/>, document.querySelector('.container'));