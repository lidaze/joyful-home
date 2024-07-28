"use client";

import clsx from "clsx";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";

const themeOptions = [
  { value: "light", icon: <Sun className="size-4" /> },
  { value: "dark", icon: <Moon className="size-4" /> },
  { value: "system", icon: <Laptop className="size-4" /> },
];

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme();

  return (
    <div className={clsx("", className)}>
      <ToggleGroup
        className="inline-flex border rounded-full p-0.5"
        type="single"
        onValueChange={(newTheme) => {
          if (newTheme) {
            setTheme(newTheme);
          }
        }}
        value={theme}
      >
        {themeOptions.map((item) => (
          <ToggleGroupItem key={item.value} className="rounded-full" size="sm" value={item.value}>
            {item.icon}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
