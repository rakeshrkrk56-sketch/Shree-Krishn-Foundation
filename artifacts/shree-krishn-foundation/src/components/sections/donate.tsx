import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy, Heart, ShieldCheck, X } from 'lucide-react';

export function DonateSection() {
  const [amount, setAmount] = useState<number | 'other'>(200);
  const [customAmount, setCustomAmount] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [copied, setCopied] = useState(false);
  const upiId = 'shreekrishnfounndation@ptaxis';
  const amounts = [200, 500, 1000, 2500, 'other'] as const;
  const payableAmount = amount === 'other' ? Number(customAmount) : amount;

  const openPayment = () => {
    if (payableAmount > 0) setShowPayment(true);
  };

  const copyUpiId = async () => {
    await navigator.clipboard.writeText(upiId);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

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
                  min="1"
                  value={customAmount}
                  onChange={(event) => setCustomAmount(event.target.value)}
                  placeholder="Enter amount" 
                  className="w-full pl-10 pr-4 py-4 rounded-2xl border-2 border-border focus:border-primary outline-none text-xl font-bold text-center"
                />
              </div>
            </div>
          )}

          <Button
            onClick={openPayment}
            disabled={!payableAmount || payableAmount < 1}
            className="w-full md:w-auto rounded-full px-12 py-6 text-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl transition-transform hover:-translate-y-1"
          >
            Donate Now
          </Button>

          <p className="text-sm text-muted-foreground mt-6">
            Manual UPI payment. You will be shown the exact amount and UPI ID before paying.
          </p>
        </div>
      </div>

      {showPayment && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/60 backdrop-blur-sm p-4 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="payment-title"
        >
          <div className="bg-background rounded-[2rem] w-full max-w-lg max-h-[92vh] overflow-y-auto shadow-2xl border border-border">
            <div className="sticky top-0 bg-background/95 backdrop-blur px-6 py-5 border-b border-border flex items-center justify-between z-10">
              <h3 className="font-serif font-bold text-2xl">Donate with UPI</h3>
              <button
                type="button"
                onClick={() => setShowPayment(false)}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors"
                aria-label="Close payment instructions"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-5 flex items-center justify-center">
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <h4 id="payment-title" className="font-serif font-bold text-3xl mb-3">
                Pay from your UPI app
              </h4>
              <p className="text-muted-foreground mb-7">
                Send the exact amount to the UPI ID below using PhonePe, Google Pay, Paytm, or any UPI app.
              </p>

              <div className="rounded-3xl border-2 border-border bg-card p-7 mb-5">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-bold mb-2">
                  Amount to pay
                </p>
                <p className="text-5xl font-bold text-foreground mb-6">
                  ₹{payableAmount.toLocaleString('en-IN')}.00
                </p>
                <div className="h-px bg-border mb-6" />
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold mb-2">
                  Pay to UPI ID
                </p>
                <p className="text-2xl font-bold text-foreground">{upiId}</p>
              </div>

              <Button
                onClick={copyUpiId}
                className="w-full rounded-2xl py-7 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              >
                {copied ? <Check className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
                {copied ? 'UPI ID Copied' : 'Copy UPI ID'}
              </Button>

              <div className="text-left rounded-3xl border border-border mt-6 p-6">
                <h5 className="font-bold uppercase tracking-wider text-sm mb-4">How to pay</h5>
                <ol className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3"><span className="w-7 h-7 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</span><span>Tap “Copy UPI ID” above.</span></li>
                  <li className="flex gap-3"><span className="w-7 h-7 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</span><span>Open your preferred UPI app and choose “Pay to UPI ID”.</span></li>
                  <li className="flex gap-3"><span className="w-7 h-7 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</span><span>Paste the UPI ID, enter ₹{payableAmount.toLocaleString('en-IN')}, and complete the payment.</span></li>
                </ol>
              </div>

              <p className="text-xs text-muted-foreground mt-5">
                Payments are completed directly in your UPI app. Please verify the recipient before confirming.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
