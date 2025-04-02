'use client';

import classNames from 'classnames/bind';
import styles from './cookie-popup.module.scss';
import { useEffect, useState } from 'react';

export default function CookiePopup() {
	const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);

	const cx = classNames.bind(styles);

	const handleButtonClick = () => {
		localStorage.setItem('cookieModal', 'true');
		setIsPopupVisible(false);
	};

	useEffect(() => {
		if (localStorage.getItem('cookieModal') !== 'true') {
			setIsPopupVisible(true);
		}
	}, []);

	return (
		<div
			className={cx([
				'cookie__wrapper',
				isPopupVisible ? '' : 'cookie__wrapper_hide',
			])}
		>
			<div className={cx('cookie')}>
				<p className={cx('cookie__text')}>
					Простите за всплывающее окно, но мы обязаны предупредить,{' '}
					<br className={cx('cookie__text-br')} />
					что наш сайт использует куки-файлы.{' '}
					<br className={cx('cookie__text-br')} />
					Это помогает нам быть лучше и полезнее для вас.
				</p>

				<button onClick={handleButtonClick} className={cx('cookie__button')}>
					Согласен
				</button>
			</div>
		</div>
	);
}
