import type { Metadata } from "next";
import Prompt from "../ui/prompt";
import ProjectCard from "../ui/project-card";
import { projects } from "../lib/data";

export const metadata: Metadata = {
  title: "Projects — Oleksandr Yastrebov",
};

export default function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <Prompt path="~/projects" command="ls -l" />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
