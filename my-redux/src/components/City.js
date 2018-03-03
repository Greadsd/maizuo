import React, {Component} from 'react';
import axios from 'axios';
import '../css/City.css';

export default class City extends Component{
	constructor(props){
		super(props);
		
		this.state = {
			cities :[],
			pinyin : ["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"],
			list : []
		}
	}
	componentDidMount(){
		var arr = this.state.pinyin;
		var arr1 = [];
		axios.get("/v4/api/city?__t=1519869133813")
		.then((res)=>{
			console.log(res);
			this.setState({
				cities: res.data.data.cities
			})
		})
		
		setTimeout(()=>{
			var log = this.state.cities;
			var len = arr.length;
			for(let i = 0;i < len;i++){
				var list1 = [];
				log.map(function(item,index){
					if(arr[i] == item.pinyin.substring(0,1)){
						list1.push(item);
					}
				})
				arr1.push(list1);
			}
			this.setState({
				list : arr1
			})
//			console.log(arr1);
		},600)
	}
		
	render(){
		var lista = [];
		return (
			<div className="city-view">
				<div className="gprs-city">
					<div className="city-index-title">GPS定位你所在城市</div>
					<div className="city-index-detail">
						<ul className="list-unstyled">
							<li className="city-item-detail city-item-detail-gprs">深圳</li>
						</ul>
					</div>
				</div>
				<div className="hot-city">
					<div className="city-index-title">热门城市</div>
					<div className="city-index-detail">
						<ul className="list-unstyled">
							<li className="city-item-detail">北京</li>
							<li className="city-item-detail">上海</li>
							<li className="city-item-detail">广州</li>
							<li className="city-item-detail">深圳</li>
						</ul>
					</div>
				</div>
				<div className="index-city">
					<div>
						<div className="city-index-title">按字母排序</div>
						<div className="city-index-detail">
							<ul className="list-unstyled">
								{
									this.state.pinyin.map(function(item,index){
										return (
											<li className="city-item-detail" key={item}>{item}</li>
										)
									})
								}
							</ul>
						</div>
					</div>
					<div className="index-city-list">
						{
							this.state.pinyin.map((item,index)=>{
								lista = this.state.list[index];
								if(lista != null){
									return (
										<div key={item}>
											<div className="city-index-title">{item}</div>
											<div className="city-index-detail">
												<ul className="list-unstyled">
													{
														lista.map(function(item,index){
															return (
																<li className="city-item-detail" key={item.id}>{item.name}</li>
															)
														})
													}
												</ul>
											</div>
										</div>
									)
								}
							})
						}
					</div>
				</div>
			</div>
		)
	}
}
