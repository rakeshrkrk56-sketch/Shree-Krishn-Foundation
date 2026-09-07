import { Quote } from 'lucide-react';

export function StorySection() {
  return (
    <section id="stories" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/5 rounded-[3rem] p-8 md:p-16 lg:p-24 border border-primary/10 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 p-8 text-primary/10 rotate-12">
            <Quote className="w-48 h-48" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-8">
                Voices of the <span className="text-primary italic">Community</span>
              </h2>
              <div className="space-y-6 text-xl lg:text-2xl text-foreground font-serif leading-relaxed italic">
                <p>
                  "When my husband fell ill, I didn't know how I would feed my three children. The foundation didn't just give us rations; they sat with us, spoke to my children, and helped them stay in school."
                </p>
                <p>
                  "It wasn't just the food. It was the dignity. They treated us like family."
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-primary/20">
                <div className="font-bold text-lg text-foreground">Sunita Devi</div>
                <div className="text-muted-foreground">Beneficiary & Now Volunteer</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-background rounded-3xl p-6 shadow-sm border border-border">
                  <div className="font-bold text-secondary mb-2">Community Trust</div>
                  <p className="text-sm text-muted-foreground">Built over years of showing up exactly when we say we will.</p>
                </div>
                <div className="bg-primary text-primary-foreground rounded-3xl p-6 shadow-md">
                  <div className="font-bold mb-2 text-lg">100% Volunteer Led</div>
                  <p className="text-sm opacity-90">Every initiative is driven by local people helping local people.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-secondary text-secondary-foreground rounded-3xl p-6 shadow-md">
                  <div className="font-bold mb-2 text-lg">Zero Discrimination</div>
                  <p className="text-sm opacity-90">Help is given based on need, never on caste, creed, or religion.</p>
                </div>
                <div className="bg-background rounded-3xl p-6 shadow-sm border border-border">
                  <div className="font-bold text-accent-foreground mb-2">Sustainable Impact</div>
                  <p className="text-sm text-muted-foreground">Moving beyond immediate relief to long-term empowerment.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
