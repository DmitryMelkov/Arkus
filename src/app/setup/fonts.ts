import localFont from 'next/font/local';

const Involve = localFont({
    src: [
        {
            path: '../../../public/fonts/Involve/Involve-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Involve/Involve-Medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Involve/Involve-SemiBold.woff',
            weight: '600',
            style: 'normal',
        },
    ],
    variable: '--involve',
    fallback: ['system-ui', 'arial']
})

const Onest = localFont({
    src: [
        {
            path: '../../../public/fonts/Onest/Onest-Regular.ttf',
            weight: '400',
        },
        {
            path: '../../../public/fonts/Onest/Onest-Medium.ttf',
            weight: '500',
        },
        {
            path: '../../../public/fonts/Onest/Onest-SemiBold.ttf',
            weight: '600',
        },
    ],
    variable: '--onest',
    fallback: ['system-ui', 'arial']
})

export {
    Involve,
    Onest,
}