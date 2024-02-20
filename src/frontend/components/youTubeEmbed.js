import React from 'react';

class YouTubeEmbed extends React.Component {

    
  initPlayer = () => {
    this.player = new window.YT.Player(this.playerRef.current, {
      videoId: this.props.videoId,
      playerVars: {
        autoplay: 1, // Autoplay the video
        controls: 0, // Hide player controls
        disablekb: 1, // Disable keyboard control
        modestbranding: 1, // Hide YouTube logo
        rel: 0, // Hide related videos at the end
        showinfo: 0, // Hide video title and uploader information
        iv_load_policy: 3, // Hide annotations
        disablesearch: 1, // Hide search box
        enablejsapi: 1 // Enable JS API
      },
    });
  }
  
  constructor(props) {
    super(props);
    this.playerRef = React.createRef();
  }

  componentDidMount() {
    // Load the YouTube Iframe API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = this.initPlayer;
  }


  render() {
    return <div ref={this.playerRef} />;
  }
}

export default YouTubeEmbed;
