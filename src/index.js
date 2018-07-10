import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCdMLJQQWvGBOn3PG5oIHlv7rsf1JPDdOw';


// create a new component. This should produce HTML. App is our base component
//This is a functional based component. used whenever we're taking information and spitting it out into JSX
// const App = () => {
//     return(
//         <div>
//             <SearchBar/>
//         </div>
//     );
// }

class App extends Component {
    constructor(props){
        super(props);

        //this is the concept of a selected video
        this.state = {
            videos:[],
            selectedVideo: null,
        };

        //callback function. updates state with new list of videos
        YTSearch({key: API_KEY, term:'surfboards'}, (videos)=> {
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });

        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    //updates apps' state with a selected video
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}


// Take this components generated HTML and put it on the page(in the dom)

ReactDOM.render(<App/>, document.querySelector('.container'));