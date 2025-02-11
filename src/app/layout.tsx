import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unseen Model Agency",
  description: "Empowering talents, delivering excellence in modeling, fashion, and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        {/* Cleaned up duplicate meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Empowering talents, delivering excellence in modeling, fashion, and events." />
        <link rel="apple-touch-icon" href="/logo192.png" />
        
        
        
        {/* Favicon */}
        <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"/>

        <title>Unseen Model Agency</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        
        {/* Adding external scripts */}
        <Script src="assets/js/vendor/modernizr-3.5.0.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/vendor/jquery-2.2.4.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/popper.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/bootstrap.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/owl.carousel.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/isotope.pkgd.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/slick.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/metisMenu.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/jquery.nice-select.js" strategy="beforeInteractive" />
          <Script src="assets/js/ajax-form.js" strategy="beforeInteractive" />
          <Script src="assets/js/wow.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/jquery.counterup.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/waypoints.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/jquery.scrollUp.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/imagesloaded.pkgd.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/jquery.magnific-popup.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/jquery.easypiechart.js" strategy="beforeInteractive" />
          <Script src="assets/js/plugins.js" strategy="beforeInteractive" />
          <Script src="assets/js/main.js" strategy="beforeInteractive" />
        
      </body>
    </html>
  );
}
