import React, { Component } from 'react';
import axios from 'axios'
import '../css/Cinema.css'
export default class Cinema1 extends Component{
	constructor(props){
		super(props);
		this.state = {
			cinema : [],
			arr_d :[],
			list :[]
		}
		this.to = this.to.bind(this);
	}
	
	componentDidMount(){
		var arr = [];
		var list = [];
		axios.get("/v4/api/cinema?__t=1519649854968")
		.then((res)=>{
			console.log(res);
			this.setState({
				cinema: res.data.data.cinemas
			})
		})
		setTimeout(()=>{
			var log = this.state.cinema;
//			console.log(log);
			log.map(function(item,index){
				if(arr.indexOf(item.district.name)== -1){
					arr.push(item.district.name);
				}
			})
			this.setState({
				arr_d: arr
			})
//			console.log(arr);
			var len = arr.length;
//			console.log(len)
			for(let i = 0;i < len;i++){
				var list1 = [];
				log.map(function(item,index){
					if(arr[i] == item.district.name){
						
						list1.push(item);
//						console.log(item.district.name)
					}
				})
				list.push(list1);
			}
			this.setState({
				list : list
			})
//			console.log(this.state.list);
		},1000)
	}
	to(fid){
		console.log(fid)
	}
	render(){
		var that = this;
		var lista = [];
		return (
			<div className="cinema-view">
				{
					this.state.arr_d.map((item,index)=>{
						lista = this.state.list[index]
						console.log(lista);
						if(lista != null){
							return (
								<div className="district " key={item}>
									<div className="title btn">
										<span>{item}</span>
									</div>
									<div className="content">
										{
											lista.map(function(item,index){
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
							)
						}
					})
				}
			</div>
		)
	}
}
