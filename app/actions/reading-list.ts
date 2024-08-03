import { Book } from "@/lib/types";
import { Client } from "@notionhq/client";
import { cache } from "react";

const NOTION_API_KEY = "secret_xBJP3y0lhTVGqy7U6hj6mnETY3oNWjAustSPQ499Ql6";
const DATABASE_ID = "78bdf933aa284e82a502ce9c6ffc599c";

const notion = new Client({
  // auth: process.env.NOTION_TOKEN,
  auth: NOTION_API_KEY,
});

export const fetchReadingList = cache(async (): Promise<Book[]> => {
  const database = await notion.databases.query({
    database_id: DATABASE_ID,
  });

  const books: Book[] = [];

  // console.log("response: ", myPage.results.map(item => item.properties));

  database.results.forEach((item: any) => {
    const { properties } = item as any;
    const { No, Name, Author, Status, douban } = properties;

    // console.log(Author.rich_text[0])

    const status = Status.status.name;

    if (!["Done", "In progress"].includes(status)) return;

    books.push({
      no: No.number || -1,
      title: Name.title[0]?.plain_text,
      status: Status.status.name,
      author: Author.rich_text[0]?.plain_text,
      year: properties["Reading Year"]?.select?.name,
      finishedDate: properties["Date Finished"]?.date?.start,
      url: douban.url,
    });
  });

  return books;
});
