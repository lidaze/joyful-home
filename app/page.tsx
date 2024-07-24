import PersonalInfo from "@/components/personal-info";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-screen-lg mx-auto justify-between">
      <PersonalInfo className="w-80 p-10" />
      <Projects className="flex-1 p-10" />
    </main>
  );
}
