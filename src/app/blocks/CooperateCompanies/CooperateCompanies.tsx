import styles from '@/app/blocks/CooperateCompanies/cooperate-companies.module.scss';
import classNames from 'classnames/bind';
import sberMobileImage from '../../../../public/images/banks/sberMobile.svg';
import tbankMobileImage from '../../../../public/images/banks/tbankMobile.svg';
import alfaMobileImage from '../../../../public/images/banks/alfaMobile.svg';
import gazpromMobileImage from '../../../../public/images/banks/gazpromMobile.svg';
import Image from 'next/image';

export default function CooperateCompanies() {
	const cx = classNames.bind(styles);

	return (
		<section className={cx('cooperate')}>
			<h2 className={cx('cooperate__title')}>С нами сотрудничают</h2>

			<div className={cx('cooperate__companies')}>
				<span className={cx('cooperate__sber')} />
				<span className={cx('cooperate__tbank')} />
				<span className={cx('cooperate__alfa')} />
				<span className={cx('cooperate__gazprom')} />
			</div>

			<div className={cx('cooperate__companies-mobile')}>
				<div className={cx('cooperate__items-wrap')}>
					<div className={cx('cooperate__items', 'cooperate__marquee')}>
						<Image
							src={sberMobileImage}
							alt="Сбер"
							className={cx('cooperate__sber', 'cooperate__item')}
						/>
						<Image
							src={tbankMobileImage}
							alt="ТБанк"
							className={cx('cooperate__tbank', 'cooperate__item')}
						/>
						<Image
							src={alfaMobileImage}
							alt="Альфа Банк"
							className={cx('cooperate__alfa', 'cooperate__item')}
						/>
						<Image
							src={gazpromMobileImage}
							alt="Газпром Банк"
							className={cx('cooperate__gazprom', 'cooperate__item')}
						/>
					</div>
					<div className={cx('cooperate__items', 'cooperate__marquee')}>
						<Image
							src={sberMobileImage}
							alt="Сбер"
							className={cx('cooperate__sber', 'cooperate__item')}
						/>
						<Image
							src={tbankMobileImage}
							alt="ТБанк"
							className={cx('cooperate__tbank', 'cooperate__item')}
						/>
						<Image
							src={alfaMobileImage}
							alt="Альфа Банк"
							className={cx('cooperate__alfa', 'cooperate__item')}
						/>
						<Image
							src={gazpromMobileImage}
							alt="Газпром Банк"
							className={cx('cooperate__gazprom', 'cooperate__item')}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
