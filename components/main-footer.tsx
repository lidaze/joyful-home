import clsx from "clsx";
import ThemeToggle from "./theme-toggle";
import LanguageToggle from "./language-toggle";

interface Props {
  className?: string;
}

export default function MainFooter({ className }: Props) {
  return (
    <footer className={clsx("mt-20 py-4", className)}>
      <div className="flex items-center justify-end gap-x-6">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </footer>
  );
}
