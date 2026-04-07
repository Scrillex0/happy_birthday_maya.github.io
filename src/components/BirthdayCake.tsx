import { useEffect, useState } from "react";

const candleColors = [
  'hsl(230 55% 65%)', 'hsl(200 55% 65%)', 'hsl(340 55% 70%)',
  'hsl(30 70% 60%)', 'hsl(160 45% 60%)', 'hsl(280 45% 70%)', 'hsl(200 60% 65%)',
];

const Candle = ({ delay, x, color }: { delay: number; x: number; color: string }) => (
  <div className="absolute flex flex-col items-center" style={{ left: `${x}%`, bottom: '100%', transform: 'translateX(-50%)' }}>
    {/* Glow */}
    <div
      className="absolute -top-2 w-8 h-8 rounded-full"
      style={{
        background: 'hsl(45 100% 75%)',
        filter: 'blur(10px)',
        animation: `pulse-glow 1.5s ease-in-out infinite ${delay}s`,
      }}
    />
    {/* Flame outer */}
    <div
      className="w-3 h-6 rounded-full relative"
      style={{
        background: 'radial-gradient(ellipse at 50% 80%, hsl(45 100% 85%), hsl(35 95% 55%) 50%, hsl(15 85% 45%))',
        animation: `flicker 0.7s ease-in-out infinite ${delay * 0.4}s`,
        transformOrigin: 'bottom center',
      }}
    />
    {/* Wick */}
    <div className="w-0.5 h-1.5 bg-foreground/50 rounded-full" />
    {/* Candle body */}
    <div
      className="w-3 h-12 rounded-t-sm rounded-b-none"
      style={{ background: color }}
    />
  </div>
);

const Confetti = ({ delay, x, color }: { delay: number; x: number; color: string }) => (
  <div
    className="absolute w-2.5 h-2.5 rounded-sm"
    style={{
      left: `${x}%`,
      bottom: '-5%',
      background: color,
      animation: `float-up ${3 + Math.random() * 3}s linear infinite ${delay}s`,
      opacity: 0.8,
    }}
  />
);

const Sparkle = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <div
    className="absolute text-lg"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      animation: `sparkle 2s ease-in-out infinite ${delay}s`,
    }}
  >
    ✦
  </div>
);

export const BirthdayCake = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  const confettiColors = [
    'hsl(340 70% 55%)', 'hsl(45 85% 55%)', 'hsl(200 60% 70%)',
    'hsl(280 50% 65%)', 'hsl(120 50% 60%)', 'hsl(15 80% 60%)',
  ];

  return (
    <div className="relative flex flex-col items-center">
      {/* Sparkles */}
      {[...Array(8)].map((_, i) => (
        <Sparkle
          key={i}
          x={10 + Math.random() * 80}
          y={5 + Math.random() * 30}
          delay={i * 0.4}
        />
      ))}

      {/* Confetti */}
      {[...Array(20)].map((_, i) => (
        <Confetti
          key={i}
          delay={i * 0.5}
          x={5 + (i * 4.5)}
          color={confettiColors[i % confettiColors.length]}
        />
      ))}

      {/* Cake */}
      <div
        className={`relative transition-all ${visible ? 'animate-bounce-in' : 'opacity-0 scale-0'}`}
      >
        {/* Candles */}
        <div className="relative w-40 sm:w-48 mx-auto h-0">
          {[12, 25, 38, 50, 62, 75, 88].map((x, i) => (
            <Candle key={i} x={x} delay={i * 0.12} color={candleColors[i]} />
          ))}
        </div>

        {/* Top tier */}
        <div className="w-40 sm:w-48 mx-auto h-12 rounded-t-xl relative overflow-hidden"
          style={{ background: 'var(--gradient-cake)' }}>
          {/* Frosting drip */}
          <div className="absolute top-0 left-0 right-0 h-4 rounded-t-xl"
            style={{ background: 'var(--gradient-frosting)' }} />
          {[20, 40, 60, 80].map((l, i) => (
            <div key={i} className="absolute rounded-b-full"
              style={{
                left: `${l}%`, top: '12px',
                width: '10px', height: `${8 + (i % 3) * 4}px`,
                background: 'hsl(0 0% 97%)',
              }}
            />
          ))}
        </div>

        {/* Middle tier */}
        <div className="w-52 sm:w-64 mx-auto h-14 relative overflow-hidden"
          style={{ background: 'var(--gradient-cake)' }}>
          <div className="absolute top-0 left-0 right-0 h-3"
            style={{ background: 'var(--gradient-frosting)' }} />
          {/* Decorations */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-around px-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full"
                style={{ background: `hsl(${i * 60} 70% 65%)` }} />
            ))}
          </div>
        </div>

        {/* Bottom tier */}
        <div className="w-56 sm:w-72 mx-auto h-16 rounded-b-xl relative overflow-hidden"
          style={{ background: 'var(--gradient-cake-dark)' }}>
          <div className="absolute top-0 left-0 right-0 h-3"
            style={{ background: 'var(--gradient-frosting)' }} />
          {/* Wave decoration */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-around px-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full border-2"
                style={{ borderColor: 'hsl(45 85% 55%)', background: 'transparent' }} />
            ))}
          </div>
        </div>

        {/* Plate */}
        <div className="w-64 sm:w-80 mx-auto h-4 rounded-b-[50%] bg-muted/60" />
      </div>

      {/* Message */}
      <div
        className={`mt-8 text-center ${visible ? 'animate-text-appear' : 'opacity-0'}`}
        style={{ animationDelay: '1s', animationFillMode: 'both' }}
      >
        <h1 className="font-display text-3xl sm:text-5xl text-primary leading-tight">
          С днём рождения, Майя!
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-muted-foreground font-semibold">
          Мы все тебя любим! 💖
        </p>
      </div>
    </div>
  );
};
