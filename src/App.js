import React from 'react';
import Navbar from './components/Navvbar.js';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/home';
import About from './components/about.js';
import Contact from './components/contact.js';
import Post from './components/posts.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path='/'  component={Home}/>
      <Route path='/about'   component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/:post_id' component={Post}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
