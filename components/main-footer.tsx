import clsx from "clsx";
import ThemeToggle from "./theme-toggle";
import LanguageToggle from "./language-toggle";
import { Heart } from "lucide-react";

interface Props {
  className?: string;
}

export default function MainFooter({ className }: Props) {
  return (
    <footer className={clsx("mt-6 sm:mt-12 pt-4", className)}>
      <div className="flex items-center justify-end gap-x-6">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      <p className="text-muted-foreground text-xs flex items-center justify-center gap-x-2 p-4">
        <Heart className="size-3 opacity-60" />
        <span>Made by Joyful out of passion 2024-07</span>
        <Heart className="size-3 opacity-60" />
      </p>
    </footer>
  );
}
