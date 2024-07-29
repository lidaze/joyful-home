import PersonalInfo from "@/components/personal-info";
import Projects from "@/components/projects";
import MainFooter from "@/components/main-footer";

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-lg mx-auto pt-8 px-8">
      <div className="flex flex-col gap-8 items-center sm:flex-row sm:items-start">
        <PersonalInfo className="w-full sm:w-[320px] sm:sticky sm:top-4" />
        <Projects className="flex-1 sm:mt-0" />
      </div>
      <MainFooter />
    </main>
  );
}
