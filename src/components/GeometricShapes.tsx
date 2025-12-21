const GeometricShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating hexagon */}
      <div className="absolute top-20 right-[10%] w-32 h-32 animate-float opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 90,25 90,75 50,95 10,75 10,25"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            className="animate-pulse-glow"
          />
        </svg>
      </div>

      {/* Floating triangle */}
      <div className="absolute bottom-32 left-[5%] w-24 h-24 animate-float-slow opacity-15" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="hsl(var(--secondary))"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Spinning circle */}
      <div className="absolute top-1/3 left-[15%] w-40 h-40 animate-spin-slow opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            strokeDasharray="10 5"
          />
        </svg>
      </div>

      {/* Diamond shape */}
      <div className="absolute top-2/3 right-[20%] w-20 h-20 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 95,50 50,95 5,50"
            fill="none"
            stroke="hsl(var(--neon-teal))"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default GeometricShapes;
