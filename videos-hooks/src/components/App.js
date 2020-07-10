import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('kittens')
  }, []);

  const onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: process.env.REACT_APP_API_KEY
      }
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);

  };

  return (
      <div className="ui container">
        <SearchBar onFormSubmit={onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              < VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </div>
          </div>
        </div>
      </div>
    );

};



// class App extends React.Component {
//   state = { videos: [], selectedVideo: null };

  // componentDidMount() {
  //   this.onTermSubmit('kittens');
  // }

  // onTermSubmit = async term => {
  //   const response = await youtube.get('/search', {
  //     params: {
  //       q: term,
  //       part: 'snippet',
  //       maxResults: 5,
  //       type: 'video',
  //       key: process.env.REACT_APP_API_KEY
  //     }
  //   });
  //   this.setState({
  //     videos: response.data.items,
  //     selectedVideo: response.data.items[0]
  //   });
  // };

  // onVideoSelect = video => {
  //   this.setState({ selectedVideo: video });
  // }

  // render() {
    // return (
    //   <div className="ui container">
    //     <SearchBar onFormSubmit={this.onTermSubmit} />
    //     <div className="ui grid">
    //       <div className="ui row">
    //         <div className="eleven wide column">
    //           <VideoDetail video={this.state.selectedVideo} />
    //         </div>
    //         <div className="five wide column">
    //           < VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
//     // );
//   }
// }

export default App;
