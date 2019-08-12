import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Item from './components/Item';
// import DevTools from 'mobx-react-devtools';


@observer
class App extends Component {
  constructor() {
    super()
    this.state = {
      newItem: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }
  addItem = () => {
    this.props.store.addItem(this.state.newItem)
  }
  render() {
    let store = this.props.store
    return (
      <div className="App">
        < DevTools />
        <input onChange={this.handleChange} />
        <button onClick={this.addItem}>Add</button>
        {store.list.map(m => <Item item={m}  store={this.props.store} />)}
        <div>
        </div>
      </div>
    );
  }
}

export default App;
