"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

interface Props {
  className?: string;
}

export default function LanguageToggle({ className }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLanguage = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className={clsx("", className)}>
      <ToggleGroup
        className="inline-flex border rounded-full p-0.5"
        type="single"
        onValueChange={(newLocale) => {
          if (newLocale) {
            switchLanguage(newLocale);
          }
        }}
        value={locale}
      >
        <ToggleGroupItem className="rounded-full h-7 px-4 text-sm" size="sm" value="en">
          English
        </ToggleGroupItem>
        <ToggleGroupItem className="rounded-full h-7 px-4 text-sm" size="sm" value="zh">
          中文
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
