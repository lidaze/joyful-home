import Reading from "@/components/reading";
import { fetchReadingList } from "@/app/actions/reading-list";

export default async function ReadingPage() {
  const books = await fetchReadingList();

  return <Reading books={books} />;
}
