"use client";

import React, { useRef, useEffect } from "react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import {
  motion,
  useInView,
  useSpring,
  useTransform,
} from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Stats() {
  const items = [
    {
      value: 15,
      sub: "ans",
      desc: "à servir les foyers rennais",
      detail: "d’expérience terrain",
    },
    {
      value: 4.9,
      sub: "★",
      desc: "note Google sur 250 avis",
      detail: "taux de satisfaction",
    },
    {
      value: 30,
      sub: "min",
      desc: "temps d’arrivée moyen",
      detail: "en cas d’urgence",
    },
    {
      value: 2,
      sub: "ans",
      desc: "de garantie sur nos travaux",
      detail: "pièces & main-d’œuvre",
    },
  ];

  return (
    <section
      id="stats"
      className="mt-8 md:mt-12 relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl 
                 bg-slate-900 dark:bg-slate-950
                 px-6 sm:px-10 pt-12 pb-24"
    >
      <div
        className="absolute inset-0 z-0 opacity-40 dark:opacity-30 filter blur-2xl 
                   [background-image:radial-gradient(ellipse_farthest-corner_at_10%_15%,theme(colors.custom-blue-darker/50)_0%,transparent_70%),radial-gradient(ellipse_farthest-corner_at_85%_90%,theme(colors.indigo.700/40)_0%,transparent_65%),radial-gradient(ellipse_farthest-corner_at_50%_40%,theme(colors.blue.800/30)_0%,transparent_75%)]"
      />

      <div className="relative z-10">
        <SectionHeader
          as="h2"
          title="Notre impact en chiffres"
          subtitle="Transparence et fiabilité : quelques repères sur notre activité."
          id="impact-en-chiffres-titre"
          centerText={true}
          showAccentLine={true}
          titleClassName="text-3xl font-bold md:text-4xl text-indigo-100 dark:text-indigo-200"
          subtitleClassName="text-blue-300 dark:text-indigo-300"
        />

        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {items.map((item) => (
            <MovingBorderButton
              key={item.desc}
              as="div"
              duration={Math.floor(Math.random() * 2000) + 3500}
              borderRadius="0.75rem"
              containerClassName="w-full h-[190px] md:h-[210px]"
              className="bg-slate-700/25 dark:bg-slate-800/25 backdrop-blur-lg 
                         border border-slate-600/30 dark:border-slate-700/30 
                         p-5 shadow-xl 
                         transition-all duration-300 
                         flex flex-col justify-center items-center text-center group h-full"
            >
              <p className="flex items-baseline gap-1 text-4xl md:text-5xl font-extrabold tracking-tight text-indigo-200 dark:text-indigo-100">
                <AnimatedNumber value={item.value} />
                <span className="text-xl font-bold text-indigo-200 dark:text-indigo-100">
                  {item.sub}
                </span>
              </p>
              <p className="mt-2.5 text-sm font-medium text-slate-200 dark:text-slate-300">
                {item.desc}
              </p>
              <p className="mt-1 text-xs text-slate-300/80 dark:text-slate-400/70">
                {item.detail}
              </p>
            </MovingBorderButton>
          ))}
        </div>
        <p className="mx-auto mt-16 max-w-3xl text-center text-base leading-relaxed text-slate-200 dark:text-slate-300 md:text-lg">
          Ces indicateurs ne sont pas que des records&nbsp;: ils illustrent notre
          <span className="font-semibold text-indigo-200 dark:text-indigo-100"> réactivité</span>,
          notre <span className="font-semibold text-indigo-200 dark:text-indigo-100"> excellence technique </span>
          et notre volonté de protéger vos installations dans la durée.
          Chaque intervention s’accompagne d’un diagnostic précis, de pièces d’origine
          garanties et d’un contrôle qualité post-chantier.
        </p>
      </div>
    </section>
  );
}

function AnimatedNumber({
  value,
  initial = 0,
}: {
  value: number;
  initial?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const spring = useSpring(initial, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });

  const display = useTransform(spring, (currentValue) => {
    const hasDecimal = value % 1 !== 0;
    return Number(currentValue).toLocaleString("fr-FR", {
      minimumFractionDigits: hasDecimal ? 1 : 0,
      maximumFractionDigits: hasDecimal ? 1 : 0,
    });
  });

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  return (
    <motion.span ref={ref} aria-live="polite">
      {display}
    </motion.span>
  );
}