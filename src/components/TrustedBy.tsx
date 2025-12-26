const companies = [
  { name: "BOI", style: "font-serif font-bold uppercase tracking-widest" },
  { name: "MIT WPU", style: "font-heading font-black" },
  { name: "Heartfullness", style: "font-serif italic" },
];

const TrustedBy = () => {
  return (
    <section className="py-20 bg-[hsl(40,20%,92%)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 md:gap-x-24">
          {companies.map((company, index) => (
            <span
              key={index}
              className={`text-3xl md:text-4xl lg:text-5xl text-[hsl(0,0%,35%)] hover:text-[hsl(0,0%,20%)] transition-colors duration-300 ${company.style}`}
            >
              {company.name}
            </span>
          ))}
        </div>
        
        <div className="mt-16 border-t border-[hsl(0,0%,75%)] max-w-5xl mx-auto" />
      </div>
    </section>
  );
};

export default TrustedBy;
