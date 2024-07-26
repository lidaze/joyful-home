import clsx from "clsx";

interface TagProps extends React.PropsWithChildren {
  className?: string;
  variant?: "outline" | "default";
}

export default function Tag({ className, variant = "default", children }: TagProps) {
  return (
    <div
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-semibold",
        "border rounded-full",
        variant === "default" ? "bg-black text-white" : "border",
        className
      )}
    >
      {children}
    </div>
  );
}
