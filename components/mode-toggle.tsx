"use client"
import * as React from "react"
import { useTheme } from "next-themes"


export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <p className="rotate-90  hover:cursor-pointer absolute right-0 rounded-full w-[50px] "  onClick={() => setTheme(theme => (theme === "dark" ? "light" : "dark"))}>
            <span className="bg-lime-500 p-1">lights</span>
        </p>
    )
}
