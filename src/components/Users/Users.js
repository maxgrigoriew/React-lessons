/** @format */

import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const ItemTop = styled.div`
	margin-right: 60px;
	display: flex;
	flex-direction: column;
`;
const Img = styled.img`
	width: 100px;
	height: 150px;
	object-fit: cover;
	border-radius: 15px;
	margin-bottom: 10px;
`;
const Button = styled.button`
	color: #fff;
	align-self: flex-end;
	width: 100%;
	background: #fff;
	border: none;
	color: var(--color-accent);
	height: 30px;
`;
const Name = styled.h1`
	font-size: 1.5em;
	text-transform: uppercase;
	color: #fff;
`;
const Item = styled.div`
	background: var(--color-accent);
	display: flex;
	margin-bottom: 30px;
	border-radius: 15px;
	padding: 30px;
	color: #fff;
`;

const City = styled.div``;
const Status = styled.div`
	color: red;
`;
const Pagination = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
`;
const PaginationItem = styled.div`
	padding 2px 5px;
	height: 20px;
	background: var(--color-accent);
	color: #fff;
	margin-left: 2px;
	margin-right: 2px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 2px;
	line-height: 20px;
	cursor: pointer;
	&.active {
		background: red;
	}
`;

class Users extends React.Component {
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
		let pages = [];
		let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
		console.log('pagesCount: ', pagesCount);
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}
		return (
			<div>
				{this.props.isFetching ? <div>loader</div> : null}
				<Pagination>
					{pages.map((p) => {
						return (
							<PaginationItem
								className={
									this.props.pageNumber === p
										? 'active'
										: null
								}
								onClick={() => {
									this.onPagesChanged(p);
								}}>
								{p}
							</PaginationItem>
						);
					})}
				</Pagination>
				{this.props.users.map((item) => (
					<Item key={item.id}>
						<ItemTop>
							<Img
								src={
									item.photos.small == null
										? 'https://pp.userapi.com/c637323/v637323833/55842/T0EmQrWZ-QM.jpg'
										: item.photos.small
								}
								alt='sdf'></Img>
							{item.followed ? (
								<Button
									onClick={() => {
										this.props.unfollow(item.id);
									}}>
									Follow
								</Button>
							) : (
								<Button
									onClick={() => {
										this.props.follow(item.id);
									}}>
									Unfollow
								</Button>
							)}
						</ItemTop>
						<div className='wrapper'>
							<Name>{item.name}</Name>
							<City>{item.uniqueUrlName}</City>
							<Status>{item.status}</Status>
						</div>
					</Item>
				))}
			</div>
		);
	}
}

export default Users;
