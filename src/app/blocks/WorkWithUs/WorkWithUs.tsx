import classNames from "classnames/bind";
import styles from '@/app/blocks/WorkWithUs/work-with-us.module.scss'

export default function WorkWithUs() {
    const cx = classNames.bind(styles);

    return (
        <section className={cx('us')} id={'work'}>
            {/** Верхний блок (график и карточка) */}
            <div className={cx('us__graph')}>
                <h2 className={cx('us__title')}>Работа<br/> с нами это</h2>
            </div>
            <div className={cx('us__card')}>
                <div className={cx('us__card-top')}>
                    <span className={cx('us__card-icon-container')}>
                        <img src={'/images/icons/human.svg'} className={cx('us__card-icon')} alt={'Человек'} loading='lazy'/>
                    </span>
                    <h3 className={cx('us__card-title')}>Техподдержка</h3>
                </div>
                <p className={cx('us__card-text')}>
                    которая решает большую часть задач<br/>
                    в течении 1 рабочего дня для любого<br/>
                    региона России
                </p>
            </div>

            {/** Нижний блок (3 карточки) */}
            <div className={cx('us__card')}>
                <div className={cx('us__card-top')}>
                    <span className={cx('us__card-icon-container')}>
                        <img src={'/images/icons/graph.svg'} className={cx('us__card-icon')} alt={'График'} loading="lazy"/>
                    </span>
                    <h3 className={cx('us__card-title')}>Повышение<br className={cx('us__br')}/> прибыльности</h3>
                </div>
                <p className={cx('us__card-text')}>
                    Повышение прибыльности УК, ТСЖ<br/>
                    с помощью увеличения собираемости<br/>
                    платежей и оказанию платных услуг
                </p>
            </div>
            <div className={cx('us__card')}>
                <div className={cx('us__card-top')}>
                    <span className={cx('us__card-icon-container')}>
                        <img src={'/images/icons/copy.svg'} className={cx('us__card-icon')} alt={'Копирование'} loading='lazy'/>
                    </span>
                    <h3 className={cx('us__card-title')}>Весь функционал</h3>
                </div>
                <p className={cx('us__card-text')}>
                    который нужен управляющей компании<br/>
                    или ТСЖ для продуктивной работы,<br/>
                    от биллинга до сайта
                </p>
            </div>
            <div className={cx('us__card')}>
                <div className={cx('us__card-top')}>
                    <span className={cx('us__card-icon-container')}>
                        <img src={'/images/icons/globus.svg'} className={cx('us__card-icon')} alt={'Глобус'} loading='lazy'/>
                    </span>
                    <h3 className={cx('us__card-title')}>
                        Единое <br className={cx('us__br')}/>
                        информационное<br/>
                        пространство
                    </h3>
                </div>
                <p className={cx('us__card-text')}>
                    <span className={cx('us__card-text_invisible')}>где</span> все данные бесшовно синхронизируются <br className={cx('us__br')}/>
                    между программами, поэтому информация <br className={cx('us__br')}/>
                    в них всегда актуальна
                </p>
            </div>
        </section>
    )
}