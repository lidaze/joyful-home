import { Book } from "@/lib/types";
import clsx from "clsx";
import { Button } from "./ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
  books?: Book[];
}

export default function BookList({ className, books = [] }: Props) {
  return (
    <div className={clsx("", className)}>
      {books
        .sort((a, b) => b.no - a.no)
        .map((book, i) => (
          <BookListItem key={i} book={book} />
        ))}
    </div>
  );
}

interface BookListItemProps {
  book: Book;
}
const BookListItem = ({ book }: BookListItemProps) => {
  const t = useTranslations("Reading");

  return (
    <div className="flex gap-x-4 py-4">
      <div className="mr-4">
        <div>
          {t.rich("no", {
            num: () => <b>{book.no}</b>,
          })}
          <p>{t("of-the-year")}</p>
        </div>
      </div>
      <div className="flex-1 inline-flex flex-col gap-y-2">
        <p className="text-muted-foreground text-sm">{book.finishedDate}</p>
        <h2 className="font-bold text-lg">{book.title}</h2>
        {book.author && <p className="text-muted-foreground text-sm">{book.author}</p>}

        {/* <div className="space-x-2">
        <Badge className="rounded-full" variant="outline">
          {book.status}
        </Badge>
        <Badge className="rounded-full" variant="outline"></Badge>
      </div> */}
        {book.url && (
          <Link className="" href={book.url} target="__blank">
            <Button className="h-6" size="sm">
              Link
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
