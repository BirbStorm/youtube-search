import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap CSS library
import "./index.css"; // in addition, import our own CSS specs
import SearchBar from "./components/search_bar";
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

// import * as serviceWorker from './serviceWorker';

const API_KEY = 'AIzaSyAsvLVh8NrTX0tWZ2sR5OQ0Exh0soFttk4'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
            // ES6 syntax for this.setState({ videos: videos});
            this.setState({ videos, selectedVideo: videos[0] })
        });
    }
    render(){
        return (
            <div>
                <SearchBar />
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList 
                        onVideoSelect={selectedVideo =>
                            this.setState({ selectedVideo })
                        }
                        videos={this.state.videos} />
                </div>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
