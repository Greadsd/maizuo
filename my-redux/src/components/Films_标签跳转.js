import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Films extends Component {
	constructor() {
		super();
		this.state = {
			films: []
		}
	}
	componentDidMount() {
		axios.get("/v4/api/film/now-playing?__t=1517911051108&page=1&count=10")
		.then((res)=>{
			console.log(res);
			this.setState({
				films: res.data.data.films
			})
		})
	}
	render() {
		return (
			<div>
				<h1>电影列表</h1>
				{
					this.state.films.map(function(item, index){
						return (
							<div key={item.name}>
								<Link to={"/detail/" + item.id}>
								<h3>{item.name}</h3>
								<img src={item.cover.origin} />
								</Link>
							</div>
						)
					})
				}
			</div>
		)
	}
}