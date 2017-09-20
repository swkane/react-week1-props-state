import React from 'react';
import {Form, Label, Input, Button} from 'reactstrap';

export default class PlayListForm extends React.Component {
  render () {
    return (
      <div>
        <Form>
          <Label>User Name:</Label>
          <Input placeholder="Name or User Name" />
          <Label>Artist/Band:</Label>
          <Input placeholder="Artist or Band Name" />
          <Label>Song Title:</Label>
          <Input placeholder="Song Title" />
          <Label>Notes About the Song:</Label>
          <Input type="textarea"/>
          <Button color='primary'>Submit</Button>
        </Form>
      </div>
    )
  }
}
