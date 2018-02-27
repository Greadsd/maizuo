import React, { Component } from 'react';
import axios from 'axios'
import '../css/Cinema.css'
export default class Cinema extends Component{
	constructor(props){
		super(props);
		this.state = {
			cinema : []
		}
		this.to = this.to.bind(this);
	}
	
	componentDidMount(){
		axios.get("/v4/api/cinema?__t=1519649854968")
		.then((res)=>{
			console.log(res);
			this.setState({
				cinema: res.data.data.cinemas
			})
		})
	}
	to(fid){
		console.log(fid)
		this.props.history.push("/moviecenter/" + fid);
	}
	render(){
		var that = this;
		return (
			<div className="cinema-view">
				<div className="district ">
					<div className="content">
						{
							this.state.cinema.map(function(item,index){
								return (
									<div key={item.id} className="cinema-wrap" onClick={()=>that.to(item.id)}>
										<div className="cinema clearfix">
											<div className="cinema-title">
												<div className="cinema-title-cinemaname">
													<i>{item.name}</i>
													<i className="icon-zuo book">1</i>
													<i className="icon-tong ticket">2</i>
												</div>
												<span className="cinema-title-tip"></span>
												<span className="cinema-title-address">
													<span>{item.address}</span>
													<span> </span>
												</span>
												<div className="cinema-title-location">
													<span>距离</span>
													<span>未知</span>
												</div>
											</div>
											<span className="pull-right nav">
												<i className="icon-arrow-right book">></i>
											</span>
										</div>
									</div>
								)
							})
						}
						
					</div>
				</div>
			</div>
		)
	}
}
