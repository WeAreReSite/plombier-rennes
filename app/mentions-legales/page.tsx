'use client';

import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/config/site';
import { manrope } from '@/lib/fonts';
import { FileText, Building, User, Mail, Phone, Globe, Shield } from 'lucide-react';

const sections = [
  {
    icon: Building,
    title: "Informations légales",
    content: [
      {
        subtitle: "Éditeur du site",
        text: `${siteConfig.name}\n${siteConfig.address.street}\n${siteConfig.address.postalCode} ${siteConfig.address.city}\nFrance`
      },
      {
        subtitle: "Forme juridique",
        text: "SARL au capital de 10 000 euros\nRCS Rennes B 123 456 789\nN° TVA : FR 12 345678901"
      },
      {
        subtitle: "Responsable de publication",
        text: "M. Jean Dupont, Gérant"
      }
    ]
  },
  {
    icon: Globe,
    title: "Hébergement",
    content: [
      {
        subtitle: "Hébergeur",
        text: "Vercel Inc.\n340 S Lemon Ave #4133\nWalnut, CA 91789\nÉtats-Unis"
      }
    ]
  },
  {
    icon: Shield,
    title: "Propriété intellectuelle",
    content: [
      {
        subtitle: "Droits d'auteur",
        text: "L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques."
      },
      {
        subtitle: "Marques",
        text: `${siteConfig.name} est une marque déposée. Toute reproduction totale ou partielle de cette marque sans autorisation préalable et écrite est interdite.`
      }
    ]
  },
  {
    icon: FileText,
    title: "Conditions d'utilisation",
    content: [
      {
        subtitle: "Responsabilité",
        text: "Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email."
      },
      {
        subtitle: "Liens hypertextes",
        text: `${siteConfig.name} ne contrôle pas les sites en connexion avec le sien, et ne saurait donc être responsable de leur contenu. Les risques liés à l'utilisation de ces sites incombent pleinement à l'utilisateur.`
      }
    ]
  },
  {
    icon: User,
    title: "Données personnelles",
    content: [
      {
        subtitle: "Collecte des données",
        text: "Les données personnelles collectées sur ce site sont uniquement destinées à un usage interne. En aucun cas ces données ne seront cédées ou vendues à des tiers."
      },
      {
        subtitle: "Droit d'accès",
        text: "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, vous pouvez nous contacter."
      }
    ]
  }
];

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-blue-200/20"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 relative z-10"
          >
            <h1 className={`text-4xl md:text-5xl font-bold text-center mb-6 ${manrope.className}`}>
              <span className="bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent">
                Mentions Légales
              </span>
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Informations légales concernant le site {siteConfig.name}
            </p>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center"
                    >
                      <section.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h2 className={`text-2xl font-bold text-gray-900 ${manrope.className}`}>
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 + itemIndex * 0.1 }}
                      >
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {item.subtitle}
                        </h3>
                        <p className="text-gray-600 whitespace-pre-line">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-white text-center"
            >
              <h2 className={`text-2xl font-bold mb-4 ${manrope.className}`}>
                Pour nous contacter
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:underline"
                  aria-label="Email de contact"
                >
                  <Mail className="w-5 h-5" />
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 hover:underline"
                  aria-label="Téléphone de contact"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </motion.div>

            {/* Last Update */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-gray-500 text-sm mt-8"
            >
              Dernière mise à jour : Janvier 2025
            </motion.p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}