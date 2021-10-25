import React from 'react'
import axios from 'axios';
import Users from './Users';

class UsersAPIContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.isTotalFetching(true);

		const apiUrl = `https:social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.pageSize}`;
		axios.get(apiUrl).then((resp) => {
			this.props.setUsers(resp.data.items);
			this.props.setTotalCount(resp.data.totalCount);

			this.props.isTotalFetching(false);
		});
	}
	onPagesChanged = (p) => {
		this.props.isTotalFetching(true);

		this.props.setCurentPage(p);
		const apiUrl = `https:social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`;
		axios.get(apiUrl).then((resp) => {
			this.props.setUsers(resp.data.items);
			this.props.setTotalCount(resp.data.totalCount);
			this.props.isTotalFetching(false);
		});
	};
	render() {
		return (
			<Users
				pageNumber={this.props.pageNumber}
				totalCount={this.props.totalCount}
				pageSize={this.props.pageSize}
				users={this.props.users}
				onPagesChanged={this.onPagesChanged}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				isFetching={this.props.isFetching}
			/>
		);
	}
}

export default UsersAPIContainer
