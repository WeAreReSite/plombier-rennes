// components/ReviewsSection.tsx
"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Star, UserCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { manrope } from "@/lib/fonts";

interface Review {
  id: string;
  rating: number;
  date: string;
  text: string;
  author: string;
  avatarInitial?: string;
  source?: string;
}

const sampleReviewsList: Review[] = [
  {
    id: "review1",
    rating: 5,
    date: "2025-05-03",
    text: "Intervention rapide et très professionnelle pour une fuite d'eau. Le plombier a été clair dans ses explications et le tarif annoncé respecté. Je recommande vivement AquaNova Services !",
    author: "Marie L.",
    avatarInitial: "M",
    source: "Google",
  },
  {
    id: "review2",
    rating: 5,
    date: "2025-04-22",
    text: "Excellent travail pour l'installation de notre nouvelle salle de bain. L'équipe a été à l'écoute de nos besoins et le résultat est impeccable. Un grand merci !",
    author: "Jean-Philippe R.",
    avatarInitial: "J",
    source: "Google",
  },
  {
    id: "review3",
    rating: 4,
    date: "2025-04-10",
    text: "Remplacement de chauffe-eau effectué dans les temps. Bon contact avec l'artisan. Seul petit bémol, un peu de nettoyage à faire après le chantier, mais la prestation technique était bonne.",
    author: "Chloé B.",
    avatarInitial: "C",
    source: "Google",
  },
];

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const StarRating = ({ rating, size = 18 }: { rating: number; size?: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            i < rating ? "fill-yellow-400 text-yellow-400" : "fill-neutral-300 text-neutral-300 dark:fill-neutral-600 dark:text-neutral-600",
            "mr-0.5"
          )}
        />
      ))}
    </div>
  );
};

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
    <path d="M12.026 10.892l-.002-.001h9.376c.06.325.096.66.096 1.009 0 6.342-4.283 10.99-10.106 10.99C5.005 22.89.001 17.885.001 11.5S5.005.11 11.389.11c3.315 0 5.904 1.298 7.767 3.06l-2.522 2.419c-.991-.934-2.326-1.608-4.629-1.608-4.009 0-7.164 3.315-7.164 7.52 0 4.204 3.155 7.52 7.164 7.52 3.307 0 5.292-1.848 5.789-4.232h-6.363v-3.301z" fill="#4285F4"/>
  </svg>
);


const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className={cn(
      "bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col h-full border border-slate-200/80 dark:border-slate-700/70 hover:border-blue-400/60 dark:hover:border-blue-600/60",
      manrope.className
    )}>
      <div className="flex justify-between items-start mb-4">
        <StarRating rating={review.rating} size={20} />
        <div className="flex items-center space-x-2">
            {review.source === "Google" && <GoogleIcon />}
            <span className="text-xs text-neutral-500 dark:text-neutral-400">{formatDate(review.date)}</span>
        </div>
      </div>
      <p className="text-base text-neutral-700 dark:text-neutral-200 leading-relaxed mb-6 flex-grow italic">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-auto flex justify-between items-center pt-5 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center">
          {review.avatarInitial ? (
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-base font-semibold mr-3.5 shadow-md">
              {review.avatarInitial}
            </div>
          ) : (
            <UserCircle size={40} className="text-neutral-400 dark:text-neutral-500 mr-3.5" />
          )}
          <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{review.author}</span>
        </div>
      </div>
    </div>
  );
};

export function ReviewsSection() {
  const agencyName = "AquaNova Services";

  return (
    <section id="temoignages" 
      className="mt-8 md:mt-12 py-16 md:py-24 
                 bg-gradient-to-b from-slate-50 via-slate-100 to-blue-100/30
                 dark:from-slate-900 dark:via-slate-950 dark:to-custom-blue-darker/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          as="h2"
          title="Ce que disent nos clients"
          subtitle={`Découvrez les retours d'expérience de ceux qui ont fait confiance à ${agencyName} pour leurs travaux de plomberie.`}
          centerText={true}
          showAccentLine={true}
          titleClassName="text-neutral-900 dark:text-neutral-50"
          subtitleClassName="text-neutral-700 dark:text-neutral-300"
        />

        {sampleReviewsList.length > 0 ? (
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
            {sampleReviewsList.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <p className={cn("text-center text-neutral-600 dark:text-neutral-400 mt-12", manrope.className)}>
            Aucun témoignage à afficher pour le moment.
          </p>
        )}

        <div className="mt-16 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=YOUR_PLACE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-900 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105",
              manrope.className
            )}
          >
            Voir tous nos avis sur Google
            <span className="ml-2.5"><GoogleIcon /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
