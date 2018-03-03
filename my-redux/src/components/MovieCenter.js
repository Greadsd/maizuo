import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import '../css/MovieCenter.css';
import '../fontto/iconfont.css';


class MovieCenter extends Component{
	constructor(props){
		super(props);
		
		this.state = {
			cinema : [],
			telephones :[]
		}
		this.gogo = this.gogo.bind(this);
	}
	componentDidMount(){
		var id = this.props.match.params.fid;
		console.log(id)
		axios.get(`/v4/api/cinema/${id}?__t=1519702635025`)
		.then((res)=>{
			console.log(res);
			this.setState({
				cinema: res.data.data.cinema,
				telephones : res.data.data.cinema.telephones
			})
		})
	}
	gogo(fid){
		console.log(fid)
		this.props.history.push("/film/"+fid);
	}
	render(){
		var list = this.state.cinema;
		var that = this;
		return (
			<div className="cinema-view cinema-detail-view">
				<div className="img-responsive">
					<img src="//static.m.maizuo.com/v4/static/app/asset/66461d1a02a9eaa64876c90952c42aed.png"className="imgll"/>
				</div>
				<div className="row detail-box clearfix">
					<div className="box-warp">
						<div className="img pull-left">
							<i className="iconfont icon-dingzuo-"></i>
						</div>
						<div className="box">
							<h3>订座票</h3>
							<span>选好场次及座位，到影院自助机取票</span>
							<button onClick={()=>that.gogo(list.id)} className="btn-default seat-btn" type="button">立即订座</button>
						</div>
					</div>
				</div>
				<div className="row detail-box">
					<div className="box-warp">
						<div className="img pull-left">
							<i className="iconfont icon-yingyuanxinxiqupiaoji"></i>
						</div>
						<div className="box">
							<h3>通兑票</h3>
							<span>有效期内到影院前台兑换影票</span>
							<button className="btn-default youhui-btn" type="button">立即订票</button>
						</div>
					</div>
				</div>
				<div className="row detail-box">
					<div className="box-warp">
						<div className="img m_t pull-left">
							<i className="iconfont icon-04"></i>
						</div>
						<div className="box">
							<h4>{list.address}</h4>
						</div>
					</div>
				</div>
				<div className="row detail-box">
					<div className="box-warp">
						<div className="img m_t pull-left">
							<i className="iconfont icon-weibiaoti-"></i>
						</div>
						<div className="no_border box">
							<h4>{this.state.telephones[0]}</h4>
						</div>
					</div>
				</div>
				<div className="row other-detail-box">
					<ul className="list-inline clearfix"></ul>
				</div>
				<h1>{this.props.match.params.fid}</h1>
			</div>
		)
	}
}
//const mapStateToProps = (state, props)=>{
//return {
//  listT: state.list
//}
//}
//
//const mapDispatchToProps = (dispatch, props)=>{
//return {
//  addTodo: () => {
//    dispatch({
//      type: "ADD_TODO_ITEM",
//      payload: this.state.cinema.name
//    })
//  }
//}
//}
//const App = connect(mapStateToProps, mapDispatchToProps)(MovieCenter);

export default MovieCenter;