import type { Project } from "@/consts/personal-info-data";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Link as LinkIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useTranslations } from "next-intl";
import { Icons } from "./icons";

interface ProjectItemProps {
  className?: string;
  project: Project;
}

export default function ProjectItem({ className, project }: ProjectItemProps) {
  const t = useTranslations("Project");

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
        className="-m-6 mb-0 aspect-[2.35/1] overflow-hidden border-b"
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
      <p className="text-sm text-muted-foreground">{project.description}</p>
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
      <div className="flex gap-x-2">
        <Link href={project.link} target="__blank">
          <Button size="sm">
            <LinkIcon className="size-4 mr-2" />
            {t("view-btn")}
          </Button>
        </Link>
        {project.sourceCode && (
          <Link href={project.sourceCode} target="__blank">
            <Button size="sm">
              <Icons.github className="size-4 mr-2" />
              {t("code-btn")}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
