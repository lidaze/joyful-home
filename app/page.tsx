import clsx from "clsx";
import PersonalInfo from "@/components/personal-info";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className={clsx("min-h-screen max-w-screen-lg mx-auto", "flex flex-col gap-4 items-center sm:flex-row sm:items-start")}>
      <PersonalInfo className="w-full sm:w-[360px] p-10" />
      <Projects className="flex-1 p-10" />
    </main>
  );
}
