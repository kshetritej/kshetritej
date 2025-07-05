import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";


export const metadata: Metadata = {
  title: "Tej Kshetri",
  description: "Tej, a Fullstack Developer from Nepal, is known for offering web and software development services worldwide. Since 2021, expertise in design, engineering, and support has been gained. Creative ideas are brought to life by Tej and his skilled team, ensuring clients stay ahead in the digital world with innovative solutions and excellent service."

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF_8" />
        <meta name="keywords" content="website design in pokhara, fullstack, web development, reactjs, nodejs, typescript, website design, web application development, web developer in pokhara" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tej Kshetri - Fullstack Web Developer | MERN | Web Designer" />
        <meta property="og:description" content="Hello! I am Tej, Fullstack Developer based in Pokhara, Nepal. I offer web/software development services to people all around the globe with knowledge and expertise in design, engineering, and support services. Along with me, my team of skilled professionals brings ideas to life delivering exceptional results." />
        <meta property="og:description" content="Tej, a Fullstack Developer from Nepal, is known for offering web and software development services worldwide. Since 2021, expertise in design, engineering, and support has been gained. Creative ideas are brought to life by Tej and his skilled team, ensuring clients stay ahead in the digital world with innovative solutions and excellent service."/>
        <meta property="og:url" content="https://kshetritej.com.np/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="app/icon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
