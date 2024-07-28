import type { data } from "@/consts/personal-info";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Link as LinkIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

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
          priority
          src={project.image}
          alt={project.imageAlt}
          style={{ objectFit: "cover" }}
        />
      </Link>
      <h2 className="text-xl">{project.title}</h2>
      <p className="opacity-80">{project.description}</p>
      <div>
        {project.category.map((item, i) => (
          <Badge variant="secondary" className="rounded-full" key={i}>
            {item}
          </Badge>
        ))}
      </div>
      <div className="flex gap-x-2">
        {project.types.map((type, i) => (
          <Badge variant="outline" key={i}>
            {type}
          </Badge>
        ))}
      </div>
      <div>
        <Link href={project.link} target="__blank">
          <Button size="sm">
            <LinkIcon className="size-4 mr-2" />
            View the Project
          </Button>
        </Link>
      </div>
    </div>
  );
}
