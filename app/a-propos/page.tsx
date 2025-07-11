'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { WaterAnimation, WaveAnimation } from '@/components/ui/water-animation';
import { siteConfig } from '@/config/site';
import { manrope } from '@/lib/fonts';
import { Award, Users, Clock, Shield, Droplets, Wrench } from 'lucide-react';
import { Footer } from '@/components/Footer';

const stats = [
  { icon: Clock, value: "15+", label: "Années d'expérience" },
  { icon: Users, value: "5000+", label: "Clients satisfaits" },
  { icon: Award, value: "100%", label: "Garantie satisfaction" },
  { icon: Shield, value: "24/7", label: "Service d'urgence" },
];

const values = [
  {
    icon: Droplets,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque intervention, en utilisant les meilleures techniques et matériaux du marché."
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description: "Notre engagement envers nos clients se traduit par une disponibilité constante et des interventions rapides."
  },
  {
    icon: Wrench,
    title: "Innovation",
    description: "Nous restons à la pointe de la technologie pour offrir des solutions durables et économiques."
  }
];

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <WaterAnimation containerClass="absolute inset-0 z-10" />
          <motion.div
            className="absolute inset-0 z-0"
            style={{ y }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-blue-200/30" />
          </motion.div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.h1
                className={`text-5xl md:text-6xl font-bold mb-6 ${manrope.className}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent">
                  L'eau est notre passion,
                </span>
                <br />
                <span className="text-gray-900">votre satisfaction notre mission</span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Depuis plus de 15 ans, {siteConfig.name} est votre partenaire de confiance 
                pour tous vos besoins en plomberie à Rennes et ses environs.
              </motion.p>
            </motion.div>
          </div>

          <WaveAnimation />
        </section>

        {/* Stats Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full mb-4"
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className={`text-3xl font-bold text-gray-900 mb-2 ${manrope.className}`}>
                    {stat.value}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className={`text-4xl font-bold mb-6 ${manrope.className}`}>
                  Notre Histoire
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Fondée en 2009, {siteConfig.name} est née de la passion d'un artisan 
                    plombier déterminé à révolutionner le service de plomberie à Rennes.
                  </p>
                  <p>
                    Au fil des années, nous avons bâti notre réputation sur trois piliers 
                    fondamentaux : la qualité du travail, la rapidité d'intervention et 
                    la transparence des prix.
                  </p>
                  <p>
                    Aujourd'hui, avec une équipe de 15 professionnels certifiés, nous 
                    intervenons dans tout le département d'Ille-et-Vilaine, apportant 
                    notre expertise à des milliers de foyers et d'entreprises.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/aquanova_team.jpg"
                    alt="Notre équipe"
                    fill
                    className="object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-700/20 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <motion.div
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-700 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className={`text-4xl font-bold mb-4 ${manrope.className}`}>
                Nos Valeurs
              </h2>
              <p className="text-xl text-gray-600">
                Les principes qui guident chacune de nos actions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full mb-6"
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className={`text-2xl font-bold mb-4 ${manrope.className}`}>
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity -z-10"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                style={{
                  backgroundImage: 'url("/noise.webp")',
                  backgroundSize: 'cover',
                }}
              />
              <div className="relative z-10">
                <h2 className={`text-4xl font-bold mb-4 ${manrope.className}`}>
                  Prêt à travailler avec nous ?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Contactez-nous dès aujourd'hui pour tous vos besoins en plomberie
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white text-blue-700 rounded-full font-bold hover:bg-gray-100 transition-colors"
                      aria-label="Nous contacter"
                    >
                      Nous contacter
                    </motion.button>
                  </Link>
                  <Link href={`tel:${siteConfig.phone}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-blue-700 transition-colors"
                      aria-label="Appeler maintenant"
                    >
                      {siteConfig.phoneDisplay}
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}