import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div>
      <img alt={video.snippet.channelTitle} src={video.snippet.thumbnails.medium.url} />
      {video.snippet.title}
    </div>
  )
};

export default VideoItem;
