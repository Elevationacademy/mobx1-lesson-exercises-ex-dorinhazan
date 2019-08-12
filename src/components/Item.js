import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = (e) => {
    let person = prompt("Please enter your name", "Harry Potter");
    this.props.store.editItem(e.target.value, person)
  }

  deleteItem = (e) => {
    this.props.store.deleteItem(e.target.value)
  }
  render() {
    let item = this.props.item

    return (
      <div className={item.completed ? "apllied" : "notapllied"}>
        <input type="checkbox" onClick={this.checkItem} value={item.name}></input>
        {item.name} {item.location}
        <button value={item.name} onClick={this.editItem}>EditItem</button>
        <button value={item.name} onClick={this.deleteItem}>DeleteItem</button>

      </div>)
  }
}

export default Item