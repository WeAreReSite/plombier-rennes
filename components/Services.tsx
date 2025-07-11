// components/Services.tsx
"use client";

import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Droplet,
  Flame,
  ShieldCheck,
  Wrench,
  ShowerHead,
  Undo2,
  ArrowRight,
  type LucideProps,
} from "lucide-react";
import React from "react";

interface Service {
  icon: React.ReactElement<LucideProps>;
  title: string;
  description: string;
}

const NoiseOverlay = () => {
  return (
    <div
      className="absolute inset-0 h-full w-full scale-[1.2] transform opacity-[0.05] [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "/noise.webp",
        backgroundSize: "20%",
      }}
      aria-hidden="true"
    ></div>
  );
};

const SectionBackgroundPattern = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <NoiseOverlay />
      
      {/* Tile pattern - subtle gray with better contrast */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              #fafafa 0px,
              #fafafa 80px,
              #e5e7eb 80px,
              #e5e7eb 81px
            )
          `,
        }}
      />
      
      {/* Dark mode tiles */}
      <div 
        className="absolute inset-0 dark:block hidden"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              #0f172a 0px,
              #0f172a 80px,
              #1e293b 80px,
              #1e293b 81px
            )
          `,
        }}
      />
      
      {/* Very subtle blue tint in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-blue-50/20 to-transparent dark:from-blue-950/10 dark:to-transparent" />
      
      {/* Subtle shadow effect for tiles */}
      <div 
        className="absolute inset-0 mix-blend-multiply dark:mix-blend-screen opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 79px,
              rgba(0,0,0,0.2) 79px,
              rgba(0,0,0,0.2) 81px
            )
          `,
        }}
      />
      
      {/* Top transition - fade from white to tiles */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/95 to-transparent dark:from-slate-900 dark:via-slate-900/95 dark:to-transparent" />
      
      {/* Bottom transition - fade from tiles to white */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent dark:from-slate-900 dark:via-slate-900/95 dark:to-transparent" />
      
      {/* Wave-like top transition overlay */}
      <div 
        className="absolute inset-x-0 -top-1 h-20"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 100%, transparent 0%, white 70%),
            radial-gradient(ellipse 60% 40% at 20% 100%, transparent 0%, white 65%),
            radial-gradient(ellipse 60% 40% at 80% 100%, transparent 0%, white 65%)
          `,
        }}
      />
      
      {/* Wave-like bottom transition overlay */}
      <div 
        className="absolute inset-x-0 -bottom-1 h-20"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, transparent 0%, white 70%),
            radial-gradient(ellipse 60% 40% at 30% 0%, transparent 0%, white 65%),
            radial-gradient(ellipse 60% 40% at 70% 0%, transparent 0%, white 65%)
          `,
        }}
      />
    </div>
  );
};

export function ServicesSection() {
  const services: Service[] = [
    {
      icon: <Droplet />,
      title: "Recherche de fuites",
      description: "Solutions avancées avec inspection caméra, gaz traceur et traçage acoustique pour une détection précise.",
    },
    {
      icon: <Flame />,
      title: "Installation & Réparation Chauffe-eau",
      description: "Pose, entretien complet et détartrage de chauffe-eau toutes marques, optimisant performance et longévité.",
    },
    {
      icon: <ShowerHead />,
      title: "Salle de bain Clés en Main",
      description: "Conception et réalisation complète de votre salle de bain, de la plomberie initiale au carrelage final.",
    },
    {
      icon: <Wrench />,
      title: "Dégorgement de Canalisation",
      description: "Intervention rapide par hydrocurage haute pression, une méthode écologique sans produits chimiques.",
    },
    {
      icon: <ShieldCheck />,
      title: "Entretien Préventif Plomberie",
      description: "Contrats d'entretien annuels personnalisés pour prévenir les pannes et assurer la pérennité de vos installations.",
    },
    {
      icon: <Undo2 />,
      title: "Rénovation de Réseau de Plomberie",
      description: "Modernisation et reprise complète des colonnes d'eau et systèmes d'évacuation pour habitations et collectifs.",
    },
  ];

  return (
    <section
      id="services"
      className="mt-8 md:mt-12 w-full py-16 md:py-24 relative overflow-hidden transition-colors duration-300"
      aria-labelledby="services-heading"
    >
      <SectionBackgroundPattern />
      <div className="relative z-10">
        <SectionHeader
          as="h2"
          title="Nos Prestations de Plomberie"
          subtitle="Solutions expertes pour vos installations, réparations et projets de rénovation à Rennes."
          centerText={true}
          showAccentLine={true}
          titleClassName="text-neutral-900 dark:text-neutral-50"
          subtitleClassName="text-neutral-700 dark:text-neutral-300"
          id="services-heading"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ icon, title, description }: Service) => {
  return (
    <article
      className={cn(
        "group/service flex flex-col h-full",
        "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm",
        "p-6 sm:p-8 rounded-xl shadow-lg border border-transparent",
        "transition-all duration-300 ease-in-out",
        "hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20",
        "hover:-translate-y-2",
        "hover:border-blue-300/70 dark:hover:border-blue-700/70",
        "focus-within:shadow-xl focus-within:shadow-blue-500/20 dark:focus-within:shadow-blue-400/20",
        "focus-within:-translate-y-2",
        "focus-within:border-blue-300/70 dark:focus-within:border-blue-700/70",
        "focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 dark:focus-within:ring-blue-400 focus-within:ring-offset-2"
      )}
      role="listitem"
      tabIndex={0}
      aria-label={`Service: ${title}`}
    >
      <div className="mb-6 w-14 h-14 flex items-center justify-center bg-blue-100 dark:bg-blue-600/25 rounded-lg group-hover/service:bg-blue-200/70 dark:group-hover/service:bg-blue-600/40 group-focus-within/service:bg-blue-200/70 dark:group-focus-within/service:bg-blue-600/40 transition-colors duration-300">
        {React.cloneElement(icon, {
          size: 30,
          className: cn(
            icon.props.className,
            "text-blue-600 dark:text-blue-400 group-hover/service:text-blue-700 dark:group-hover/service:text-blue-300 group-focus-within/service:text-blue-700 dark:group-focus-within/service:text-blue-300 transition-colors duration-300"
          ),
          "aria-hidden": "true"
        })}
      </div>

      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3 transition-colors duration-300 group-hover/service:text-blue-600 dark:group-hover/service:text-blue-400 group-focus-within/service:text-blue-600 dark:group-focus-within/service:text-blue-400">
        {title}
      </h3>

      <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed flex-grow mb-6">
        {description}
      </p>

      <div className="mt-auto" aria-hidden="true">
        <ArrowRight
          size={24}
          className="text-transparent group-hover/service:text-blue-500 dark:group-hover/service:text-blue-400 group-focus-within/service:text-blue-500 dark:group-focus-within/service:text-blue-400 transition-all duration-300 transform group-hover/service:translate-x-1 group-focus-within/service:translate-x-1 opacity-0 group-hover/service:opacity-100 group-focus-within/service:opacity-100"
          aria-hidden="true"
        />
      </div>
    </article>
  );
};