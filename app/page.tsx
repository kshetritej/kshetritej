import Link from "next/link";
import { LucideGithub, LucideLinkedin, LucideTwitter } from "lucide-react";

export default function Home() {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <p className="font-bold text-xl">Hello!</p>

            <div className="flex gap-4 items-center mt-8">

                <Link title="follow me on linkedin"
                    href={"https://linkedin.com/in/kshetritej"}
                    target="_blank"
                >
                    <LucideLinkedin />
                </Link>

                <Link title="follow me on github"
                    href={"https://github.com/kshetritej"}
                    target="_blank"
                >
                    <LucideGithub />
                </Link>
                <Link title="visit twitter(x) profile"
                    href={"https://x.com/kshetritej_"}
                    target="_blank"
                >
                    <LucideTwitter />
                </Link>
            </div>
        </div>
    )
}
