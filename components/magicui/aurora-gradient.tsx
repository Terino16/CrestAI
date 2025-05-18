import React from "react";

/**
 * AuroraGradient - A blurred, animated, rainbow gradient background for the bottom of the page.
 * Absolutely positioned, aria-hidden, and non-interactive.
 */
const AuroraGradient: React.FC = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none select-none fixed bottom-0 left-1/2 z-0 w-[120vw] h-[20vh] -translate-x-1/2 overflow-hidden"
    style={{ filter: "blur(48px)", opacity: 0.7 }}
  >
    <div
      className="w-full h-full animate-aurora-gradient bg-[conic-gradient(at_50%_80%,#ff6ec4_0deg,#7873f5_60deg,#42e695_120deg,#ff6ec4_180deg,#7873f5_240deg,#42e695_300deg,#ff6ec4_360deg)]"
      style={{
        clipPath: "ellipse(100% 60% at 50% 100%)",
      }}
    />
    <style jsx global>{`
      @keyframes aurora-gradient {
        0% {
          transform: translateY(0) scale(1) rotate(0deg);
        }
        50% {
          transform: translateY(-10px) scale(1.05) rotate(2deg);
        }
        100% {
          transform: translateY(0) scale(1) rotate(0deg);
        }
      }
      .animate-aurora-gradient {
        animation: aurora-gradient 16s ease-in-out infinite;
      }
    `}</style>
  </div>
);

export default AuroraGradient;
