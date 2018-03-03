import React, {Component} from 'react';
import axios from 'axios';
import Swiper from 'swiper';
import '../css/swiper.css';
import '../css/Film.css';

export default class Film extends Component{
	constructor(props){
		super(props);
		
		this.state = {
			filmList : [],
			schedules : []
		}
	}
	
	componentDidMount(){
		var id = this.props.match.params.fid;
		axios.get(`/v4/api/cinema/${id}/film?__t=1519812809966`)
		.then((res)=>{
			console.log(res);
			this.setState({
				filmList: res.data.data.filmList
			})
			setTimeout(function(){
				var galleryThumbs = new Swiper('.gallery-thumbs', {
			      spaceBetween: 10,
			      centeredSlides: true,
			      slidesPerView: 'auto',
			      touchRatio: 0.2,
			      slideToClickedSlide: true,
			    });
			},50)
		})
		axios.get("/v4/api/schedule?__t=1520059563636&film=0&cinema=5145")
		.then((res)=>{
			console.log(res);
			this.setState({
				schedules: res.data.data.schedules
			})
		})
	    

	}
	render(){
		return (
			<div className="cinema-schedule">
				<div className="cinema-film-list">
					<div className="swiper-container gallery-thumbs swiper-container-horizontal swiperpad">
					    <div className="swiper-wrapper">
					    	{
					    		this.state.filmList.map(function(item,index){
					    			return (
					    				<div className="swiper-slide list22" key={item.filmID}>
							            	<div className="film-list-img">
									      		<div className="img-responsive">
									      			<img src={item.posterAddress} className="imggg"/>
									      		</div>
									      		<div className="film-list-film-name">{item.filmName}</div>
									      	</div>
							            </div>
					    			)
					    		})
					    	}
					    </div>
				  	</div>
				</div>
				<div className="cinema-schedule-list">
					<div className="cinema-schedule-date">
						
					</div>
					<div className="schedule-list-wrap">
						<div className="schedule-detail">
							{
								this.state.schedules.map(function(item,index){
									return (
										<div className="schedule-detail-item" key={item.id}>
											<div className="schedule-detail-wrap clearfix">
												<div className="schedule-detail-arrow ">
													<i className="iconfont icon-arrow-right"></i>
												</div>
												<div className="schedule-detail-left clearfix">
													<div className="schedule-detail-price"><span>￥{item.price.maizuo + item.price.premium}.00</span></div>
													<div className="schedule-detail-showtime">22:15</div>
													<div className="schedule-detail-des">预计00:20结束/{item.film.language}{item.imagery}/{item.hall.name}</div>
													<div className="schedule-detail-origin-price">￥{item.price.cinema}.00</div>
												</div>
											</div>
										</div>
									)
								})
							}
							
						</div>
					</div>
				</div>
				<h1>films</h1>
			</div>
		)
	}
}

