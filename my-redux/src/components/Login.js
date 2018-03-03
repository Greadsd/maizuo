import React, { Component } from 'react';
import '../css/Login.css'

export default class Login extends Component{
	render(){
		return (
			<div className="login-view">
				<div>
					<form className="">
						<div className="form-group">
							<input type="text" className="form-control" placeholder="输入手机号/邮箱"/>
							<div className="input-bg"></div>
						</div>
						<div className="form-group">
							<input type="password" className="form-control" placeholder="输入密码/验证码"/>
							<div className="input-bg"></div>
						</div>
						<span className="wrong-msg"></span>
						<button type="submit" className="center-block submit">登录</button>
					</form>
				</div>
			</div>
		)
	}
}
