export const siteConfig = {
  name: "AquaNova Services",
  description: "Votre expert plombier à Rennes - Intervention rapide 24h/7j",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aquanovaservices.fr",
  phone: "06 12 34 56 78",
  phoneDisplay: "06 12 34 56 78",
  email: "contact@aquanovaservices.fr",
  address: {
    street: "123 Rue de la Plomberie",
    city: "Rennes",
    postalCode: "35000",
    country: "France"
  },
  socials: {
    facebook: "https://facebook.com/aquanovaservices",
    instagram: "https://instagram.com/aquanovaservices",
    linkedin: "https://linkedin.com/company/aquanovaservices"
  },
  businessHours: {
    weekdays: "8h00 - 19h00",
    saturday: "9h00 - 18h00",
    sunday: "Urgences uniquement"
  },
  services: {
    emergency: true,
    response_time: "30 minutes",
    coverage_area: "Rennes et agglomération"
  }
} as const;