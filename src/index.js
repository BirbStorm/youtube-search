import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./index.css"; 
import SearchBar from "./components/search_bar";
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import _ from 'lodash';


const API_KEY = 'INSERT API KEY HERE'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null 
        };
        this.videoSearch("surfboards");
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        })
    }


    render(){
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);
        return (
            <div>
            <SearchBar onSearchTermSearch={videoSearch}/>
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
