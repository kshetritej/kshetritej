import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";
import Script from "next/script";



export const metadata: Metadata = {
  title: "Tej Kshetri",
  description: "Fullstack Web Developer",
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

        <Script id="meta-pixel">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '867342538733412');
          fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body
      >
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5QCV2H8D"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <noscript>
          <Image height="1" width="1" style={{ display: "none" }} alt="alternative image for facebook pixel"
            src="https://www.facebook.com/tr?id=867342538733412&ev=PageView&noscript=1"
          />
        </noscript>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html >
  );
}
