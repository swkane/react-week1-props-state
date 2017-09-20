import React from 'react';
import {Form, Label, Input, Button} from 'reactstrap';

export default class PlayListForm extends React.Component {
  state = {
    userName: "",
    songArtist: "",
    songTitle: "",
    songNotes: ""
  }
  handleUserName = (e) => {
    this.setState({userName: e.target.value});
  }
  handleSongArtist = (e) => {
    this.setState({songArtist: e.target.value});
  }
  handleSongTitle = (e) => {
    this.setState({songTitle: e.target.value});
  }
  handleSongNotes = (e) => {
    this.setState({songNotes: e.target.value});
  }
  addToList = (e) => {
      e.preventDefault();
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render () {
    return (
      <div>
        <Form>
          <Label>User Name:</Label>
          <Input onChange={this.handleUserName} value={this.state.userName} placeholder="Name or User Name" />
          <Label>Artist/Band:</Label>
          <Input onChange={this.handleSongArtist} value={this.state.songArtist} placeholder="Artist or Band Name" />
          <Label>Song Title:</Label>
          <Input onChange={this.handleSongTitle} value={this.state.songTitle} placeholder="Song Title" />
          <Label>Notes About the Song:</Label>
          <Input onChange={this.handleSongNotes} value={this.state.songNotes} type="textarea"/>
          <Button onClick={this.addToList} color='primary'>Submit</Button>
        </Form>
      </div>
    )
  }
}
