import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/providers";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Arabic font
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

// English font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "عيادات الماسترز - Masters Clinics",
  description: "أفضل الخدمات الطبية والعلاجية مع أطباء متخصصين",
  keywords: "عيادات, أطباء, طب, صحة, علاج, تخصصات طبية",
  authors: [{ name: "MiniMax Agent" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${cairo.variable} ${inter.variable} font-arabic antialiased`}
      >
        <Providers>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Providers>
      </body>
    </html>
  );
}
