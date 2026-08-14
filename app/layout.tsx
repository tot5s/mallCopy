import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import SubMenu from '@/components/common/SubMenu'
import "./globals.css"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tots mall copy",
  description: "쇼핑몰 카피 프로젝트",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="w-300 mx-auto">
          <div className="sticky top-0 z-99">
           <Header/>
          </div>
          <SubMenu/>
          <main className="flex-1">
            {children}
          </main>
          <Footer/>

        </div>
      </body>
    </html>
  );
}
