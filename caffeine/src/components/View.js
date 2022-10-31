import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Table from "react-bootstrap/Table";

export default class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bev_list: [] };
    this.headers = [
      { key: "id", label: "Id" },
      { key: "bev_qty", label: "Quantity" },
      { key: "bev_type", label: "Beverage" },
      { key: "bev_mg", label: "Caffeine Consumed Mg" },
      { key: "leftover_mg", label: "Remaining Mg" }
    ];
    this.state = { checkedBoxes: [] };
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.deleteBeverages = this.deleteBeverages.bind(this);
  }

  toggleCheckbox = (e, item) => {
    if (e.target.checked) {
      let arr = this.state.checkedBoxes;
      arr.push(item.id);

      this.setState = { checkedBoxes: arr };
    } else {
      let items = this.state.checkedBoxes.splice(this.state.checkedBoxes.indexOf(item.id), 1);

      this.setState = {
        checkedBoxes: items
      }
    }
    console.log(this.state.checkedBoxes);
  }

  componentDidMount() {
    fetch("http://localhost/ReactPHPcrud/list_bev.php").then(response => {
      console.log(response);
      return response.json();
    }).then(result => {
      // Work with JSON data here
      console.log(result);
      this.setState({
        bev_list: result
      });
    }).catch(err => {
      // Do something for an error here
      console.log("Error Reading data " + err);
    });
  }

  deleteBeverages = () => {
    axios.get("http://localhost/ReactPHPcrud/delete.php?id=" + this.state.checkedBoxes)
    if (window.confirm("Are you sure, want to delete the selected beverage?")) {
      alert(this.state.checkedBoxes + " Succesfully Deleted");
    }
    window.location.reload(false);
  }

  render() {
    const bevFound = this.state.bev_list && this.state.bev_list.length;
    if (bevFound) {
      return (
        <div className="text-center pb-5">
          <h3 className="mb-3">Caffeine Consumed</h3>
          <Table striped="columns" hover variant="dark">
            <thead>
              <tr>
                {
                  this.headers.map(function (h) {
                    return (
                      <th key={h.key}>{h.label}</th>
                    )
                  })
                }
              </tr>
            </thead>
            <tbody>
              {
                this.state.bev_list.map(function (item, index) {
                  return (
                    <tr key={index}>
                      <td><input type="checkbox" className="selectsingle" value="{item.id}" checked={this.state.checkedBoxes.find((p) => p.id === item.id)} onChange={(e) => this.toggleCheckbox(e, item)} />
                        {/* {item.id} */}
                      </td>
                      <td>{item.bev_type}</td>
                      <td>{item.bev_qty}</td>
                      <td>{item.bev_mg}</td>
                      <td className="text-info">{item.leftover_mg}</td>
                    </tr>
                  )
                }.bind(this))
              }
            </tbody>
          </Table>
          <div className="d-flex justify-content-end">
            <Button type="button" variant="outline-danger" name="delete" className="justify-content-end" onClick={this.deleteBeverages}>Delete Selected Beverage</Button>
          </div>
          </div>
      )
    } else {
      return (
        <div id="container">
          No beverages found
        </div>
      )
    }
  }
}