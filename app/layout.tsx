import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "失智照護助手 - 失智長者照護輔助平台",
  description:
    "失智照護助手網站幫助照護者記錄失智長者的照護情況，並提供計畫資訊與知情同意書說明。",
  keywords: "失智症, 照護, 長照, 失智照護",
  authors: [{ name: "Pre-dementia Project", url: "https://pre-dementia.vercel.app" }],
  openGraph: {
    title: "失智照護助手",
    description: "失智長者照護輔助平台",
    type: "website",
    url: "https://pre-dementia.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
