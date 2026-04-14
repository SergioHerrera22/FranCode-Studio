import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({
  children,
  className = "",
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`
        relative p-5 sm:p-8 rounded-2xl
        bg-gradient-to-br from-white/5 to-white/[0.02]
        backdrop-blur-xl
        border border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        hover:shadow-[0_8px_32px_rgba(0,217,255,0.2)]
        transition-all duration-300
        group
        ${className}
      `}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00d9ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
