import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import foodImg from '@assets/generated_images/food-initiative.jpg';
import eduImg from '@assets/generated_images/education.jpg';
import careImg from '@assets/generated_images/elderly-care.jpg';

export function InitiativesSection() {
  const initiatives = [
    {
      id: "food",
      title: "Anna Daan (Food Distribution)",
      description: "We serve freshly cooked, nutritious meals daily to daily-wage laborers, the homeless, and impoverished families. We believe that a full stomach is the first step toward a hopeful day.",
      image: foodImg,
      color: "bg-orange-50 dark:bg-orange-950/20",
      accent: "text-orange-600"
    },
    {
      id: "education",
      title: "Vidya Jyoti (Education Support)",
      description: "Breaking the cycle of poverty starts in the classroom. We provide school supplies, after-school tutoring, and scholarships to children who would otherwise drop out to work.",
      image: eduImg,
      color: "bg-blue-50 dark:bg-blue-950/20",
      accent: "text-blue-600"
    },
    {
      id: "care",
      title: "Vridh Seva (Elderly Care)",
      description: "For the elders abandoned by society, we offer a family. From medical camps and essential medicines to emotional companionship, we ensure their golden years are spent with dignity.",
      image: careImg,
      color: "bg-rose-50 dark:bg-rose-950/20",
      accent: "text-rose-600"
    }
  ];

  return (
    <section id="initiatives" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Our Core <span className="text-primary italic">Initiatives</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We focus on holistic, grassroots interventions where they are needed most. Each initiative is run by dedicated volunteers and sustained by local contributions.
            </p>
          </div>
          <Button variant="outline" className="rounded-full w-fit group">
            View All Programs 
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {initiatives.map((init, idx) => (
            <div key={idx} className="group rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={init.image} 
                  alt={init.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className={`p-8 flex-1 flex flex-col ${init.color}`}>
                <h3 className="text-2xl font-bold font-serif text-foreground mb-4">{init.title}</h3>
                <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">{init.description}</p>
                <div className="mt-auto">
                  <a href="#donate" className={`inline-flex items-center font-bold ${init.accent} hover:underline`}>
                    Support this cause <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
