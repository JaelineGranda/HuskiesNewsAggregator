import React from 'react';
import SearchBar from './searchbar/searchbar';
import { config } from './api/youtubeapi';
import VideoList from './videolist';
import VideoDetail from './videodetail';
import axios from 'axios';
import './video.scss'

class Video extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    // gets videos from youtube based on searchbar input
    handleSubmit = async (termFromSearchBar) => {
        config['params'] = { ...config['params'], q: termFromSearchBar};
        const response = await axios.get('/search', config);

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    // sets state when video is chosen
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className='ui-container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="videoList">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Video;