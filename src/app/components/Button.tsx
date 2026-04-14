import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#00d9ff] to-[#00a8cc] text-[#0a0a0f] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] hover:scale-105",
    secondary:
      "bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-white hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] hover:scale-105",
    outline:
      "border-2 border-[#00d9ff] text-[#00d9ff] hover:bg-[#00d9ff]/10 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]",
  };

  const Component = motion.a;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
}
