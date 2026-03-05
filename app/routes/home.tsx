import Navbar from "~/Components/Navbar";
import type { Route } from "./+types/home";
import ResumeCard from "~/Components/ResumeCard";
import { resumes } from "../../constants/index";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart resume analyzer powered by AI" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover bg-center py-[5.8vh]">
      <Navbar />

      <section className="main-section mt-[2vh]">
        <div className="page-heading">
          <h1>Track Your Application & Resume Rating</h1>
          <h2>Review your Submissions and Check Ai-powered feedback.</h2>
        </div>
      </section>

      <div className="flex items-center  justify-center gap-3 flex-wrap w-full mt-[3.5vh]">
        {resumes.map((resume) => (
       
             <ResumeCard key={resume.id} resume={resume} />
      
        ))}
      </div>
    </main>
  );
}
