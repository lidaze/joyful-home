import clsx from "clsx";
import { data } from "@/consts/personal-info-data";
import ProjectItem from "./project-item";
import { useLocale } from "next-intl";

interface Props {
  className?: string;
}

export default function Projects({ className }: Props) {
  const locale = useLocale();

  const { projects } = data[locale as "en" | "zh"];

  return (
    <div className={clsx("flex flex-col gap-y-4", className)}>
      {projects.map((project, i) => (
        <ProjectItem key={i} project={project} />
      ))}
    </div>
  );
}
