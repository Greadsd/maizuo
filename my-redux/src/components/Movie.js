import React, {Component} from 'react';
import axios from 'axios'
import "../css/Movie.css"

export default class Movie extends Component{
	constructor(props){
		super(props);
		
		this.state = {
			films :[]
		}
		
		this.togger = this.togger.bind(this);
		this.toggers = this.toggers.bind(this);
		this.goto = this.goto.bind(this);
	}
	
	componentDidMount(){
		axios.get("/v4/api/film/now-playing?page=1&count=7")
		.then((res)=>{
			console.log(res);
			this.setState({
				films: res.data.data.films
			})
		})
	}
	togger(){
		this.refs.ipt.setAttribute("class","choosing now-playing");
		this.refs.tog.setAttribute("class","coming-soon");
		axios.get("/v4/api/film/now-playing?page=1&count=7")
		.then((res)=>{
			console.log(res);
			this.setState({
				films: res.data.data.films
			})
		})
	}
	toggers(){
		this.refs.ipt.setAttribute("class","now-playing");
		this.refs.tog.setAttribute("class","choosing coming-soon");
		axios.get("/v4/api/film/coming-soon?page=1&count=7")
		.then((res)=>{
			console.log(res);
			this.setState({
				films: res.data.data.films
			})
		})
	}
	goto(fid){
		this.props.history.push("/detail/" + fid);
	}
	render(){
		var that = this;
		return (
			<div className="film-view">
				<div className="film-list-wrap">
					<div className="film-list-nav">
						<div onClick={this.togger} ref="ipt" className="choosing now-playing">正在热映</div>
						<div onClick={this.toggers} ref="tog" className="coming-soon">即将上映</div>
					</div>
					<div className="film-list">
						<ul className="list-unstyled">
							{
								this.state.films.map(function(item,index){
									return (
										<li key={item.id} onClick={()=>that.goto(item.id)}>
										<div className="film-item">
											<div className="film-item-img">
												<div className="img-responsive">
													<img src={item.poster.thumbnail} className="img"/>
												</div>
											</div>
											<div className="film-desc">
												<div className="film-next-arrow">
													<i className="icon-arrow-right film-next-icon">></i>
												</div>
												<div className="film-grade">{item.grade}</div>
												<div className="film-name">{item.name}</div>
												<div className="film-intro">{item.intro}</div>
												<div className="film-counts">
													<span className="film-count-color1">{item.cinemaCount}</span>
													<span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
													<span className="film-count-color1">{item.watchCount}</span>
													<span>人购票  </span>
												</div>
											</div>
										</div>
									</li>
									)
								})
							}
							
						</ul>
					</div>
				</div>
				<h1>影片</h1>
			</div>
		)
	}
}
