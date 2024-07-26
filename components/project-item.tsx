import type { data } from "@/consts/personal-info";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import Tag from "./tag";
import { Link as LinkIcon } from "lucide-react";

interface ProjectItemProps {
  className?: string;
  project: (typeof data.projects)[number];
}

export default function ProjectItem({ className, project }: ProjectItemProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-y-4 relative overflow-hidden group",
        "border rounded-xl p-6",
        "transition hover:shadow-md",
        className
      )}
    >
      <Link
        href={project.link}
        target="__blank"
        className="-m-6 mb-0 aspect-w-16 aspect-h-9 overflow-hidden border-b"
      >
        <Image
          className="transition scale-110 group-hover:scale-125"
          fill
          objectFit="cover"
          src={project.image}
          alt={project.imageAlt}
        />
      </Link>
      <h2 className="text-xl">{project.title}</h2>
      <p className="opacity-75">{project.description}</p>
      <div>
        {project.category.map((item, i) => (
          <Tag variant="outline" key={i}>
            {item}
          </Tag>
        ))}
      </div>
      <div className="flex gap-x-2">
        {project.types.map((type, i) => (
          <Tag className="rounded-md" key={i}>
            {type}
          </Tag>
        ))}
      </div>
      <div>
        <Link
          href={project.link}
          target="__blank"
          className="inline-flex items-center gap-x-2 border px-2 py-0.5 rounded-md"
        >
          <LinkIcon className="size-4" /> View the Project
        </Link>
      </div>
    </div>
  );
}
