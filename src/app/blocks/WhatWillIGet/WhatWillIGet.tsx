import classNames from 'classnames/bind';
import styles from '@/app/blocks/WhatWillIGet/what-will-i-get.module.scss';
import Image from 'next/image';
import graphsImage from "../../../../public/images/whatWillIGet/graphs.png";

export default function WhatWillIGet() {
	const cx = classNames.bind(styles);

	return (
		<section className={cx('get__wrapper')}>
			<div className={cx('get')}>
				<div className={cx('get__text-container')}>
					<h2 className={cx('get__title')}>
						Что <span className={cx('get__title_span')}>я получу </span>
						от<br className={cx('get__title-br-363')} /> покупки<br className={cx('get__title-br-768')} /> программы?
					</h2>

					<p className={cx('get__text')}>
						Приобретение программы АРКУС поможет управляющей компании
						значительно повысить эффективность работы, снизить риски ошибок и
						неточностей, сократить издержки, улучшить качество обслуживания,
						оптимизировать взаимодействие с жителями, повысить собираемость
						платежей, сэкономить на различных доработках и найме программистов.
						В комплексе все эти показатели позволят значительно увеличить
						<span className={cx('get__text_span')}> прибыль.</span>
						<br />
						<br />А бухгалтерия оценит
						<span className={cx('get__text_span')}>
							{' '}
							удобство,<br className={cx('get__text-br')} /> практичность и скорость{' '}
						</span>
						работы в<br className={cx('get__text-br')} /> программе.
						<br />
						<br />
						Уже более 1200 клиентов успешно<br className={cx('get__text-br')} /> применяют нашу систему.
						<br />
						<br />
						<span className={cx('get__text_span')}>
							И все это от 1 200 руб. в месяц.*
						</span>
					</p>
				</div>


				<Image
					src={graphsImage}
					className={cx('get__image')}
					alt="Показатели эффективности"
				/>
			</div>
		</section>
	);
}
