import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <SectionHeader sectionNumber={3} sectionName="Get In Touch" />
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
  );
}
