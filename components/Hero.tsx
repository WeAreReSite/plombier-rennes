// components/Hero.tsx
"use client";
import Head from "next/head";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { manrope } from "@/lib/fonts";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";

const newHighlightColorHex = "#1d4ed880";

export function HeroSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const agencyName = siteConfig.name;
    const siteUrl = typeof window !== 'undefined' ? window.location.origin : siteConfig.url;

    const localBusinessSchema = {
        "@context": "[https://schema.org](https://schema.org)",
        "@type": "Plumber",
        "name": agencyName,
        "image": `${siteUrl}/robinet.png`,
        "description": `${siteConfig.description}. Fuites, installations, dépannage urgent ? ${agencyName} met à votre service son expertise et des technologies modernes pour garantir votre confort et la pérennité de vos installations à Rennes et ses environs.`,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": siteConfig.address.street,
            "addressLocality": siteConfig.address.city,
            "addressRegion": "Brittany",
            "postalCode": siteConfig.address.postalCode,
            "addressCountry": "FR"
        },
        "telephone": siteConfig.phone,
        "url": siteUrl,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "48.117266",
          "longitude": "-1.6777926"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "19:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "priceRange": "$$"
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                    key="local-business-schema"
                />
                <title>{`${agencyName} - Plomberie à Rennes | Devis Gratuit`}</title>
                <meta name="description" content={`Services de plomberie professionnels à Rennes. ${agencyName} offre dépannage urgent, installations et réparations. Contactez-nous pour un devis gratuit.`} />
                <meta name="keywords" content={`plombier Rennes, plomberie Rennes, urgence plombier Rennes, ${agencyName}, dépannage plomberie Rennes, installation plomberie Rennes`} />
                <meta property="og:title" content={`${agencyName} - Votre expert plomberie à Rennes`} />
                <meta property="og:description" content="Solutions de plomberie fiables et rapides à Rennes et ses environs. Fuites, installations, dépannage." />
                <meta property="og:image" content={`${siteUrl}/robinet.png`} />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:type" content="website" />
                <link rel="canonical" href={siteUrl} />
            </Head>

            <section
                id="hero"
                ref={ref}
                className="bg-slate-100 dark:bg-slate-900 grid min-h-screen lg:grid-cols-5 items-stretch"
                aria-label="Section d'accueil"
            >
                <div className="order-2 lg:order-1 lg:col-span-3 relative flex flex-col justify-center">
                    <WavyBackground 
                        className="absolute inset-0"
                        containerClassName="absolute inset-0"
                        colors={["#1D4ED8", "#2563EB", "#3B82F6", "#60A5FA", "#93BBFC"]}
                        waveOpacity={0.4}
                        backgroundFill="transparent"
                        blur={0}
                        speed="slow"
                    />
                    <div className="relative z-10 py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:pl-32 lg:pr-8">
                        <div className="max-w-2xl mx-auto lg:mx-0 w-full">
                        {/* Screen reader announcement */}
                        <span className="sr-only">
                            Bienvenue sur le site de {agencyName}, votre expert plombier à Rennes. Nous proposons des services de dépannage urgent, installations et réparations.
                        </span>
                        <RoughNotationGroup show={isInView}>
                            <h1
                                className={cn(
                                "text-center lg:text-left text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl xl:text-7xl dark:text-neutral-100",
                                manrope.className
                                )}
                                style={{ letterSpacing: "0.01em", wordSpacing: "0.05em", lineHeight: "1.2" }}
                            >
                                Vos{" "}
                                <RoughNotation
                                    type="highlight"
                                    strokeWidth={0.5}
                                    animationDuration={2000}
                                    iterations={2}
                                    color={newHighlightColorHex}
                                    multiline
                                >
                                    <span className="text-currentColor" lang="fr">solutions plomberie</span>
                                </RoughNotation>{" "}
                                <RoughNotation
                                    type="underline"
                                    animationDuration={1000}
                                    iterations={2}
                                    color={newHighlightColorHex}
                                    strokeWidth={2.5}
                                    padding={-5}
                                >
                                    fiables
                                </RoughNotation>{" "}
                                et{" "}
                                <RoughNotation
                                    type="underline"
                                    animationDuration={1000}
                                    iterations={2}
                                    color={newHighlightColorHex}
                                    strokeWidth={2.5}
                                    padding={-5}
                                >
                                    rapides
                                </RoughNotation>
                            </h1>
                            <p className="mt-6 text-lg text-neutral-700 sm:text-xl md:mt-10 dark:text-neutral-300 text-center lg:text-left">
                                {`Fuites, installations, dépannage urgent ? ${agencyName} met à votre service son expertise et des technologies modernes pour garantir votre confort et la pérennité de vos installations à Rennes et ses environs.`}
                            </p>
                        </RoughNotationGroup>
                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start [perspective:800px]">
                            <Link
                                href="/contact"
                                className={cn(
                                    "inline-flex items-center justify-center px-8 py-3 font-semibold rounded-lg text-white shadow-lg transform transition-all duration-300 ease-in-out",
                                    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 dark:focus-visible:ring-offset-slate-900",
                                    manrope.className,
                                    "bg-blue-700 hover:bg-blue-800 focus-visible:ring-blue-700",
                                    "hover:scale-105 hover:-translate-y-0.5",
                                    "active:scale-100 active:translate-y-0"
                                )}
                                aria-label="Demander un devis gratuit pour nos services de plomberie"
                            >
                                Demander un Devis Gratuit
                            </Link>

                            <Link
                                href="#services"
                                className={cn(
                                    "inline-flex items-center justify-center px-8 py-3 font-semibold rounded-lg shadow-lg transform transition-all duration-300 ease-in-out",
                                    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 dark:focus-visible:ring-offset-slate-900",
                                    manrope.className,
                                    "border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white focus-visible:ring-blue-700",
                                    "dark:text-blue-700 dark:border-blue-700 dark:hover:bg-blue-700 dark:hover:text-white",
                                    "hover:scale-105 hover:-translate-y-0.5",
                                    "active:scale-100 active:translate-y-0"
                                )}
                                aria-label="Découvrir nos services de plomberie"
                            >
                                Nos Services
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative order-1 lg:order-2 lg:col-span-2" role="img" aria-label={`Image d'illustration des services de plomberie de ${agencyName}`}>
                    <div className="lg:hidden w-full h-64 xs:h-72 sm:h-80 md:h-96" aria-hidden="true"></div>
                    <Image
                        src="/robinet.png"
                        alt={`Robinet chromé moderne et brillant symbolisant la qualité et le professionnalisme des services de plomberie de ${agencyName} à Rennes. Installation, réparation et dépannage de robinetterie disponibles.`}
                        fill
                        sizes="(max-width:1024px) 100vw, 40vw"
                        priority
                        className="object-cover"
                    />
                    <div
                        className="absolute inset-0 z-5 bg-blue-700 opacity-30 mix-blend-multiply pointer-events-none"
                        aria-hidden="true"
                    />
                    <div
                        className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-900/40 lg:via-transparent lg:to-transparent pointer-events-none mix-blend-multiply"
                        aria-hidden="true"
                    />
                </div>
            </section>
        </>
    );
}