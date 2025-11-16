import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/constants/skills";

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <SectionHeader sectionNumber={1} sectionName="About Me" />
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
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
  );
}
