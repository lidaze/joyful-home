import clsx from "clsx";
import { data } from "@/consts/personal-info";
import Link from "next/link";
import Image from "next/image";
import avatar from "@/public/avatar.jpg";

const { personal } = data;

interface PersonalInfoProps {
  className?: string;
}

export default function PersonalInfo({ className }: PersonalInfoProps) {
  return (
    <div className={clsx("flex flex-col gap-y-4", className)}>
      <Image className="rounded-full size-20" src={avatar} alt="avatar" />
      <article className="prose">
        <h2 className="">{personal.name}</h2>
        <p className="">{personal.description}</p>
        <div className="flex gap-x-4">
          <Link href={personal.links.twitter}>X</Link>
          <Link href={personal.links.github}>Github</Link>
        </div>
      </article>
    </div>
  );
}
