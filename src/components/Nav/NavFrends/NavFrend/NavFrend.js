import React from "react";
import s from './NavFrends.module.css'

const NavFrends = () => {
	return (
		<div className="d-flex justify-content-around align-content-center">
			<div className={s.item}>
				<img className="card-img" src="https://im0-tub-ru.yandex.net/i?id=34f40c9982b9994406bd8a887dffd73c&n=13"
				     alt="кот"/>
				<p className="text">Nik</p>
			</div>
			<div className={s.item}>
				<img className="card-img" src="https://mtdata.ru/u23/photoDB12/20307234756-0/original.jpg" alt="кот"/>
				<p className="text">Max</p>
			</div>
			<div className={s.item}>
				<img className="card-img"
				     src="https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-22.jpg" alt="кот"/>
				<p className="text-warning">Anni</p>
			</div>
		</div>
	)
}
export default NavFrends