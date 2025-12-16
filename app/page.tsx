import Link from "next/link"
import { Button } from "@/components/ui/button"
import PronounceTej from "./components/pronounce"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  const socials = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/kshetritej",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/kshetritej",
      icon: Github,
    },
    {
      name: "Contact",
      url: "https://contact.kshetritej.com.np",
      icon: Mail,
    },
  ]

  return (
    <div className="min-h-screen bg-[#f5f3ef] text-[#2d2d2d]">
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-20 md:py-32 max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <PronounceTej />
        </div>

        <p className="text-xl md:text-2xl font-medium mb-4 text-[#4a4a4a]">Fullstack Web Developer</p>

        <p className="text-base md:text-lg text-[#6a6a6a] max-w-2xl mb-12 leading-relaxed font-serif italic">
          I build things for the web — sometimes beautiful, sometimes brutal, sometimes useless, sometimes useful,
          always intentional.
        </p>

        {/* CTA Button */}
        {/* <Button
          size="lg"
          className="bg-[#2d2d2d] hover:bg-[#1a1a1a] text-white rounded-full px-8 py-6 text-base font-medium mb-16"
          asChild
        >
          <Link href="https://contact.kshetritej.com.np" target={"_blank"}>Let's connect</Link>
        </Button> */}
      </main>

      {/* Connect Section */}
      <section id="connect" className="pb-24 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-8 text-balance">Connect with me</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <Button
                key={social.url}
                variant="outline"
                size="lg"
                className="border-[#2d2d2d] text-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-white rounded-full bg-transparent"
                asChild
              >
                <Link href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  {social.name}
                </Link>
              </Button>
            )
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm text-[#6a6a6a] border-t border-[#e0ddd8]">
        <p>© {new Date().getFullYear()} Tej Kshetri. All rights reserved.</p>
      </footer>
    </div>
  )
}
