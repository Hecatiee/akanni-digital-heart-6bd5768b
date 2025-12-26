const companies = [
  { name: "BOI", style: "font-serif font-bold" },
  { name: "MIT WPU", style: "font-heading font-bold tracking-wide" },
  { name: "Heartfullness", style: "font-body italic" },
];

const TrustedBy = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-muted-foreground text-sm uppercase tracking-widest">
            Trusted By
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-20">
          {companies.map((company, index) => (
            <span
              key={index}
              className={`text-2xl md:text-3xl text-foreground/70 hover:text-foreground transition-colors duration-300 ${company.style}`}
            >
              {company.name}
            </span>
          ))}
        </div>
        
        <div className="mt-12 border-t border-border/50 max-w-4xl mx-auto" />
      </div>
    </section>
  );
};

export default TrustedBy;
