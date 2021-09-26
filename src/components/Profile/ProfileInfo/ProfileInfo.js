import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div className={s.profile__info}>
			<div className={s.profile__img}>
				<img src="https://proprikol.ru/wp-content/uploads/2021/01/krasivye-kartinki-sobak-27.jpg" alt=""/>
			</div>
			<div className={s.profile__infoText}>
				<div className={s.profile__item}>name</div>
				<div className={s.profile__item}>Bryansk</div>
				<div className={s.profile__item}>07 07 1993</div>
			</div>
		</div>
	)
}
export default ProfileInfo;