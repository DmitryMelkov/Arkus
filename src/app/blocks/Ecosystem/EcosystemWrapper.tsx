'use client';

import classNames from 'classnames/bind';
import styles from '@/app/blocks/Ecosystem/ecosystem-wrapper.module.scss';
import Ecosystem from '@/app/blocks/Ecosystem/Ecosystem/Ecosystem';
import Billing from '@/app/blocks/Ecosystem/Billing/Billing';
import Crm from '@/app/blocks/Ecosystem/Crm/Crm';
import Kvartplata from '@/app/blocks/Ecosystem/Kvartplata/Kvartplata';

export default function EcosystemWrapper() {
	const cx = classNames.bind(styles);

	return (
		<section className={cx('ecosystem-wrapper')}>
			<Ecosystem />
			<Billing />
			<Crm />
			<Kvartplata />
		</section>
	);
}
