import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './css/App.css';
import Home from './components/Home';
import Section from './components/Section';
import Detail from './components/Detail';
import Movie from './components/Movie';
import Cinema from './components/Cinema';
import MovieCenter from './components/MovieCenter';
import Login from './components/Login';
import Salescard from './components/Salescard';
import Film from './components/Film';
import City from './components/City';
import Cinema1 from './components/Cinema1';
class App extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
	}
  render() {
    return (
    	<Router>
	      <div className="App">
	          <Link to="/"></Link>
	          <Route  path="/" component={Home} />
	          <Route exact path="/" component={Section} />
	          <Route path="/detail/:fid" component={Detail} />
	          <Route path="/movie" component={Movie} />
	          <Route path="/cinema" component={Cinema} />
	          <Route path="/moviecenter/:fid" component={MovieCenter} />
	          <Route path="/login" component={Login} />
	          <Route path="/salescard" component={Salescard} />
	          <Route path="/film/:fid" component={Film} />
	          <Route path="/city" component={City} />
	          <Route path="/cinemal" component={Cinema1} />
	      </div>
      </Router>
    );
  }
}

export default App;
