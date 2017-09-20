import React from 'react';
import {Button} from 'reactstrap';
import PlayListItem from './PlayListItem';

export default class PlayList extends React.Component {
  state = {
    songs: []
  }
  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
          console.log("state", this.state.songs);
        })
  }

  fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
  }

  render() {
    return (
      <div>
        <Button className="btn-update" onClick={this.fetchData} color="info">Update List</Button>
        {this.state.songs.map((song, i) => <PlayListItem key={i} {...song} />)}
      </div>
    )
  }
}
