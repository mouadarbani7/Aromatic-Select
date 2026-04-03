export function MistoriaLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Aura/Mist effect */}
      <circle cx="32" cy="32" r="28" className="fill-primary/5" />
      <circle cx="32" cy="32" r="24" className="stroke-primary/10" strokeWidth="1" strokeDasharray="4 4" />

      {/* Main M Letter with mist-like curves */}
      <g className="fill-primary">
        {/* Left stem */}
        <path d="M16 12 L20 12 L20 48 L16 48 Z" />

        {/* Right stem */}
        <path d="M44 12 L48 12 L48 48 L44 48 Z" />

        {/* Left peak */}
        <path d="M20 12 Q26 22 28 32 Q26 28 24 18 L28 12 Q32 20 32 28 Q30 16 28 12 Z" />

        {/* Right peak */}
        <path d="M44 12 Q38 22 36 32 Q38 28 40 18 L36 12 Q32 20 32 28 Q34 16 36 12 Z" />

        {/* Mist accents - curved lines */}
        <path d="M14 28 Q32 26 50 28" className="stroke-primary" strokeWidth="1.5" opacity="0.6" />
        <path d="M12 38 Q32 36 52 38" className="stroke-primary" strokeWidth="1.5" opacity="0.4" />
      </g>
    </svg>
  );
}

export function MistoriaTextLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Mistoria Text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="fill-foreground"
        fontSize="64"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="500"
        letterSpacing="4"
      >
        MISTORIA
      </text>

      {/* Gold accent line */}
      <line
        x1="10"
        y1="70"
        x2="290"
        y2="70"
        className="stroke-primary"
        strokeWidth="2"
      />

      {/* Tagline */}
      <text
        x="50%"
        y="75%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="fill-primary"
        fontSize="12"
        fontFamily="'Montserrat', sans-serif"
        letterSpacing="2"
      >
        LUXURY PERFUMES
      </text>
    </svg>
  );
}
