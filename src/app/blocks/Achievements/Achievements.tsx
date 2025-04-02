import styles from '@/app/blocks/Achievements/achievements.module.scss';
import classNames from 'classnames/bind';

export default function Achievements() {
	const cx = classNames.bind(styles);

	return (
		<section className={cx('achievements')}>
			<div className={cx('achievements__card')}>
				<img
					src={'/images/achievements/mincifry.svg'}
					className={cx('achievements__card-mincifry')}
					alt={'Минцифры России'}
					loading="lazy"
				/>

				<p className={cx('achievements__card-text')}>
					«АРКУС» включен в Реестр российских
					<br /> программ под номером 3031
				</p>
			</div>

			<div className={cx('achievements__card')}>
				<img
					src={'/images/achievements/gis.svg'}
					className={cx('achievements__card-gis')}
					alt={'ГИС ЖКХ'}
					loading="lazy"
				/>

				<p className={cx('achievements__card-text')}>
					Качественная и полноценная
					<br />
					интеграция с ГИС ЖКХ
				</p>
			</div>

			<div className={cx('achievements__card')}>
				<img
					src={'/images/achievements/yandexCloud.svg'}
					className={cx('achievements__card-yandex-cloud')}
					alt={'Yandex Cloud'}
					loading="lazy"
				/>

				<p className={cx('achievements__card-text')}>
					Обеспечиваем безопасность
					<br />и сохранность данных в облаке
				</p>
			</div>
		</section>
	);
}
