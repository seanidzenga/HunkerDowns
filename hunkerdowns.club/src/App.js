import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import SubFrequencies from './components/SubFrequencies';
import Join from './components/Join';
import {BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/join" component={Join}/>
        <Route path="/subfrequencies" exact component={SubFrequencies}/>
        <Route path="/discord" exact component={() => {
          window.location.href='https://discord.gg/gxvy7qBtfb';
          return null;
        }}/>
      </div>
    </Router>
  );
}

export default App;