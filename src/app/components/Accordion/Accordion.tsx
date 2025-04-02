'use client'

import '@/app/components/Accordion/accordion.scss';

type Props = {
    title: string
    text: any
    index: number
    activeQuestion: number | undefined
    selectActiveQuestion: (index: number | undefined) => void
}

export default function Accordion({title, text, index, activeQuestion, selectActiveQuestion}: Props) {

    const handleAccordion = (): void => {
        if (activeQuestion === index) {
            selectActiveQuestion(undefined)
        } else {
            selectActiveQuestion(index)
        }
    }

    return (
        <div className={`accordion ${activeQuestion === index ? 'accordion_active' : ''}`}>
            <div className={'accordion__top'} onClick={handleAccordion}>
                <h3 className={'accordion__title'}>{title}</h3>
                <img
                    src={'/images/icons/chevronDown.svg'}
                    alt={'Стрелка'}
                    className={`accordion__arrow ${activeQuestion === index ? ' accordion__arrow_active' : ''}`}
                    loading='lazy'
                />
            </div>
            <p className={`accordion__text ${activeQuestion === index ? ' accordion__text_visible' : ''}`} dangerouslySetInnerHTML={{__html: text}} />
        </div>
    )
}