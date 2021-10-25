/** @format */
import {connect} from 'react-redux';
import UsersAPIContainer from './UsersAPIContainer';

import {
	setUsers,
	follow,
	unfollow,
	isTotalFetching,
	setCurentPage,
	setTotalCount,
} from './../../Redux/users-redusers';

let mapStateToProps = (state) => {
	return {
		users: state.usersReduser.users,
		isFetching: state.usersReduser.isFetching,
		pageSize: state.usersReduser.pageSize,
		pageNumber: state.usersReduser.pageNumber,
		totalCount: state.usersReduser.totalCount,
	};
};


export default connect(mapStateToProps, {
	setUsers,
	follow,
	unfollow,
	isTotalFetching,
	setCurentPage,
	setTotalCount,
})(UsersAPIContainer);
