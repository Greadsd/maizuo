import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import '../css/Home.css';
import '../icon/iconfont.css';
import '../iconfont/iconfont.css';
export default class Home extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			flag : true
		}
		this.hide = this.hide.bind(this);
		
	}
	hide(){
		if(this.state.flag == true){
			this.refs.ipt.setAttribute("class","mobu");
			this.refs.leftlist.setAttribute("class","leftlist")
		}else if(this.state.flag == false){
			this.refs.ipt.setAttribute("class","bbb")
			this.refs.leftlist.setAttribute("class","leftlist1")
		}
		this.setState({
			flag:!this.state.flag
		})
//		console.log(this.state.flag)
	}
	render(){
		return (
			<div className="top">
				<header>
					<div onClick={this.hide} className="left">
						<span >菜单</span>
						<span>卖座电影</span>
					</div>
					<div className="right">
						<span id="orientate"><i>></i></span>
						<span className="iconfont">&#xe601;</span>
					</div>
			 	</header>
			 	<div className="bbb" ref="ipt" >
					<div className="leftlist1" ref="leftlist">
						<ul>
							<li><Link onClick={this.hide} to={"/"}>首页</Link><span>></span></li>
							<li><Link onClick={this.hide} to={"/movie"}>影片</Link><span>></span></li>
							<li><Link onClick={this.hide} to={"/cinema"}>影院</Link><span>></span></li>
							<li><Link onClick={this.hide} to={"/"}>商城</Link><span>></span></li>
							<li><Link onClick={this.hide} to={"/"}>我的</Link><span>></span></li>
							<li><Link onClick={this.hide} to={"/"}>卖座卡</Link><span>></span></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
