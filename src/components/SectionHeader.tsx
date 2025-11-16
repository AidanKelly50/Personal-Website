export default function SectionHeader({
  sectionNumber,
  sectionName,
}: {
  sectionNumber: number;
  sectionName: string;
}) {
  return (
    <h2 className="text-xl sm:text-3xl text-foreground-light font-bold mb-8 flex items-center gap-4">
      <span className="text-primary font-mono">{sectionNumber.toString().padStart(2, "0")}.</span>
      {sectionName}
      <div className="flex-1 h-px bg-border"></div>
    </h2>
  );
}
