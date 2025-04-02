import styles from '@/app/blocks/AboutUs/about-us.module.scss';
import classNames from 'classnames/bind';

export default function AboutUs() {
	const cx = classNames.bind(styles);

	return (
		<section className={cx('about__wrapper')} id={'company'}>
			<div className={cx('about')}>
				{/** Верхний блок с карточками */}
				<div className={cx('about__top')}>
					<h2 className={cx('about__title')}>
						<span
							className={cx('about__title_span', 'about__title_span_large')}
						>
							Мы эксперты <br />
						</span>
						в сфере автоматизации
						<span className={cx('about__title_span')}> ЖКХ</span>
					</h2>

					{/** Карточки */}
					<div className={cx('about__cards-wrapper')}>
						<div className={cx('about__card')}>
							<h3 className={cx('about__card-title')}>14 лет</h3>
							<p className={cx('about__card-subtitle')}>
								Успешной работы
								<br className={cx('about__card-title-br')} /> в сфере ЖКХ
							</p>
						</div>
						<div className={cx('about__card', 'about__card_center')}>
							<h3 className={cx('about__card-title')}>1 200 +</h3>
							<p className={cx('about__card-subtitle')}>
								Клиентов (УК, ТСЖ, РСО)
								<br />
								под управлением АРКУС
							</p>
						</div>
						<div className={cx('about__card')}>
							<h3 className={cx('about__card-title')}>99 607</h3>
							<p className={cx('about__card-subtitle')}>
								Домов обслуживают
								<br />
								наши клиенты
							</p>
						</div>

						<div className={cx('about__card')}>
							<h3 className={cx('about__card-title')}>76 %</h3>
							<p className={cx('about__card-subtitle')}>
								Клиентов приходят
								<br />к нам по рекомендации
							</p>
						</div>
						<div className={cx('about__card')}>
							<h3 className={cx('about__card-title')}>1 296 223</h3>
							<p className={cx('about__card-subtitle')}>
								Лицевых счетов обслуживаются
								<br />с помощью АРКУС
							</p>
						</div>
						<div className={cx('about__text-card')}>
							<img
								src={'/images/icons/star.svg'}
								alt={'Звезда'}
								className={cx('about__text-card-icon')}
								loading='lazy'
							/>
							<img
								src={'/images/icons/starWhite.svg'}
								alt={'Звезда'}
								className={cx('about__text-card-icon_mobile')}
								loading='lazy'
							/>
							<p className={cx('about__text-card-title')}>
								Экосистема АРКУС работает на всей территории РФ
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
