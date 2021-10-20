import React from 'react'
import YouTube from 'react-youtube'
import getYouTubeId from 'get-youtube-id'

const YTopts = {
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    modestbranding: 1,
    rel: 0,
  },
}

const VideoBlock = ({ block: { youtubeVideoPageUrl } }) => {
  const id = getYouTubeId(youtubeVideoPageUrl)
  return(<div style={{margin: '2em 0'}}>
    <YouTube videoId={id} opts={YTopts}/>
  </div>)
}

export default VideoBlock
