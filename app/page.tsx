import Link from "next/link";
import PronounceTej from "./components/pronounce";

export default function Home() {
  const socials = [
    { name: "onlyfans", url: "https://linkedin.com/in/kshetritej" },
    { name: "github", url: "https://github.com/kshetritej" },
    { name: "contact", url: "https://contact.kshetritej.com.np" },
  ];
  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-start max-w-3xl mx-auto h-screen  italic font-serif">
      <PronounceTej />
      <p>Fullstack Web Developer</p>
      <p className="italic">
        I build things for the web - sometimes beautiful, sometimes brutal,
        sometimes useless, sometimes useful, always intentional.
      </p>

      {/* socials */}
      <div className="flex gap-4 ">
        {socials.map((social) => (
          <Link  key={social.url} href={social.url} target="_blank" className="underline text-red-700 hover:text-red-900">
            {social.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
