"use client";

import { Book } from "@/lib/types";
import clsx from "clsx";
import { useState } from "react";
import { Badge } from "./ui/badge";
import BookList from "./book-list";
import { useTranslations } from "next-intl";
import { getWeekNumber } from "@/lib/utils";

interface Props {
  className?: string;
  books: Book[];
}

export default function Reading({ className, books }: Props) {
  const t = useTranslations("Reading");
  const [year, setYear] = useState("All");

  const years = Array.from(new Set(books.map((item) => item.year as string)));

  const filteredBooks = books
    .filter((book) => year === YEAR_TAG_ALL || book.year === year)
    .filter((book) => book.status === "Done");

  return (
    <div className={clsx("min-h-screen max-w-screen-lg mx-auto pt-8 px-8", className)}>
      <header>
        <YearTags options={years} value={year} onTagClick={setYear} />
        <div className="my-2">
          {t.rich("week-no", {
            num: () => <b> {getWeekNumber()} </b>,
          })}
        </div>
      </header>
      <BookList books={filteredBooks} />
    </div>
  );
}

const YEAR_TAG_ALL = "All";

interface YearTagsProps {
  value?: string;
  onTagClick?: (value: string) => void;
  options: string[];
}
const YearTags = ({ options = [], value = YEAR_TAG_ALL, onTagClick }: YearTagsProps) => {
  return (
    <div className="flex gap-4">
      {[YEAR_TAG_ALL, ...options].map((item, i) => (
        <Badge
          className="cursor-pointer"
          key={i}
          variant={item === value ? "default" : "secondary"}
          onClick={() => onTagClick?.(item)}
        >
          {item}
        </Badge>
      ))}
    </div>
  );
};
