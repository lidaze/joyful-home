import clsx from "clsx";
import { data } from "@/consts/personal-info";
import Link from "next/link";
import Image from "next/image";
import avatar from "@/public/avatar.jpg";
import { Icons } from "./icons";
import { Mail } from "lucide-react";

const { personal } = data;

interface PersonalInfoProps {
  className?: string;
}

export default function PersonalInfo({ className }: PersonalInfoProps) {
  return (
    <div className={clsx("flex flex-col gap-y-4", className)}>
      <Image className="rounded-full size-20" src={avatar} alt="avatar" />
      <article className="prose">
        <h2 className="mb-5">
          Hey! I&apos;m <b>{personal.name}</b>
        </h2>
        <div className="">
          {personal.desc.map((item, i) => (
            <p className="" key={i}>
              {item}
            </p>
          ))}
        </div>
        <div className="mt-8">
          <div className="flex gap-x-4 items-center">
            <Link href={personal.links.twitter} target="__blank">
              <Icons.x className="size-5" />
            </Link>
            <Link href={personal.links.github} target="__blank">
              <Icons.github className="size-5" />
            </Link>
            <span className="inline-flex items-center gap-x-2">
              <Mail className="size-5" />
              lidaze1020@gmail.com
            </span>
          </div>
          <div className="flex gap-x-4 mt-2">
            <Link href={personal.links.xiaohongshu1} target="__blank">
              <Icons.xiaohongshu className="not-prose" /> Joyful
            </Link>
            <Link href={personal.links.xiaohongshu2} target="__blank">
              <Icons.xiaohongshu className="not-prose" /> 从小就爱玩
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
