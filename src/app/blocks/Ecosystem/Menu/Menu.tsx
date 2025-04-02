import styles from '@/app/blocks/Ecosystem/Menu/menu.module.scss'
import classNames from 'classnames/bind'

type MenuTypes = 'ecosystem' | 'billing' | 'crm' | 'kvo'

type MenuProps = {
  activeMenu: MenuTypes
}

export default function Menu({ activeMenu }: MenuProps) {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('menu')}>
      <div className={cx('menu__container')}>
        {activeMenu === 'ecosystem' ? (
          <div
            className={cx('menu__item', 'menu__item-ecosystem')}
            id={activeMenu}
          >
            <img
              src="/images/icons/logoWhite.svg"
              className={cx('menu__image')}
              alt={'Логотип'}
              loading="lazy"
            />
            <h2 className={cx('menu__title')}>Система ПО для ЖКХ</h2>
          </div>
        ) : activeMenu === 'billing' ? (
          <div
            className={cx('menu__item', 'menu__item-billing')}
            id={activeMenu}
          >
            <img
              src="/images/icons/logoWhite.svg"
              className={cx('menu__image')}
              alt={'Логотип'}
              loading="lazy"
            />
            <h2 className={cx('menu__title')}>Биллинг ЖКХ</h2>
          </div>
        ) : activeMenu === 'crm' ? (
          <div className={cx('menu__item', 'menu__item-crm')} id={activeMenu}>
            <img
              src="/images/icons/logoWhite.svg"
              className={cx('menu__image')}
              alt={'Логотип'}
              loading="lazy"
            />
            <h2 className={cx('menu__title')}>Программа для АДС</h2>
          </div>
        ) : (
          <div className={cx('menu__item', 'menu__item-kvo')} id={activeMenu}>
            <img
              src="/images/icons/logoWhite.svg"
              className={cx('menu__image')}
              alt={'Логотип'}
              loading="lazy"
            />
            <h2 className={cx('menu__title')}>
              Приложение жителя{' '}
              <span className={cx('menu__title-span')}>
                для учета квартплаты
              </span>
            </h2>
          </div>
        )}
      </div>
    </div>
  )
}
