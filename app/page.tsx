import Link from "next/link";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center h-[100vh] gap-4">
            <Scale className="h-12 w-12 mb-4" />
            <Link href={"https://chng.it/g9DvkryC2c"} className="underline">
                <Button>
                    Sign the Petition
                </Button>
            </Link>
            <p className="italic max-w-md text-center">Sign this petition to support the call for international agencies to oversee and reform the government and security forces of Nepal.</p>
        </div>
    )
}
