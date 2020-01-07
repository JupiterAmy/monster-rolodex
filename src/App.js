import React, {Component} from 'react';
import {CardList} from "./components/card-list/CardList";
import './App.css';
import { SearchBox } from './components/searchbox/SearchBox';

class App extends Component {
  state = {
    monsters: [],
    searchText: ""
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleSearch = (e) => {
    this.setState({ searchText:  e.target.value});
  }

  render() {
    return (
      <div className="App">
        <SearchBox handleSearch={this.handleSearch}/>
        <CardList monsters={this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchText.toLowerCase()))} />
      </div>
    );
  }
}

export default App;
