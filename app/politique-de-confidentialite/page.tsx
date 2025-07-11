'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';
import { manrope } from '@/lib/fonts';
import { Shield, Database, Lock, Eye, UserCheck, Cookie, Mail } from 'lucide-react';

const sections = [
  {
    icon: Database,
    title: "Collecte des données",
    content: [
      {
        subtitle: "Données collectées",
        items: [
          "Nom et prénom",
          "Adresse email",
          "Numéro de téléphone",
          "Adresse postale (pour les interventions)",
          "Description du problème ou du projet"
        ]
      },
      {
        subtitle: "Méthodes de collecte",
        text: "Les données sont collectées via notre formulaire de contact, par téléphone lors de vos appels, ou lors de nos interventions à domicile."
      }
    ]
  },
  {
    icon: Lock,
    title: "Utilisation des données",
    content: [
      {
        subtitle: "Finalités",
        items: [
          "Traitement de vos demandes de devis",
          "Organisation des interventions",
          "Suivi de la relation client",
          "Facturation des prestations",
          "Amélioration de nos services"
        ]
      },
      {
        subtitle: "Base légale",
        text: "Le traitement de vos données est basé sur votre consentement et sur l'exécution du contrat de prestation de services."
      }
    ]
  },
  {
    icon: Shield,
    title: "Protection des données",
    content: [
      {
        subtitle: "Mesures de sécurité",
        text: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction."
      },
      {
        subtitle: "Conservation",
        text: "Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, et conformément aux obligations légales (maximum 3 ans après notre dernière interaction)."
      }
    ]
  },
  {
    icon: Eye,
    title: "Partage des données",
    content: [
      {
        subtitle: "Destinataires",
        text: "Vos données ne sont accessibles qu'à notre personnel habilité et ne sont jamais vendues à des tiers. Elles peuvent être partagées avec nos partenaires techniques uniquement dans le cadre de l'exécution de nos services (ex: sous-traitants)."
      },
      {
        subtitle: "Transferts",
        text: "Vos données sont hébergées en France et ne font l'objet d'aucun transfert hors de l'Union Européenne."
      }
    ]
  },
  {
    icon: UserCheck,
    title: "Vos droits",
    content: [
      {
        subtitle: "Droits RGPD",
        items: [
          "Droit d'accès à vos données",
          "Droit de rectification",
          "Droit à l'effacement",
          "Droit à la limitation du traitement",
          "Droit à la portabilité",
          "Droit d'opposition"
        ]
      },
      {
        subtitle: "Exercice des droits",
        text: `Pour exercer vos droits, contactez-nous à : ${siteConfig.email} ou par courrier à notre adresse postale. Nous répondrons dans un délai maximum de 30 jours.`
      }
    ]
  },
  {
    icon: Cookie,
    title: "Cookies",
    content: [
      {
        subtitle: "Utilisation des cookies",
        text: "Notre site utilise des cookies techniques nécessaires au bon fonctionnement du site et des cookies analytiques pour améliorer votre expérience."
      },
      {
        subtitle: "Gestion des cookies",
        text: "Vous pouvez paramétrer votre navigateur pour refuser les cookies. Cependant, cela pourrait affecter votre expérience de navigation sur notre site."
      }
    ]
  }
];

export default function PolitiqueConfidentialitePage() {
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
                Politique de Confidentialité
              </span>
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Nous prenons la protection de vos données personnelles très au sérieux
            </p>
          </motion.div>
        </section>

        {/* Introduction */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <p className="text-gray-600 leading-relaxed">
                Chez {siteConfig.name}, nous nous engageons à protéger et respecter votre vie privée. 
                Cette politique de confidentialité vous informe sur la manière dont nous collectons, 
                utilisons et protégeons vos données personnelles conformément au Règlement Général 
                sur la Protection des Données (RGPD).
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-8 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
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
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                          {item.subtitle}
                        </h3>
                        {item.text && (
                          <p className="text-gray-600 leading-relaxed">
                            {item.text}
                          </p>
                        )}
                        {item.items && (
                          <ul className="space-y-2">
                            {item.items.map((listItem, listIndex) => (
                              <motion.li
                                key={listIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + listIndex * 0.05 }}
                                className="flex items-start gap-3 text-gray-600"
                              >
                                <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0" />
                                <span>{listItem}</span>
                              </motion.li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Contact DPO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-white"
            >
              <h2 className={`text-2xl font-bold mb-4 ${manrope.className}`}>
                Délégué à la Protection des Données
              </h2>
              <p className="mb-6">
                Pour toute question concernant notre politique de confidentialité ou vos données 
                personnelles, vous pouvez contacter notre responsable de la protection des données :
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:underline"
                  aria-label="Email DPO"
                >
                  <Mail className="w-5 h-5" />
                  {siteConfig.email}
                </a>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>CNIL : www.cnil.fr</span>
                </div>
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