import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getCurrentUser } from '../../redux/store/actions/auth';
import { getAllNotifications } from '../../redux/store/actions/notification';
import { getProjects } from '../../redux/store/actions/project';
import ProjectList from '../project/ProjectList';
import Notifications from './Notifications';
class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			projects: null,
			notificationArray: []
		};
	}
	static getDerivedStateFromProps(nextProps, prevState) {
		let newState = prevState;

		newState.projects = nextProps.getAllProjects;
		newState.notificationArray = nextProps.notification

		return newState === prevState ? prevState : newState;
	}
	componentDidMount() {
		this.props.getProjects();
		this.props.getCurrentUser();
		this.props.getAllNotifications()
	}
	render() {
		const { projects, notificationArray } = this.state;
		const { isLogin } = this.props;
		if (!isLogin) {
			return <Redirect to="/signin" />;
		}
		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<ProjectList projects={projects} />
					</div>
					<div className="col s12 m5 offset-m1">{projects ? <Notifications notificationArray={notificationArray} /> : <span>loading...</span>}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		getAllProjects: state.project.getProjects,
		isLogin: state.auth.login,
		notification: state.notification.getNotification
	};
};

const mapDispatchToProps = {
	getProjects,
	getCurrentUser,
	getAllNotifications
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
