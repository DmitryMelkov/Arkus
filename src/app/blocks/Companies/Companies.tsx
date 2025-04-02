import styles from '@/app/blocks/Companies/companies.module.scss';
import classNames from 'classnames/bind';

export default function Companies() {
	const cx = classNames.bind(styles);

	return (
		<section className={cx('companies')}>
			{/** Нижний блок с компаниями */}
			<div className={cx('companies__bottom')}>
				<h3 className={cx('companies__bottom-title')}>
					Доверьтесь выбору компаний,
					<br />
					которые уже увидели результат
				</h3>

				<div className={cx('companies__companies')}>
					<div className={cx('companies__items-wrap')}>
						<div className={cx('companies__items', 'companies__marquee')}>
							{/** Десктоп */}
							<img
								className={cx('companies__item')}
								src={'/images/companies/tochno.svg'}
								alt={'Точно'}
                                loading='lazy'
							/>
							<img
								className={cx('companies__item')}
								src={'/images/companies/flagman.svg'}
								alt={'Флагман'}
                                loading='lazy'
							/>
							<img
								className={cx('companies__item')}
								src={'/images/companies/ssk.svg'}
								alt={'ССК'}
                                loading='lazy'
							/>
							<img
								className={cx('companies__item')}
								src={'/images/companies/ursk.svg'}
								alt={'ЮРСК'}
								fetchPriority="low"
                                loading='lazy'
							/>
							<img
								className={cx('companies__item')}
								src={'/images/companies/vkb.svg'}
								alt={'ВКБ'}
								fetchPriority="low"
                                loading='lazy'
							/>
							<img
								className={cx('companies__item')}
								src={'/images/companies/developmentUg.svg'}
								alt={'Девелопмент Юг'}
								fetchPriority="low"
                                loading='lazy'
							/>
							<img
								className={cx('companies__item')}
								src={'/images/companies/lubimovo.svg'}
								alt={'Любимово'}
								fetchPriority="low"
                                loading='lazy'
							/>
						</div>
						<div
							className={cx('companies__items', 'companies__marquee')}
							aria-hidden={true}
						>
							<img
								className={cx('companies__item')}
								src={'/images/companies/tochno.svg'}
								alt={'Точно'}
                                loading='lazy'
							/>
							<img
								className={cx('companies__item')}
								src={'/images/companies/flagman.svg'}
								alt={'Флагман'}
                                loading='lazy'
							/>
							<img
								className={cx('companies__item')}
								src={'/images/companies/ssk.svg'}
								alt={'ССК'}
                                loading='lazy'
							/>
							<img
								className={cx('companies__item')}
								src={'/images/companies/ursk.svg'}
								alt={'ЮРСК'}
								fetchPriority="low"
                                loading='lazy'
							/>
							<img
								className={cx('companies__item')}
								src={'/images/companies/vkb.svg'}
								alt={'ВКБ'}
								fetchPriority="low"
                                loading='lazy'
							/>
							<img
								className={cx('companies__item')}
								src={'/images/companies/developmentUg.svg'}
								alt={'Девелопмент Юг'}
								fetchPriority="low"
                                loading='lazy'
							/>
							<img
								className={cx('companies__item')}
								src={'/images/companies/lubimovo.svg'}
								alt={'Любимово'}
								fetchPriority="low"
                                loading='lazy'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
