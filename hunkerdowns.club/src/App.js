import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import SubFrequencies from './components/SubFrequencies';
import Join from './components/Join';
import {HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" component={Home}/>
          <Route path="/join" component={Join}/>
          <Route path="/subfrequencies" exact component={SubFrequencies}/>
          <Route path="/discord" component={() => {
            window.location.href='https://discord.gg/gxvy7qBtfb';
            return null;
          }}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;