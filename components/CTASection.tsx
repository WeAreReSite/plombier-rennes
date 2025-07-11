// components/CTASection.tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { manrope } from "@/lib/fonts";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

const YOUR_PHONE_NUMBER = "06 12 34 56 78";
const QUOTE_PAGE_LINK = "/contact#formulaire-devis";

export function CTASection() {
  const agencyName = "AquaNova Services";

  return (
    <section id="appel-action" className="bg-blue-700 dark:bg-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 dark:from-blue-800 dark:via-blue-700 dark:to-blue-900 opacity-50 mix-blend-multiply"></div>
      <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 lg:py-32 text-center">
        <h2
          className={cn(
            "text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl",
            manrope.className,
            "text-shadow-sm"
          )}
        >
          Prêt à concrétiser votre projet de plomberie à Rennes ?
        </h2>
        <p
          className={cn(
            "mt-8 text-lg leading-relaxed text-blue-50 dark:text-blue-100 max-w-3xl mx-auto sm:text-xl",
            manrope.className
          )}
        >
          {`Que ce soit pour une urgence, une installation neuve, un entretien préventif ou une rénovation complète, ${agencyName} vous offre des solutions sur-mesure, rapides et fiables. N'attendez plus, contactez nos experts !`}
        </p>
        <div className="mt-12 flex flex-col items-center gap-y-6 sm:flex-row sm:gap-x-8 sm:justify-center">
          <Link
            href={QUOTE_PAGE_LINK}
            className={cn(
              "inline-flex items-center justify-center px-10 py-4 text-lg md:text-xl font-bold rounded-lg shadow-xl hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 ease-in-out",
              "bg-white text-blue-700 hover:bg-blue-50",
              manrope.className,
              "w-full sm:w-auto transform hover:scale-105 hover:-translate-y-0.5"
            )}
          >
            Obtenir mon Devis Gratuit
            <ArrowRight size={20} className="ml-2 -mr-1" />
          </Link>
          <button
            onClick={() => window.location.href = `tel:${YOUR_PHONE_NUMBER.replace(/\s/g, "")}`}
            className={cn(
              "inline-flex items-center justify-center px-10 py-4 text-lg md:text-xl font-semibold rounded-lg shadow-xl hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 ease-in-out",
              "border-2 border-blue-100 text-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-blue-200 dark:text-blue-100 dark:hover:bg-blue-200 dark:hover:text-blue-700",
              manrope.className,
              "w-full sm:w-auto transform hover:scale-105 hover:-translate-y-0.5"
            )}
          >
            <Phone size={20} className="mr-2" />
            Appelez-nous : {YOUR_PHONE_NUMBER}
          </button>
        </div>
        <p className={cn("mt-8 text-sm text-blue-200 dark:text-blue-300", manrope.className)}>
          Intervention rapide garantie – Devis gratuit et sans engagement.
        </p>
      </div>
    </section>
  );
}