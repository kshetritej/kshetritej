import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="relative h-[100vh] flex p-8 flex-col leading-loose max-w-lg mx-auto">
            <nav><ModeToggle/></nav>
            <section className="hero">
                <h1 className="text-2xl">Hi, I am Tej <span className="">👋🏼</span></h1>
                <p>Engineer. Developer. Problem Solver</p>
                <p className="mt-4">I like building useful things on the web.</p>
                <div className="mt-4 flex gap-4">
                    <Button className="rounded-none hover:cursor-pointer" size={'lg'}> <Link href={"tel:+977 9841328947"}>Call Now</Link></Button>
                </div>
            </section>

            <section className="about mt-8">
                <p className="">
                    I'm an engineer with a passion for building fast, simple, and practical web applications.
                    I have built <Link className="text-lime-500 underline" href={"https://greenflag.kshetritej.com.np"} target="_blank">green flag</Link> (a review platform for businesses) <span></span>
                    <Link className="text-lime-500 underline" href={"https://github.com/kshetritej/onebottle"}>oneBottle</Link> (ecommerce for liquors) <span> </span>
                    <Link className="text-lime-500 underline" href={"https://github.com/kshetritej/learnify"}>learnify</Link> (lms) <br/>
                    I have also worked with startups in various fullstack applications contributing to overall process of developing a reliable applications.
                    I care about clean code, real-world impact, and learning new things every day.
                    <br />
                    When I’m not coding, I’m probably sketching ideas, fixing something, reading some books, or just enjoying the quiet.
                </p>
            </section>

            <section className="contact mt-8">
                <h2 className="underline font-medium text-xl">Contact</h2>
                <p>
                    Have a project in mind or just want to say hi? <br/>
                    Reach out at <Link className="underline text-lime-500" href={"mailto:tejghartikshetri@gmail.com"}>[tejghartikshetri@gmail.com]</Link> 
                    <br/>or connect on
                    <Link className="ml-2 underline text-lime-500" href={"https://linkedin.com/in/kshetritej"} target="_blank">[Linkedin]</Link> /
                    <Link className="underline text-lime-500" href={"https://github.com/kshetritej"} target="_blank">[Github]</Link>/
                    <Link className="underline text-lime-500" href={"https://x.com/kshetritej_"} target="_blank">[X]</Link>.
                </p>
            </section>
            <footer className="mt-8">
                <Image src="/signature-black.png" className="grayscale" alt="tej_kshetri_signature" width={150} height={100} />
            </footer>
        </div>
    )
}
