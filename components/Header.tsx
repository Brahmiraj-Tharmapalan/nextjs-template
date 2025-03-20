import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NextLogo from "../public/Logo/Logo.png";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Header(params: HeaderParams) {
  const { href, type } = params;
  return (
    <header className={cn("border-b md:px-5", type === "SignIn" && "ani-fadeDown")}>
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={NextLogo}
            alt="Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="text-lg font-semibold">Next.js Template</span>
        </Link>
        <div className="flex justify-center items-center gap-5">
        <Button asChild>
          <Link href={href}>{type}</Link>
        </Button>
        <ThemeToggle/>
        </div>
      </div>
    </header>
  );
}

