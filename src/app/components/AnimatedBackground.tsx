export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]" />

      {/* Animated gradient orbs */}
      <div
        className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#00d9ff]/20 rounded-full blur-[100px] sm:blur-[120px] animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#ff6b35]/20 rounded-full blur-[100px] sm:blur-[120px] animate-pulse"
        style={{ animationDuration: "10s", animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[600px] sm:h-[600px] bg-[#8b5cf6]/10 rounded-full blur-[120px] sm:blur-[150px] animate-pulse"
        style={{ animationDuration: "12s", animationDelay: "4s" }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0, 217, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
