import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './css/App.css';
import Home from './components/Home';
import Section from './components/Section';
import Detail from './components/Detail';
import Movie from './components/Movie';
import Cinema from './components/Cinema';
import MovieCenter from './components/MovieCenter';
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
	      </div>
      </Router>
    );
  }
}

export default App;
