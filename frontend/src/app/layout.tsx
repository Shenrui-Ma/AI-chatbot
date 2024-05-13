import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>北语信科赛博教师</title>
        <meta name="description" content="Designed by Azrael-76" />
        <link rel="icon" href="/images/Silver_wolf64.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
