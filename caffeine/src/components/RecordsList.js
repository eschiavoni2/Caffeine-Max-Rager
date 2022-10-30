import React from 'react';
import Button from 'react-bootstrap/Button';


export default class RecordsList extends React.Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.bev_type}
          </td>
          <td>
            {this.props.obj.bev_qty}
          </td>
          <td>
            <Button variant="primary">Go somewhere</Button>
          </td>
          <td>
            <Button variant="primary">Go somewhere</Button>
          </td>
        </tr>
      </tbody>
    )
  }
}