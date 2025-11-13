import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack application with React, Node.js, and PostgreSQL",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Real-time collaboration tool with WebSocket integration",
      tech: ["TypeScript", "Express", "MongoDB", "Socket.io"],
      link: "#"
    },
    {
      title: "API Gateway Service",
      description: "Microservices architecture with rate limiting and auth",
      tech: ["Go", "Redis", "Docker", "Kubernetes"],
      link: "#"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", 
    "Python", "PostgreSQL", "MongoDB", "Docker", 
    "AWS", "Git", "REST APIs", "GraphQL"
  ];

  return (
    <div className="min-h-screen w-full bg-background px-2 sm:px-8 md:px-32 xl:px-64">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 w-full backdrop-blur-sm z-50 bg-background/85">
        <div className="px-2 sm:px-8 md:px-32 xl:px-64 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-primary">
            <Code2 size={24} />
            <span className="text-xl font-bold">AK</span>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-4xl">
          <div className="mb-4 text-primary">
            <p className="text-lg font-mono">Hi, my name is</p>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4" style={{ color: '#CCD6F6' }}>
            Aidan Kelly
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-muted-foreground">
            I solve problems using code.
          </h2>
          <p className="text-lg mb-8 max-w-2xl leading-relaxed text-muted-foreground">
            I'm a software developer with a passion for pushing the boundaries of technology. 
            I like building programs that solve real-world problems and make people's lives better.
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg"
              variant="outline"
              className=''
            >
              View My Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4" style={{ color: '#CCD6F6' }}>
          <span className="text-primary font-mono">01.</span>
          About Me
          <div className="flex-1 h-px bg-border"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                I'm passionate about creating elegant solutions to complex problems. 
                With experience in full-stack development, I enjoy working across the entire 
                development lifecycle from concept to deployment.
              </p>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source, or enjoying outdoor photography.
              </p>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#CCD6F6' }}>
                Technologies I work with:
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline"
                    className="border-border text-muted-foreground bg-transparent"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-64 h-64 rounded-lg flex items-center justify-center border-2 border-primary bg-primary/10">
                <img src="src/assets/Headshot.jpeg" />
              </div>
            </div>
          </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4" style={{ color: '#CCD6F6' }}>
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
                    <Code2 size={32} className="text-primary" />
                    <a href={project.link} className="hover:opacity-70 transition-opacity">
                      <ExternalLink size={20} className="text-muted-foreground" />
                    </a>
                  </div>
                  <CardTitle style={{ color: '#CCD6F6' }}>{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs font-mono text-muted-foreground"
                      >
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
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4" style={{ color: '#CCD6F6' }}>
          <span className="text-primary font-mono">03.</span>
          Get In Touch
          <div className="flex-1 h-px bg-border"></div>
        </h2>
        <div className="text-center">
          <p className="text-lg mb-8 leading-relaxed text-muted-foreground">
            I'm currently open to new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
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
            <a href="https://github.com" className="hover:opacity-70 transition-opacity">
              <Github size={24} className="text-muted-foreground" />
            </a>
            <a href="https://linkedin.com" className="hover:opacity-70 transition-opacity">
              <Linkedin size={24} className="text-muted-foreground" />
            </a>
            <a href="mailto:kelly.aida@northeastern.edu" className="hover:opacity-70 transition-opacity">
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