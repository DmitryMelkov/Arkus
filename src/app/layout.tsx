import { HtmlHTMLAttributes } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Involve, Onest } from './setup/fonts';
import Script from 'next/script';

export const metadata: Metadata = {
	title:
		'Программа автоматизации для ЖКХ: управление МКД через цифровую систему',
	description:
		'Учет в ЖКХ для управляющих компаний. Расчет квартплаты для бухгалтерии ЖКХ. Выгрузка ГИС ЖКХ. Диспетчерская АДС и CRM. Интеграция с 1С. Настроим за 14 дней.',
	keywords:
		'по, программное обеспечение, решения, сервисы, приложение управляющих компаний, цифровизация, жкх, расчет начисления жку, квартплаты, учет коммунальных услуг, выгрузка, размещение информации, сведений, гис жкх',
};

interface CustomHtmlProps extends HtmlHTMLAttributes<HTMLHtmlElement> {
	'xmlns:fb'?: string;
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="ru"
			{...({
				'xmlns:fb': 'http://ogp.me/ns/fb#',
			} as CustomHtmlProps)}
		>
			<head>
				{/* <Script
					type="text/javascript"
					strategy="lazyOnload"
					dangerouslySetInnerHTML={{
						__html: `
							var _tmr = window._tmr || (window._tmr = []);
							_tmr.push({id: "3608186", type: "pageView", start: (new Date()).getTime()});
							(function (d, w, id) {
								if (d.getElementById(id)) return;
								var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
								ts.src = "https://top-fwz1.mail.ru/js/code.js";
								var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
								if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
							})(document, window, "tmr-code");
						`,
					}}
				/> */}
				<meta name="yandex-verification" content="6ebb14db0204e440" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="АРКУС | Программы для ЖКХ" />
				<meta
					property="og:title"
					content="Мощная платформа ЖКХ для УК, ТСЖ, РСО"
				/>
				<meta
					property="og:description"
					content="”Программы для расчета квартплаты, Диспетчерская АДС, Кабинет жителя, Выгрузка ГИС ЖКХ в подарок"
				/>
				<meta property="og:image" content="/favicons/png/ogimage.png" />
				<meta property="og:url" content="https://аркус.рф" />
				<link rel="icon" href="/favicons/favicon.ico" type="image/svg+xml" />
				<link rel="yandex-tableau-widget" href="/tableau.json" />
			</head>
			<body className={`${Involve.variable} ${Onest.variable}`}>
				<noscript>
					<div>
						<img
							src="https://mc.yandex.ru/watch/98661748"
							style={{ position: 'absolute', left: '-9999px' }}
							alt=""
							loading="lazy"
						/>
					</div>
					{/* <div>
						<img
							src="https://top-fwz1.mail.ru/counter?id=3608186;js=na"
							style={{ position: 'absolute', left: '-9999px' }}
							alt="Top.Mail.Ru"
						/>
					</div> */}
				</noscript>
				{children}
				{/* <Script
					strategy="afterInteractive"
					src="https://www.googletagmanager.com/gtag/js?id=G-E4BBRSBFVF"
				/>
				<Script
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag() {
						window.dataLayer.push(arguments)
					}
					gtag('js', new Date());
					gtag('config', 'G-E4BBRSBFVF');
					`,
					}}
				/> */}
				<Script
					src={'//widget.cleversite.ru/widget/128011/199186/'}
					strategy="lazyOnload"
				/>
			</body>
		</html>
	);
}
