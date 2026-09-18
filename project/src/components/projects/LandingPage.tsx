import { Rocket, Zap, Shield, ArrowRight, Check } from 'lucide-react';

const features = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Optimized for speed at every level.' },
  { icon: Shield, title: 'Secure', desc: 'Built with security best practices.' },
  { icon: Rocket, title: 'Scalable', desc: 'Grows with your needs effortlessly.' },
];

const plans = [
  { name: 'Starter', price: 'Free', features: ['1 project', 'Basic support', 'Community access'] },
  { name: 'Pro', price: '$19', features: ['Unlimited projects', 'Priority support', 'Advanced analytics'], highlight: true },
  { name: 'Team', price: '$49', features: ['Everything in Pro', 'Team collaboration', 'Admin dashboard'] },
];

export default function LandingPage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="text-center py-8 rounded-2xl bg-gradient-to-br from-accent-500/10 to-cyan-500/10 border border-black/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-300 text-xs font-medium mb-4">
          <Rocket className="w-3 h-3" />
          New: v2.0 is here
        </div>
        <h1 className="font-display text-3xl font-bold text-ink-100 mb-3">
          Build faster.{' '}
          <span className="text-gradient">Ship smarter.</span>
        </h1>
        <p className="text-sm text-ink-400 max-w-md mx-auto mb-6">
          The all-in-one platform that helps teams create, deploy, and scale
          their products with ease.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-accent-500 to-cyan-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-accent-500/30 transition-all flex items-center gap-2">
            Get started <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-6 py-2.5 rounded-xl glass text-ink-200 font-medium text-sm hover:border-accent-500/40 transition-all">
            Learn more
          </button>
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="font-display font-semibold text-ink-100 mb-4 text-center">
          Why teams choose us
        </h3>
        <div className="grid sm:grid-cols-3 gap-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl bg-ink-800/60 border border-black/10 p-4 text-center hover:border-accent-500/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                <f.icon className="w-5 h-5 text-accent-400" />
              </div>
              <h4 className="font-medium text-ink-100 text-sm mb-1">{f.title}</h4>
              <p className="text-xs text-ink-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div>
        <h3 className="font-display font-semibold text-ink-100 mb-4 text-center">
          Simple pricing
        </h3>
        <div className="grid sm:grid-cols-3 gap-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-5 border transition-all ${
                plan.highlight
                  ? 'bg-gradient-to-br from-accent-500/10 to-cyan-500/10 border-accent-500/30'
                  : 'bg-ink-800/60 border-black/10'
              }`}
            >
              {plan.highlight && (
                <div className="text-xs text-accent-300 font-medium mb-2">
                  Most popular
                </div>
              )}
              <h4 className="font-medium text-ink-100 text-sm mb-1">
                {plan.name}
              </h4>
              <div className="font-display text-2xl font-bold text-ink-100 mb-3">
                {plan.price}
                {plan.price !== 'Free' && (
                  <span className="text-xs text-ink-400 font-normal">/mo</span>
                )}
              </div>
              <ul className="space-y-2">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2 text-xs text-ink-300"
                  >
                    <Check className="w-3.5 h-3.5 text-accent-400 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-6 rounded-2xl bg-ink-800/40 border border-black/10">
        <h3 className="font-display font-semibold text-ink-100 mb-2">
          Ready to get started?
        </h3>
        <p className="text-sm text-ink-400 mb-4">
          Join thousands of teams already building with us.
        </p>
        <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-accent-500 to-cyan-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-accent-500/30 transition-all">
          Start for free
        </button>
      </div>
    </div>
  );
}
