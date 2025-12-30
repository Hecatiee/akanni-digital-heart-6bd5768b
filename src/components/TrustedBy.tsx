const topRow = [
  { name: "BOI", style: "font-serif font-bold uppercase tracking-widest" },
  { name: "MIT WPU", style: "font-heading font-black" },
  { name: "FZounders", style: "font-heading font-bold tracking-wide" },
];

const bottomRow = [
  { name: "Heartfullness", style: "font-serif italic" },
  { name: "Bhakti Cure", style: "font-serif font-semibold" },
];

const TrustedBy = () => {
  return (
    <section className="py-16 md:py-20 bg-[hsl(40,20%,92%)]">
      <div className="container mx-auto px-4">
        {/* Light background film behind company names */}
        <div className="relative">
          <div className="absolute inset-0 -mx-4 md:-mx-8 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-2xl" />
          <div className="relative py-8 md:py-12">
            {/* Top row */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-x-12 md:gap-x-16 lg:gap-x-24 gap-y-6">
              {topRow.map((company, index) => (
                <span
                  key={index}
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[hsl(0,0%,35%)] hover:text-[hsl(0,0%,20%)] transition-colors duration-300 ${company.style}`}
                >
                  {company.name}
                </span>
              ))}
            </div>
            {/* Bottom row */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-x-12 md:gap-x-16 lg:gap-x-24 gap-y-6 mt-6 md:mt-8">
              {bottomRow.map((company, index) => (
                <span
                  key={index}
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[hsl(0,0%,35%)] hover:text-[hsl(0,0%,20%)] transition-colors duration-300 ${company.style}`}
                >
                  {company.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 border-t border-[hsl(0,0%,75%)] max-w-5xl mx-auto" />
      </div>
    </section>
  );
};

export default TrustedBy;
