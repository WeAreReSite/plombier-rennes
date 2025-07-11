// components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { manrope } from "@/lib/fonts";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const YourLogo = () => (
  <Link 
    href="/" 
    className="inline-block focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
    aria-label={`Accueil ${siteConfig.name}`}
  >
    <span className="text-2xl font-bold text-white transition-colors hover:text-blue-300">
      AquaNova<span className="text-blue-400">Services</span>
    </span>
  </Link>
);

const footerConfig = {
  agencyName: siteConfig.name,
  description: "Votre expert plombier à Rennes et ses environs. Interventions rapides, devis gratuits et travail de qualité.",
  address: `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}, ${siteConfig.address.country}`,
  phone: siteConfig.phoneDisplay,
  phoneHref: siteConfig.phone.replace(/\s/g, ''),
  email: siteConfig.email,
  year: new Date().getFullYear(),
  quickLinks: [
    { name: "Accueil", href: "/" },
    { name: "Nos Services", href: "/#services" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Demander un Devis", href: "/contact#formulaire-devis" },
    { name: "Contactez-nous", href: "/contact" },
  ],
  legalLinks: [
    { name: "Mentions Légales", href: "/mentions-legales" },
    { name: "Politique de Confidentialité", href: "/politique-de-confidentialite" },
  ],
  socialMedia: [
    { name: "Facebook", href: siteConfig.socials.facebook, Icon: Facebook, ariaLabel: `Suivez ${siteConfig.name} sur Facebook` },
    { name: "Instagram", href: siteConfig.socials.instagram, Icon: Instagram, ariaLabel: `Suivez ${siteConfig.name} sur Instagram` },
    { name: "LinkedIn", href: siteConfig.socials.linkedin, Icon: Linkedin, ariaLabel: `Suivez ${siteConfig.name} sur LinkedIn` },
  ],
};

export function Footer() {
  return (
    <footer className={cn(
      "bg-neutral-900 dark:bg-black text-neutral-300 border-t-4 border-blue-600 dark:border-blue-700",
      manrope.className
    )}>
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-12 lg:col-span-4">
            <YourLogo />
            <p className="mt-6 text-sm leading-relaxed text-neutral-400 dark:text-neutral-300">
              {footerConfig.description}
            </p>
            <address className="mt-8 space-y-4 not-italic">
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 mt-0.5 flex-shrink-0 text-blue-400 dark:text-blue-500" aria-hidden="true" />
                <span className="text-sm text-neutral-200 dark:text-neutral-100">{footerConfig.address}</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0 text-blue-400 dark:text-blue-500" aria-hidden="true" />
                <a 
                  href={`tel:${footerConfig.phoneHref}`} 
                  className="text-sm text-neutral-200 dark:text-neutral-100 hover:text-blue-300 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
                  aria-label={`Appelez-nous au ${footerConfig.phone}`}
                >
                  {footerConfig.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0 text-blue-400 dark:text-blue-500" aria-hidden="true" />
                <a 
                  href={`mailto:${footerConfig.email}`} 
                  className="text-sm text-neutral-200 dark:text-neutral-100 hover:text-blue-300 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
                  aria-label={`Envoyez-nous un email à ${footerConfig.email}`}
                >
                  {footerConfig.email}
                </a>
              </div>
            </address>
          </div>

          <nav className="md:col-span-4 lg:col-span-2 lg:col-start-6" aria-labelledby="footer-navigation-heading">
            <h2 id="footer-navigation-heading" className="text-base font-semibold uppercase tracking-wider text-white dark:text-neutral-50 mb-1">
              Navigation
            </h2>
            <div className="w-10 h-0.5 bg-blue-500 dark:bg-blue-600 mb-4" aria-hidden="true"></div>
            <ul role="list" className="mt-4 space-y-3.5">
              {footerConfig.quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-neutral-300 hover:text-blue-300 dark:text-neutral-200 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded px-1 -mx-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-4 lg:col-span-2" aria-labelledby="footer-legal-heading">
            <h2 id="footer-legal-heading" className="text-base font-semibold uppercase tracking-wider text-white dark:text-neutral-50 mb-1">
              Légal
            </h2>
            <div className="w-10 h-0.5 bg-blue-500 dark:bg-blue-600 mb-4" aria-hidden="true"></div>
            <ul role="list" className="mt-4 space-y-3.5">
              {footerConfig.legalLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-neutral-300 hover:text-blue-300 dark:text-neutral-200 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded px-1 -mx-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {footerConfig.socialMedia.length > 0 && (
            <div className="md:col-span-4 lg:col-span-2">
              <h2 className="text-base font-semibold uppercase tracking-wider text-white dark:text-neutral-50 mb-1">
                Suivez-nous
              </h2>
              <div className="w-10 h-0.5 bg-blue-500 dark:bg-blue-600 mb-4" aria-hidden="true"></div>
              <div className="mt-5 flex space-x-8" role="list">
                {footerConfig.socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-blue-300 dark:text-neutral-300 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded p-1 -m-1"
                    aria-label={social.ariaLabel}
                    role="listitem"
                  >
                    <social.Icon size={24} aria-hidden="true" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 border-t border-neutral-700/70 dark:border-neutral-800/70 pt-10 text-center md:flex md:justify-between md:items-center" role="contentinfo">
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            <span aria-label="Copyright">©</span> {footerConfig.year} {footerConfig.agencyName}. Tous droits réservés.
          </p>
        </div>
      </div>
      
      {/* Large gradient text at the bottom */}
      <div className="relative overflow-hidden pb-8">
        <p className="text-center text-5xl md:text-7xl lg:text-[10rem] xl:text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 dark:from-neutral-800 dark:via-neutral-900 dark:to-black select-none pointer-events-none">
          AquaNova
        </p>
      </div>
    </footer>
  );
}