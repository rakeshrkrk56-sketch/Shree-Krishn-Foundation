import { Button } from '@/components/ui/button';
import volunteersImg from '@assets/generated_images/volunteers.jpg';

export function GetInvolvedSection() {
  return (
    <section id="get-involved" className="py-24 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-secondary rounded-[3rem] overflow-hidden flex flex-col lg:flex-row relative">
          
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10 text-secondary-foreground">
            <span className="uppercase tracking-widest text-sm font-bold opacity-80 mb-4 block">Volunteer With Us</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Your time is the greatest gift.
            </h2>
            <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-md">
              We are always looking for passionate individuals to join our on-ground efforts. Whether you can spare an hour a week or a day a month, there is a place for you in our family.
            </p>
            
            <form className="space-y-4 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <Button type="button" className="w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-lg font-bold mt-2">
                Join the Team
              </Button>
            </form>
          </div>
          
          <div className="lg:w-1/2 relative min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent lg:w-32 z-10 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent lg:h-32 z-10 lg:hidden" />
            <img 
              src={volunteersImg} 
              alt="Volunteers working together"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
