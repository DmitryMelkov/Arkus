import classNames from 'classnames/bind';
import styles from '@/app/blocks/TechnicalSupport/technical-support.module.scss';

export default function TechnicalSupport() {
	const cx = classNames.bind(styles);
	return (
		<section className={cx('support__wrapper')}>
			<div className={cx('support')}>
				<h2 className={cx('support__title')} id={'support'}>
					Дополнительно вы получаете
					<br /> экспертную техподдержку
				</h2>

				<div className={cx('support__container')}>
					{/** Верхние элементы */}
					<div className={cx('support__item')}>
						<span className={cx('support__item-icon')}>
							<img
								className={cx('support__item-check-icon')}
								src={'/images/icons/check.svg'}
								alt={'Галочка'}
								loading='lazy'
							/>
						</span>
						<p className={cx('support__item-text')}>
							Консультация по любому вопросу в области ЖКХ
						</p>
					</div>

					<div className={cx('support__item')}>
						<span className={cx('support__item-icon')}>
							<img
								className={cx('support__item-check-icon')}
								src={'/images/icons/check.svg'}
								alt={'Галочка'}
								loading='lazy'
							/>
						</span>
						<p className={cx('support__item-text')}>
							Разработаем индивидуальный отчет
						</p>
					</div>

					<div className={cx('support__item')}>
						<span className={cx('support__item-icon')}>
							<img
								className={cx('support__item-check-icon')}
								src={'/images/icons/check.svg'}
								alt={'Галочка'}
								loading='lazy'
							/>
						</span>
						<p className={cx('support__item-text')}>
							Конвертируем любые данные
						</p>
					</div>

					<div className={cx('support__item')}>
						<span className={cx('support__item-icon')}>
							<img
								className={cx('support__item-check-icon')}
								src={'/images/icons/check.svg'}
								alt={'Галочка'}
								loading='lazy'
							/>
						</span>
						<p className={cx('support__item-text')}>
							Решаем задачи любого уровня сложности
						</p>
					</div>

					{/** Текст в центре */}
					<div className={cx('support__text-container')}>
						<h2 className={cx('support__text-title')}>
							Техподдержк
							<span className={cx('support__text-title_span')}>а</span> №1
						</h2>
						<p className={cx('support__text-subtitle')}>В СФЕРЕ ЖКХ</p>

						<div className={cx('support__text-modal')}>
							<div className={cx('support__modal-container')}>
								<img
									className={cx('support__modal-arrow')}
									src={'/images/icons/arrow.svg'}
									alt={'Стрелка'}
									loading='lazy'
								/>
								<span className={cx('support__modal-title')}>
									Входит в стоимость
								</span>
							</div>
						</div>
					</div>

					{/** Нижние элементы */}
					<div className={cx('support__item')}>
						<span className={cx('support__item-icon')}>
							<img
								className={cx('support__item-check-icon')}
								src={'/images/icons/check.svg'}
								alt={'Галочка'}
								loading='lazy'
							/>
						</span>
						<p className={cx('support__item-text')}>
							Удаленно решим все проблемы
						</p>
					</div>

					<div className={cx('support__item')}>
						<span className={cx('support__item-icon')}>
							<img
								className={cx('support__item-check-icon')}
								src={'/images/icons/check.svg'}
								alt={'Галочка'}
								loading='lazy'
							/>
						</span>
						<p className={cx('support__item-text')}>
							Работаем с любым регионом РФ
						</p>
					</div>

					<div className={cx('support__item')}>
						<span className={cx('support__item-icon')}>
							<img
								className={cx('support__item-check-icon')}
								src={'/images/icons/check.svg'}
								alt={'Галочка'}
								loading='lazy'
							/>
						</span>
						<p className={cx('support__item-text')}>
							Выполняем {'>'} 2000 заявок ежемесячно
						</p>
					</div>

					<div className={cx('support__item')}>
						<span className={cx('support__item-icon')}>
							<img
								className={cx('support__item-check-icon')}
								src={'/images/icons/check.svg'}
								alt={'Галочка'}
								loading='lazy'
							/>
						</span>
						<p className={cx('support__item-text')}>
							Среднее время решения — 2 часа
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
