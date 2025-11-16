import { projects } from "@/constants/projects";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <SectionHeader sectionNumber={2} sectionName="Featured Projects" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card hover:-translate-y-1 transition-all cursor-pointer">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                {project.icon}
                {project.link && (
                  <a href={project.link} className="hover:opacity-70 transition-opacity mx-4">
                    <ExternalLink size={20} className="text-muted-foreground" />
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} className="hover:opacity-70 transition-opacity">
                    <Github size={20} className="text-muted-foreground" />
                  </a>
                )}
              </div>
              <CardTitle style={{ color: "#CCD6F6" }}>{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className=" mt-auto">
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
