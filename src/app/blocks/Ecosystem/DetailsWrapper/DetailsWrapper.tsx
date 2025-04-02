import { ReactNode, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './details-wrapper.module.scss'

type Props = {
  children: ReactNode
  wrapperType: 'billing' | 'crm' | 'kvo'
}

export default function DetailsWrapper({ children, wrapperType }: Props) {
  const [isButtonActive, setIsButtonActive] = useState<boolean>(true)

  const cx = classNames.bind(styles)

  const handleButton = () => {
    setIsButtonActive(!isButtonActive)
  }

  return (
    <div className={cx('wrapper')}>
      <button
        className={cx(['wrapper__button', `wrapper__button_${wrapperType}`])}
        onClick={handleButton}
      >
        {wrapperType === 'billing'
          ? 'Функционал закрывает все задачи по начислениям и расчетам ЖКУ'
          : wrapperType === 'crm'
          ? 'Функционал программы для аварийно диспетчерской службы ЖКХ'
          : 'Преимущества приложения для управляющих компаний'}
        <img
          src="/images/icons/detailsAccordion.svg"
          alt="Стрелка"
          className={cx([
            'wrapper__img',
            isButtonActive ? 'wrapper__img_open' : '',
          ])}
          loading="lazy"
        />
      </button>

      <div
        className={cx([
          'wrapper__content',
          isButtonActive ? 'wrapper__content_open' : '',
        ])}
      >
        {children}
      </div>
    </div>
  )
}
