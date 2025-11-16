import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import TopBar from "@/components/TopBar";
import About from "@/components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  return (
    <div className="min-h-screen w-full bg-background px-4 sm:px-8 md:px-32 xl:px-64">
      {/* Navigation */}
      <TopBar />

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
      <About />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

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
