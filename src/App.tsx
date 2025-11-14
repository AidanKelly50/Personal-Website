import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react";
import { skills } from "@/constants/skills";
import { projects } from "@/constants/projects";

function App() {
  return (
    <div className="min-h-screen w-full bg-background px-4 sm:px-8 md:px-32 xl:px-64">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 w-full backdrop-blur-sm z-50 bg-background/85">
        <div className="px-2 sm:px-8 md:px-32 xl:px-64 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-primary">
            <Code2 size={24} />
            <span className="text-xl font-bold">AK</span>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-4xl">
          <div className="mb-4 text-primary">
            <p className="text-lg font-mono">Hi, my name is</p>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4" style={{ color: "#CCD6F6" }}>
            Aidan Kelly
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-muted-foreground">
            I solve problems using code.
          </h2>
          <p className="text-lg mb-8 max-w-2xl leading-relaxed text-muted-foreground">
            I'm a software developer with a passion for pushing the boundaries of technology. I like
            building programs that solve real-world problems and make people's lives better.
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="outline" className="">
              View My Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <h2 className="text-xl sm:text-3xl text-foreground-light font-bold mb-8 flex items-center gap-4">
          <span className="text-primary font-mono">01.</span>
          About Me
          <div className="flex-1 h-px bg-border"></div>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8">
          <div className="flex justify-center">
            <img
              src="/Headshot.jpeg"
              className="w-48 sm:w-64 xl:w-72 2xl:w-84 h-48 sm:h-64 xl:h-72 2xl:h-84 rounded-lg flex items-center justify-center border-3 border-primary mt-2"
            />
          </div>
          <div>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              I'm a 3rd year student at Northeastern University majoring in Computer Science and
              Business Administration (concentration in Financial Technology). I am looking for a
              career in Full-Stack Software Development, Quantitative Finance, or Financial
              Programming.
            </p>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              I like building programs that solve problems, and am always trying to learn new
              languages, tools, or systems. When I'm not coding, you can find me playing or watching
              hockey, cooking, at the beach, or with my friends and family.
            </p>
            <h3 className="text-lg font-semibold" style={{ color: "#CCD6F6" }}>
              Technologies I work with:
            </h3>
            <h5 className="text-muted-foreground font-semibold mt-3 mb-1">Programming Languages</h5>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((s) => s.type === "language")
                .map((s) => (
                  <Badge key={s.name} variant={s.type}>
                    {s.name}
                  </Badge>
                ))}
            </div>
            <h5 className="text-muted-foreground font-semibold mt-3 mb-1">Tech Stack</h5>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((s) => s.type === "stack")
                .map((s) => (
                  <Badge key={s.name} variant={s.type}>
                    {s.name}
                  </Badge>
                ))}
            </div>
            <h5 className="text-muted-foreground font-semibold mt-3 mb-1">Tools</h5>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((s) => s.type === "tool")
                .map((s) => (
                  <Badge key={s.name} variant={s.type}>
                    {s.name}
                  </Badge>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <h2
          className="text-xl sm:text-3xl font-bold mb-12 flex items-center gap-4"
          style={{ color: "#CCD6F6" }}
        >
          <span className="text-primary font-mono">02.</span>
          Featured Projects
          <div className="flex-1 h-px bg-border"></div>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card hover:-translate-y-1 transition-all cursor-pointer"
            >
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

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <h2
          className="text-xl sm:text-3xl font-bold mb-8 flex items-center gap-4"
          style={{ color: "#CCD6F6" }}
        >
          <span className="text-primary font-mono">03.</span>
          Get In Touch
          <div className="flex-1 h-px bg-border"></div>
        </h2>
        <div className="text-center">
          <p className="text-lg mb-8 leading-relaxed text-muted-foreground">
            I'm currently open to new opportunities and interesting projects. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary bg-transparent hover:bg-primary/10"
          >
            Say Hello
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/AidanKelly50/"
              className="hover:opacity-70 transition-opacity"
            >
              <Github size={24} className="text-muted-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/aidan-j-kelly/"
              className="hover:opacity-70 transition-opacity"
            >
              <Linkedin size={24} className="text-muted-foreground" />
            </a>
            <a
              href="mailto:kelly.aida@northeastern.edu"
              className="hover:opacity-70 transition-opacity"
            >
              <Mail size={24} className="text-muted-foreground" />
            </a>
          </div>
          <p className="text-center text-sm font-mono text-muted-foreground">
            Built with React & TypeScript
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
