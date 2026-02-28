import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Курсы маникюра в Москве — Инструктор Елена | Гель · Архитектура",
  description:
    "Авторский мастер-класс от инструктора с 10-летним стажем. Госдиплом. Работа с гелем, архитектура ногтя, опил. Топ-мастер за 7 дней или повышение квалификации.",
  keywords:
    "курсы маникюра москва, обучение маникюру, гель ногти, архитектура ногтя, повышение квалификации маникюр",
  openGraph: {
    title: "Делай ногти, которые стоят в 3 раза дороже",
    description:
      "Авторский курс от Елены — инструктора с 10-летним стажем и госдипломом",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}