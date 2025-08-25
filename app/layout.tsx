import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";


export const metadata: Metadata = {
  title: "Tej Kshetri - Full Stack Web Developer | Nepal",
  description:"Tej is a full-stack developer based in Pokhara, Nepal, known for building clean, reliable web applications. Whether it's a website, a platform, or something in between, each project is approached with care, clarity, and a strong sense of purpose. If you're looking for someone who understands both the big picture and the small details, Tej is ready to collaborate and help bring your ideas to life."

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Fullstack developer, Web developer, Software developer, Freelance developer, Custom web applications, Responsive web design, Fullstack JavaScript developer, Remote web developer, Affordable web developer, Software development services, Fullstack developer Pokhara, Web developer Pokhara, Software developer Pokhara, Freelance developer Pokhara, Pokhara web development services, Custom web applications Pokhara, Responsive web design Pokhara, Fullstack JavaScript developer Pokhara, Remote web developer Nepal, Affordable web developer Pokhara"/>
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tej Kshetri - Fullstack Web Developer | Web Designer" />
        <meta name="description" content="Tej is a full-stack developer based in Pokhara, Nepal, known for building clean, reliable web applications that simply work. Whether it's a website, a platform, or something in between, each project is approached with care, clarity, and a strong sense of purpose. If you're looking for someone who understands both the big picture and the small details, Tej is ready to collaborate and help bring your ideas to life."/> 
        <meta property="og:url" content="https://kshetritej.com.np/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="app/icon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Tej Kshetri" />
        <meta name="copyright" content="Tej Kshetri" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <link rel="canonical" href="https://kshetritej.com.np" />
      </Head>
      <body
      >
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html >
  );
}
