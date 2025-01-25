import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";



export const metadata: Metadata = {
  title: "Tej Kshetri - Fullstack Web Developer",
  description: "Hello! I am Tej, Fullstack Developer based in Pokhara, Nepal. I offer both web and software development services to people all around the globe. Starting from 2021 I have gathered knowledge and expertise in design, engineering, and support services. Along with me my team of skilled professionals brings creative ideas to life and delivers exceptional results, making sure that clients stay ahead in the digital landscape.We consistently provide innovative and exceptional customer service, making them the go-to partner for all things in tech.I",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5QCV2H8D');`}</Script>
        <meta charSet="UTF_8" />
        <meta name="keywords" content="fullstack, web development, reactjs, nodejs, typescript, website design, web application development, web developer in pokhara"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:title" content="Tej Kshetri - Fullstack Web Developer | MERN | Web Designer"/>
        <meta property="og:description" content="Hello! I am Tej, Fullstack Developer based in Pokhara, Nepal. I offer web/software development services to people all around the globe with knowledge and expertise in design, engineering, and support services. Along with me, my team of skilled professionals brings ideas to life delivering exceptional results."/>
        <meta property="og:url" content="https://kshetritej.com.np/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="app/og-image.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://kshetritej.com.np"/>
      </head>
      <body
      >
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5QCV2H8D"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html >
  );
}
