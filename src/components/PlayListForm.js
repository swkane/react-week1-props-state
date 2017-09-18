import React from 'react';
import {Form, Label, Input, Button} from 'reactstrap';

export default class PlayListForm extends React.Component {
  render () {
    return (
      <div>
        <Form>
          <Label>User Name:</Label>
          <Input placeholder="Name or User Name" />
          <Button color='primary'>Submit</Button>
        </Form>
      </div>
    )
  }
}
