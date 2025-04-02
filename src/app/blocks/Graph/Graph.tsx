import styles from '@/app/blocks/Graph/graph.module.scss';
import classNames from 'classnames/bind';

export default function Graph() {
	const cx = classNames.bind(styles);

	return (
		<section className={cx('graph__wrapper')}>
			<div className={cx('graph')}>
				<div className={cx('graph__top')}>
					<div className={cx('graph__top-left')}>
						<h2 className={cx('graph__title')}>Эффективность</h2>
						<div className={cx('graph__markers')}>
							<div className={cx('graph__marker')}>
								<span
									className={cx('graph__marker-color', 'graph__marker-color_1')}
								/>
								<p
									className={cx('graph__marker-title', 'graph__marker-title_1')}
								>
									АРКУС
								</p>
							</div>
							<div className={cx('graph__marker')}>
								<span
									className={cx('graph__marker-color', 'graph__marker-color_2')}
								/>
								<p
									className={cx('graph__marker-title', 'graph__marker-title_2')}
								>
									Другие сервисы
								</p>
							</div>
						</div>
					</div>
					<div className={cx('graph__top-right')}>
						<p className={cx('graph__year')}>в 2024</p>
						<p className={cx('graph__percents')}>
							до
							<span className={cx('graph__percents_span')}> 98%</span>
						</p>
					</div>
				</div>

				<img
					src={'/images/graph/graph.svg'}
					className={cx('graph__graph')}
					alt={'График'}
					loading="lazy"
				/>
				<img
					src={'/images/graph/graphMobile.svg'}
					className={cx('graph__graph_mobile')}
					alt={'График'}
					loading="lazy"
				/>
			</div>
		</section>
	);
}
