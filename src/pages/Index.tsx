import { BirthdayCake } from "@/components/BirthdayCake";

const Index = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center overflow-hidden relative"
      style={{ background: 'var(--gradient-bg)' }}
    >
      {/* Subtle background circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/5" />
        <div className="absolute top-1/4 -right-16 w-56 h-56 rounded-full bg-accent/10" />
        <div className="absolute -bottom-10 left-1/3 w-48 h-48 rounded-full bg-secondary/8" />
      </div>

      <div className="relative z-10 px-4 pt-16">
        <BirthdayCake />
      </div>
    </div>
  );
};

export default Index;
