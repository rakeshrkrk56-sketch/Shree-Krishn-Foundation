import { Heart, ShieldCheck, Sun } from 'lucide-react';

export function MissionSection() {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Dignity Above All",
      description: "We don't just provide charity; we offer care wrapped in respect, ensuring every person feels seen and valued."
    },
    {
      icon: <Sun className="w-6 h-6 text-accent" />,
      title: "Hope in Action",
      description: "Through practical, sustained support, we turn compassion into tangible relief for families in crisis."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-secondary" />,
      title: "Rooted in Community",
      description: "Our strength comes from local volunteers and supporters who believe in the power of shared humanity."
    }
  ];

  return (
    <section id="mission" className="py-24 bg-card relative overflow-hidden">
      <div className="pattern-bg absolute inset-0 opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
              We serve not out of pity, but from a deep sense of <span className="text-primary italic">duty and love.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Shree Krishn Foundation was born from a simple but profound Indian ethos: <strong>Seva</strong> (selfless service). When we see suffering, we do not look away. We step forward.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether it's a warm meal for a daily wage worker, educational support for an underprivileged child, or medical care for abandoned elders, our mission is to build a safety net woven from community compassion.
            </p>
          </div>
          
          <div className="grid gap-8">
            {values.map((value, idx) => (
              <div 
                key={idx} 
                className="bg-background p-8 rounded-2xl border border-border shadow-sm flex gap-6 items-start hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 rounded-full bg-card shadow-sm flex items-center justify-center shrink-0 border border-border group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
