import { Code2 } from "lucide-react";

export default function TopBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full backdrop-blur-sm z-50 bg-background/70">
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
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
