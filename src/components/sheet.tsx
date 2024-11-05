import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { navLinks } from "./Navbar"
import { Link } from "react-router-dom"

export function NavSheet() {
    return (
        <Sheet>
            <SheetTrigger><Menu /></SheetTrigger>
            <SheetContent className="flex flex-col flex-start text-4xl">
                <SheetHeader className="flex text-left">
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <SheetDescription>
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((item, idx) => (
                            <li key={idx}>
                                <Link
                                    className="hover:text-purple-600"
                                    to={`/${item.toLowerCase()}`}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </SheetDescription>
            </SheetContent>
            <SheetClose asChild>
            </SheetClose>
        </Sheet>
    )
}

