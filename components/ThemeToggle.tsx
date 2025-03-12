"use client";
import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="absolute top-5 right-5 z-50"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] dark:hidden btn-mode-animate" />
      <MoonIcon className="h-[1.2rem] w-[1.2rem] hidden dark:block btn-mode-animate" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}