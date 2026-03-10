import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Курсы маникюра в Москве — Инструктор Елена | Гель · Архитектура · Опил",
  description:
    "Авторский курс от инструктора с 10-летним стажем. Работа с гелем, архитектура ногтя, опил. Топ-мастер за 7 дней или повышение квалификации за 1 день.",
  keywords:
    "курсы маникюра москва, обучение маникюру, гель ногти, архитектура ногтя, повышение квалификации маникюр",
  openGraph: {
    title: "Делай ногти, которые стоят в 3 раза дороже",
    description:
      "Авторский курс от Елены — инструктора с 10-летним стажем. Гель, архитектура, опил.",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/gallery-1.jpg",
        width: 800,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-text-primary antialiased">
        <!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=107247221', 'ym');

    ym(107247221, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/107247221" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
        {children}
      </body>
    </html>
  );
}

