import styles from './contacts-popup.module.scss'
import classNames from 'classnames/bind'
import PopupWrapper from '@/app/components/Popups/PopupWrapper'

type Props = {
  modal: 'newLevel' | 'automate'
  setPopupStatus: (status: boolean) => void
  isPopupOpen: boolean
}

export default function ContactsPopup({
  modal,
  setPopupStatus,
  isPopupOpen,
}: Props) {
  const cx = classNames.bind(styles)

  const closePopup = () => {
    setPopupStatus(false)
  }

  return (
    <PopupWrapper isPopupOpen={isPopupOpen} setPopupStatus={setPopupStatus}>
      <div className={cx('popup')}>
        {/* Верхний блок */}
        <div className={cx('popup__mobile-top')}></div>
        <div className={cx('popup__top')}>
          <h3 className={cx('popup__title')}>
            {modal === 'newLevel' ? (
              <>
                Перейти на <br className={cx('popup__mobile-br')} />
                <span className={cx('popup__title_span')}>новый уровень</span>
              </>
            ) : (
              <>
                <span className={cx('popup__title_span')}>Автоматизируем </span>
                <br className={cx('popup__mobile-br')} />
                за 14 дней
              </>
            )}
          </h3>
          <button className={cx('popup__close')} onClick={closePopup}>
            <img
              src={'/images/icons/popupClose.svg'}
              alt={'Кнопка закрытия'}
              loading="lazy"
            />
          </button>
        </div>
        <div className={cx('popup__center')}>
          {/* Левая часть POPUP с контактами */}
          <div className={cx('popup__left')}>
            <p className={cx('popup__subtitle')}>
              {modal === 'newLevel' ? (
                <>
                  <span className={cx('popup__subtitle-span-lg')}>
                    Узнайте как АРКУС помогает управлять МКД эффективно, экономя
                    Ваше время?
                  </span>
                  <span className={cx('popup__subtitle-span-sm')}>
                    Как АРКУС помогает управлять МКД эффективно, экономя Ваше
                    время ?
                  </span>
                  <span className={cx('popup__subtitle-findOut')}>
                    Узнайте прямо сейчас!
                  </span>
                </>
              ) : (
                'Секреты автоматизации ЖКХ: узнайте как сэкономить время и деньги'
              )}
            </p>
            <p className={cx('popup__description')}>
              {modal === 'newLevel'
                ? 'Подберем лучшее для Вас решение, дадим подробную консультацию, проведем презентацию программ с демонстрацией возможностей, ответим на возникшие вопросы.'
                : 'Расскажем о функциональности и преимуществах нашей системы, продемонстрируем работу и ответим на все вопросы.'}
            </p>

            <div className={cx('popup__contacts')}>
              <p className={cx('popup__contacts-title')}>
                Просто напишите нам удобным способом.
              </p>
              <div className={cx('popup__contacts-icons')}>
                <a
                  className={cx('popup__contacts-icon')}
                  href="https://wa.me/7282088524"
                  target="_blank"
                  onClick={() => {
                    //@ts-ignore
                    ym(98661748, 'reachGoal', 'WhatsApp')
                  }}
                >
                  <img
                    src="images/icons/whatsappForPopup.svg"
                    alt="WhatsApp"
                    loading="lazy"
                  />
                </a>
                <a
                  className={cx('popup__contacts-icon')}
                  href="https://t.me/arkusteam"
                  target="_blank"
                  onClick={() => {
                    //@ts-ignore
                    ym(98661748, 'reachGoal', 'Telegram')
                  }}
                >
                  <img
                    src="images/icons/telegramForPopup.svg"
                    alt="Telegram"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Правая часть POPUP */}
          <div className={cx('popup__right')}>
            <div className={cx('popup__month')}>
              <p className={cx('popup__month-title')}>2 мес.</p>
              <p className={cx('popup__month-text')}>БЕСПЛАТНО</p>
            </div>
            <p className={cx('popup__right-text')}>
              *При заключении договора
              <span className={cx('popup__right-text_span')}>
                {' '}
                до 01.04.25{' '}
              </span>
              предоставляем
              <span className={cx('popup__right-text_span')}> 2 месяца </span>
              сопровождения
              <span className={cx('popup__right-text_span')}> бесплатно</span>
            </p>
          </div>
        </div>
      </div>
    </PopupWrapper>
  )
}
