/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

interface MarqueeProps {
  texts: string[];
  direction?: "left" | "right";
  speed?: number;
}

export default function Marquee({ texts, direction = "left", speed = 25 }: MarqueeProps) {
  // Duplicamos o array para criar um loop infinito perfeito e sem cortes
  const items = [...texts, ...texts, ...texts, ...texts];

  return (
    <div className="relative w-full overflow-hidden bg-slate-950/40 py-4 border-y border-slate-850/50 backdrop-blur-sm">
      <motion.div
        className="flex whitespace-nowrap gap-12 text-xs md:text-sm font-extrabold tracking-widest text-slate-400"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {items.map((text, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="uppercase text-white">{text}</span>
            <span className="text-sky-500">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
