import React from 'react';

export default class PlayListItem extends React.Component {
  render() {
    const {userName, songArtist, songTitle, songNotes} = this.props;
    return (
        <div className="playlist-item">
          <p><span>User:</span> {userName}</p>
          <p><span>Artist/Band:</span> {songArtist}</p>
          <p><span>Title:</span> {songTitle}</p>
          <p><span>Notes:</span> {songNotes}</p>
        </div>
      )
    }
  }
