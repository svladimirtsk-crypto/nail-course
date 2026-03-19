import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Авторский курс маникюра — гель, верхние формы, опил | Москва",
  description: "Очное обучение современной технике. Гель, верхние формы, архитектурный опил. С нуля и повышение квалификации.",
  openGraph: {
    title: "Сильная гелевая техника — очный авторский курс",
    description: "Гель · Верхние формы · Опил. Очно в Москве.",
    type: "website",
    locale: "ru_RU",
    images: [{ url: "/gallery-1.jpg", width: 800, height: 800 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
