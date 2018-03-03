import React, {Component} from 'react';
import axios from 'axios'
import '../css/Detail.css'
export default class Detail extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			film : [],
			imgurl:[],
			actors : []
		}
		this.gogo = this.gogo.bind(this);
	}
	componentDidMount(){
		var id = this.props.match.params.fid
		axios.get(`/v4/api/film/${id}`)
		.then((res)=>{
			console.log(res);
			this.setState({
				film: res.data.data.film,
				imgurl:res.data.data.film.cover.origin,
				actors:res.data.data.film.actors
			})
		})
	}
	gogo(){
		this.props.history.push("/cinemal")
	}
	render() {
		var list = this.state.film;
		return (
			<div className="detail">
				<div className="imgli">
					<img src={this.state.imgurl}/>
				</div>
				<div className="list_txt">
					<div className="film-word1">影片简介</div>
					<div className="film-word2">
						<span >导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
						<span>{list.director}</span>
					</div>
					<div className="film-word2">
						<span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
						<span>
							{
								this.state.actors.map(function(item,index){
									return (
										<span key={item.name}>{item.name}&nbsp;|&nbsp;</span>
									)
								})
							}
						</span>
					</div>
					<div className="film-word2">
						<span>地区语言：</span>
						<span>{list.nation}</span>
						<span>(</span>
						<span>{list.language}</span>
						<span>)</span>
					</div>
					<div className="film-word2">
						<span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
						<span>{list.category}</span>
					</div>
					<div className="film-word2">
						<span>上映日期：</span>
						<span>1月19日上映</span>
					</div>
					<div className="film-word3">{list.synopsis}</div>
				</div>
				<div className="operation">
					<button className="cpn-primary-button" onClick={this.gogo}>立即购票</button>
				</div>
			</div>
		)
	
	}
}