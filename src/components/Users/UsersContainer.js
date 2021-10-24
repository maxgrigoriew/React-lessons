/** @format */
import connect from 'react-redux/lib/connect/connect';
import Users from './Users';
import React from 'react';
import {
	setUsers,
	follow,
	unfollow,
	isTotalFetching,
	setCurentPage,
	setTotalCount,
} from './../../Redux/users-redusers';

let mapStateToProps = (state) => {
	console.log(state);
	return {
		users: state.usersReduser.users,
		isFetching: state.usersReduser.isFetching,
		pageSize: state.usersReduser.pageSize,
		pageNumber: state.usersReduser.pageNumber,
		totalCount: state.usersReduser.totalCount,
	};
};

let UsersContainer = connect(mapStateToProps, {
	setUsers,
	follow,
	unfollow,
	isTotalFetching,
	setCurentPage,
	setTotalCount,
})(Users);

export default UsersContainer;
