import Header from '@/app/components/Header/Header'
import Hero from '@/app/blocks/Hero/Hero'
import EcosystemWrapper from '@/app/blocks/Ecosystem/EcosystemWrapper'
import CooperateCompanies from '@/app/blocks/CooperateCompanies/CooperateCompanies'
/* import TechnicalSupport from '@/app/blocks/TechnicalSupport/TechnicalSupport'; */
import Complex from '@/app/blocks/Complex/Complex'
import AboutUs from '@/app/blocks/AboutUs/AboutUs'
/* import WorkWithUs from '@/app/blocks/WorkWithUs/WorkWithUs'; */
import Questions from '@/app/blocks/Questions/Questions'
import Graph from '@/app/blocks/Graph/Graph'
import Form from '@/app/blocks/Form/Form'
import Achievements from '@/app/blocks/Achievements/Achievements'
import Footer from '@/app/components/Footer/Footer'
import Companies from './blocks/Companies/Companies'
import Script from 'next/script'
import WhatWillIGet from './blocks/WhatWillIGet/WhatWillIGet'
import PersonalManager from './blocks/PersonalManager/PersonalManager'

export default function Home() {
  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) { return; }
                    }
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                    ym(98661748, "init", {
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                    });
                `,
        }}
      />
      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d, w){
              w.wwidget = 'a6ccf15bae8c6b9b13e8b4d8303be9d7ad8b5c1bce90867456a1b88accf80d94';
              var s = d.createElement('script');
              s.async = true;
              s.src = 'https://widster.ru/embed/'+w.wwidget;
              s.charset = 'UTF-8';
              d.currentScript.replaceWith(s);
            })(document, window);
          `,
        }}
      />
      <Header />
      <main>
        <Hero />
        <EcosystemWrapper />
        <Companies />
        {/* <TechnicalSupport /> */}
        <Complex />
        <AboutUs />
        <CooperateCompanies />
        {/* <WorkWithUs /> */}
        <PersonalManager />
        <Graph />
        <Questions />
        <WhatWillIGet />
        <Form />
        <Achievements />
      </main>
      <Footer />
    </>
  )
}
