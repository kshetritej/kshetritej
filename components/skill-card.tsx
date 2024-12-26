import { Card } from "@/components/ui/card";
import Image from "next/image";
export function SkillCard({ skill }: { skill: { name: string, icon: string } }) {
    return (
        <Image
        className="hover:scale-110 transition-transform"
            width={50}
            height={50}
            alt={skill.name}
            src={skill.icon} />
    )
}