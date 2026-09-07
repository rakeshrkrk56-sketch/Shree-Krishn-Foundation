import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export function DonateSection() {
  const [amount, setAmount] = useState<number | 'other'>(1000);
  
  const amounts = [500, 1000, 2500, 5000, 'other'] as const;

  return (
    <section id="donate" className="py-24 bg-card relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
          Support Our Mission
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Your contribution directly funds meals, medical care, and education for those in need. Even the smallest donation creates a ripple of hope.
        </p>

        <div className="bg-background rounded-3xl p-8 border border-border shadow-lg max-w-3xl mx-auto">
          <div className="flex justify-center gap-4 mb-8 border-b border-border pb-8">
            <Button variant="outline" className="rounded-full px-8 bg-primary/10 text-primary border-primary hover:bg-primary hover:text-primary-foreground">One Time</Button>
            <Button variant="ghost" className="rounded-full px-8 text-muted-foreground hover:text-foreground">Monthly</Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {amounts.map((val) => (
              <button
                key={val}
                onClick={() => setAmount(val)}
                className={`py-4 rounded-2xl border-2 font-bold text-lg transition-all ${
                  amount === val 
                    ? 'border-primary bg-primary/5 text-primary' 
                    : 'border-border bg-transparent text-muted-foreground hover:border-primary/30'
                }`}
              >
                {val === 'other' ? 'Other' : `₹${val}`}
              </button>
            ))}
          </div>

          {amount === 'other' && (
            <div className="mb-8 max-w-xs mx-auto">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold text-xl">₹</span>
                <input 
                  type="number" 
                  placeholder="Enter amount" 
                  className="w-full pl-10 pr-4 py-4 rounded-2xl border-2 border-border focus:border-primary outline-none text-xl font-bold text-center"
                />
              </div>
            </div>
          )}

          <Button className="w-full md:w-auto rounded-full px-12 py-6 text-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl transition-transform hover:-translate-y-1">
            Donate Now
          </Button>

          <p className="text-sm text-muted-foreground mt-6">
            Secure processing. All donations go directly to our active community initiatives.
          </p>
        </div>
      </div>
    </section>
  );
}
