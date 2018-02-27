import React, {Component} from 'react';
import Swiper from "swiper";

import "../css/swiper.css";
import "../css/Section.css"
import axios from "axios";
export default class Section extends Component{
	constructor (props){
		super(props);
		this.state = {
			billboards : [],
			films :[],
			films_1 : []
		}
		this.goto = this.goto.bind(this);
	}
	componentDidMount(){
		axios.get("/v4/api/billboard/home?__t=1519618176657")
		.then((res)=>{
			console.log(res);
			this.setState({
				billboards: res.data.data.billboards
			})
			setTimeout(()=>{
				 var mySwiper = new Swiper ('.swiper-container', {
			        autoplay: true,//可选选项，自动滑动
			        loop: true,
			    });
			})
		});
		axios.get("/v4/api/film/now-playing?__t=1519624711169&page=1&count=5")
		.then((res)=>{
			console.log(res);
			this.setState({
				films: res.data.data.films
			})
		})
		axios.get("/v4/api/film/coming-soon?__t=1519629496093&page=1&count=3")
		.then((res)=>{
			console.log(res);
			this.setState({
				films_1: res.data.data.films
			})
		})
	}
	goto(fid){
		console.log(fid)
		this.props.history.push("/detail/" + fid);
	}
	render(){
		var that = this;
		return (
			<div>
				<div id="lunbo" className="swiper-container">
				  <div className="swiper-wrapper">
				  	{
				  		this.state.billboards.map(function(item,index){
				  			return (
				  				<div key={item.id} className="swiper-slide">
							    	<img src={item.imageUrl} />
							    </div>
				  			)
				  		})
				  	}
				  </div>
				</div>
				<div className="list">
					<div className="list_1">
						<ul>
							{
								this.state.films.map((item,index)=>{
									return (
										<li key={item.id} onClick={()=>that.goto(item.id)}>
										  <div className="img">
										  		<a><img src={item.cover.origin}/></a>
										  </div>
										  <div className="row">
											<div className="rowleft">
												<p>{item.name}</p>
												<p>
													<span>{item.cinemaCount}</span>
													<span>家影院上映</span>
													<span>{item.watchCount}</span>
													<span>人购票</span>
												</p>
											</div>
											<div className="rowright">
												<span>{item.grade}</span>
											</div>
										  </div>
										</li>
									)
								})
							}
						</ul>
						<div className="more-button">更多热映电影</div>
					</div>
					<div className="loadingDiv"></div>
				</div>
				<div className="list2">
					<div className="top">
						<div className="up">
							即将上映
						</div>
					</div>
					<div className="movielist">
						<ul>
							{
								this.state.films_1.map((item,index)=>{
									return (
										<li key={item.id} onClick={()=>that.goto(item.id)}>
											<div className="movieimg">
												<a><img src={item.cover.origin}/></a>
											</div>
											<div className="brow">
												<div className="brleft">
													{item.name}
												</div>
												<div className="brright">
													2月28日上映
												</div>
											</div>
										</li>
										
									)
								})
							}
						</ul>
						<div className="more-button">更多即将上映电影</div>
					</div>
				</div>
			</div>
		)
		
	}
}
