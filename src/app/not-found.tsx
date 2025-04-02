import styles from '@/app/styles/not-found.module.scss'
import Link from 'next/link'
import classNames from "classnames/bind";

export default function NotFound() {
    const cx = classNames.bind(styles)

    return (
        <section className={cx('not-found')}>
            <img src={'/images/notFound.webp'} alt={'404'} className={cx('not-found__img')} loading='lazy' />
            <h1 className={cx('not-found__title')}>Такой страницы не существует.</h1>
            <Link href={'/'} className={cx('not-found__button')}>Перейти на главную</Link>
            <div className={cx('not-found__text-container')}>
                <p className={cx('not-found__text')}>99,5% никогда не видят эту страницу</p>
                <p className={cx('not-found__text')}>0,5% попадают сюда случайно. Вы счастливчик!</p>
            </div>
        </section>
    )
}