import clsx from "clsx";
import { data } from "@/consts/personal-info";
import ProjectItem from "./project-item";

const { projects } = data;

interface Props {
  className?: string;
}

export default function Projects({ className }: Props) {
  return (
    <div className={clsx("flex flex-col gap-y-4", className)}>
      {projects.map((project, i) => (
        <ProjectItem key={i} project={project} />
      ))}
    </div>
  );
}
