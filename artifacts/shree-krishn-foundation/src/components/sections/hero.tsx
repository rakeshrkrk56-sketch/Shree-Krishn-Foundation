import { Button } from '@/components/ui/button';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import heroBg from '@assets/generated_images/hero-bg.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 indian-motif-border hidden lg:block opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="flex flex-col items-start gap-6 lg:pr-8 animate-in slide-in-from-bottom-8 duration-700 fade-in fill-mode-both">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-secondary font-medium text-sm border border-accent/20">
              <HeartHandshake className="w-4 h-4" />
              <span>Serving Humanity with Dignity</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-serif leading-[1.1] text-foreground">
              Hope starts <br className="hidden lg:block" />
              with <span className="text-primary italic">community.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
              At Shree Krishn Foundation, we believe no one should face hardship alone. We provide warm meals, essential care, and unwavering support to our most vulnerable neighbors.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-[0_8px_30px_rgb(234,88,12,0.3)] transition-transform hover:-translate-y-1">
                <a href="#donate">Support Our Work</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 py-6 text-lg border-2 border-primary/20 hover:border-primary/50 text-foreground group transition-all hover:bg-transparent">
                <a href="#mission">
                  Our Mission 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-4 pt-8 border-t border-border w-full max-w-md">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground z-[${10-i}]`} style={{ zIndex: 10 - i }}>
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                <span className="text-foreground font-bold">10,000+</span> individuals helped this year
              </div>
            </div>
          </div>
          
          <div className="relative h-[50vh] lg:h-[75vh] w-full rounded-[2rem] overflow-hidden animate-in slide-in-from-right-12 duration-1000 fade-in fill-mode-both shadow-2xl">
            <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply z-10" />
            <img 
              src={heroBg} 
              alt="Volunteers serving the community" 
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Soft decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl z-0" />
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl z-0" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
