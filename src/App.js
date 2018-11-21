import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import PoemListPage from './PoemListPage'
import PoemPage from './PoemPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <Link to='/'>Poem List</Link>
        </nav>
        <header>
          <h1>William Setstatespear</h1>
        </header>
        <main>
          <Route
            exact path='/'
            component={PoemListPage}
          />
          <Route
            path='/poem/:poemId'
            component={PoemPage}
          />
        </main>
        <footer>
          <p>© WilliamSetstatespear, 2018. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
