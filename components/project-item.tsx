import type { data } from "@/consts/personal-info";

import clsx from "clsx";
import Link from "next/link";

interface ProjectItemProps {
  className?: string;
  project: (typeof data.projects)[number];
}

export default function ProjectItem({ className, project }: ProjectItemProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-y-2",
        "prose border rounded-xl p-4",
        "transition hover:shadow-md",
        className
      )}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <iframe className="w-full h-32pointer-events-none border" src={project.link} />
      <Link target="_blank" href={project.link}>
        {project.link.substring(0, 30)}...
      </Link>
      <div>
        {project.types.map((type, i) => (
          <span key={i}>{type}</span>
        ))}
      </div>
      <div>
        {project.category.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
      <div>
        Started at: <b>{project.startDate.toDateString()}</b>
      </div>
    </div>
  );
}
