import clsx from "clsx";
import { data } from "@/consts/personal-info-data";
import Link from "next/link";
import Image from "next/image";
import avatar from "@/public/avatar.jpg";
import { Icons } from "./icons";
import { Mail } from "lucide-react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import BlurFade from "./magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/consts/const";
import { FadeText } from "./magicui/fade-text";

const {
  common: { socialLinks },
} = data;

interface PersonalInfoProps {
  className?: string;
}

export default function PersonalInfo({ className }: PersonalInfoProps) {
  const t = useTranslations("PersonalInfo");
  const locale = useLocale();
  const { personal } = data[locale as "zh" | "en"];

  return (
    <div className={clsx("flex flex-col gap-y-4", className)}>
      <BlurFade delay={0}>
        <Image className="rounded-full size-20" src={avatar} alt="avatar" />
      </BlurFade>
      <article>
        <BlurFade delay={0}>
          <h2 className="mb-6 text-3xl font-semibold">
            {t("hello")} <b>{personal.name}</b>
          </h2>
        </BlurFade>
        <div className="space-y-4">
          {personal.desc.map((item, i) => (
            <FadeText
              className="leading-relaxed"
              key={i}
              text={item}
              framerProps={{ show: { transition: { delay: BLUR_FADE_DELAY } } }}
            />
          ))}
        </div>
        <div className="mt-8">
          <BlurFade className="flex gap-x-4 items-center" delay={BLUR_FADE_DELAY + 0.1}>
            <Link href={socialLinks.twitter} target="__blank">
              <Icons.x className="size-5" />
            </Link>
            <Link href={socialLinks.github} target="__blank">
              <Icons.github className="size-5" />
            </Link>
            <span className="inline-flex items-center gap-x-2">
              <Mail className="size-5" />
              lidaze1020@gmail.com
            </span>
          </BlurFade>

          <BlurFade className="flex gap-x-4 mt-2" delay={BLUR_FADE_DELAY + 0.15}>
            <Link href={socialLinks.xiaohongshu1} target="__blank">
              <Icons.xiaohongshu className="grayscale" /> Joyful
            </Link>
            <Link href={socialLinks.xiaohongshu2} target="__blank">
              <Icons.xiaohongshu className="grayscale" /> 从小就爱玩
            </Link>
          </BlurFade>
        </div>
      </article>
    </div>
  );
}
