import React, { Component } from 'react';
import '../css/Salescard.css'

export default class Salescard extends Component{
	constructor(props){
		super(props);
		
		this.tog = this.tog.bind(this);
		this.tog1 = this.tog1.bind(this);
	}
	tog(){
		this.refs.leftbtn.setAttribute("class","active");
		this.refs.rightbtn.setAttribute("class"," ");
		this.refs.leftfrom.setAttribute("class","material");
		this.refs.rightfrom.setAttribute("class","exchanege");
	}
	tog1(){
		this.refs.leftbtn.setAttribute("class"," ");
		this.refs.rightbtn.setAttribute("class","active");
		this.refs.leftfrom.setAttribute("class","material act1");
		this.refs.rightfrom.setAttribute("class","exchanege act");
	}
	render(){
		return (
			<div className="card-query">
				<div className="card_query_form">
					<ul className="list-inline tab">
						<li className="active" ref="leftbtn" onClick={this.tog}>
							<a>卖座卡</a>
						</li>
						<li className="" ref="rightbtn" onClick={this.tog1}>
							<a>电子卖座卡</a>
						</li>
					</ul>
					<div className="material" ref="leftfrom">
						<div>
							<label>卡号：</label>
							<input type="text" placeholder="请输入卡号"/>
							<i className="iconfont icon-qrcode qrcode hidden"></i>
							<div className="line"></div>
						</div>
						<div>
							<label>密码：</label>
							<input type="password" placeholder="请输入密码"/>
							<div className="line"></div>
						</div>
					</div>
					<div className="exchanege" ref="rightfrom">
						<div>
							<label>卡号：</label>
							<input type="text" placeholder="请输入15位电子卖座卡号"/>
							<i className="iconfont icon-qrcode qrcode hidden"></i>
							<div className="line"></div>
						</div>
					</div>
					<div className="msg"></div>
					<button className="card_query_bottom center-block">查询</button>
				</div>
			</div>
		)
	}
}
