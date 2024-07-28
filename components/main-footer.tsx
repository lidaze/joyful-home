import clsx from "clsx";
import ThemeToggle from "./theme-toggle";

interface Props {
  className?: string;
}

export default function MainFooter({ className }: Props) {
  return (
    <footer className={clsx("border-t mt-20 py-4", className)}>
      <div className="flex items-center justify-end">
        <ThemeToggle />
      </div>
    </footer>
  );
}
