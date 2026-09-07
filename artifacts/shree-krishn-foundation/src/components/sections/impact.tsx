export function ImpactSection() {
  const stats = [
    { number: "250,000+", label: "Warm Meals Served", subtitle: "Through Anna Daan" },
    { number: "5,200", label: "Children Educated", subtitle: "With scholarships & supplies" },
    { number: "1,800+", label: "Elders Cared For", subtitle: "Medical & emotional support" },
    { number: "850+", label: "Active Volunteers", subtitle: "Across local communities" },
  ];

  return (
    <section id="impact" className="py-20 bg-secondary text-secondary-foreground relative">
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Our Ripple Effect</h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-lg">
            Every small act of kindness compounds. Thanks to our community's support, we've been able to scale our impact without losing our personal touch.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-secondary-foreground/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center pt-8 sm:pt-0 px-4">
              <div className="text-4xl lg:text-5xl font-bold font-serif text-accent mb-3">
                {stat.number}
              </div>
              <div className="text-xl font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-secondary-foreground/70">{stat.subtitle}</div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
