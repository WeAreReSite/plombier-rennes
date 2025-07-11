'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { manrope } from '@/lib/fonts';
import { Footer } from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { WaterAnimation } from '@/components/ui/water-animation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  urgency: 'normal' | 'urgent';
}

const services = [
  "Dépannage urgent",
  "Installation sanitaire",
  "Réparation fuite",
  "Débouchage canalisation",
  "Remplacement chauffe-eau",
  "Rénovation salle de bain",
  "Entretien plomberie",
  "Autre"
];

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: siteConfig.phoneDisplay,
    link: `tel:${siteConfig.phone}`,
    color: "from-blue-700 to-blue-800"
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    link: `mailto:${siteConfig.email}`,
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: `${siteConfig.address.street}, ${siteConfig.address.city}`,
    link: "#",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Clock,
    label: "Horaires",
    value: siteConfig.businessHours.weekdays,
    link: "#",
    color: "from-blue-800 to-blue-900"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In production, you would send the data to your backend here
    console.log('Form submitted:', formData);
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        urgency: 'normal'
      });
      setSubmitStatus('idle');
    }, 5000);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <WaterAnimation containerClass="absolute inset-0 z-10" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 text-center"
          >
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${manrope.className}`}>
              <span className="bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent">
                Contactez-nous
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Notre équipe est à votre écoute pour répondre à tous vos besoins en plomberie. 
              Intervention rapide garantie !
            </p>
          </motion.div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="block"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${info.color} rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.label}</h3>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full -translate-y-16 translate-x-16 opacity-50" />
                
                <h2 className={`text-3xl font-bold mb-6 ${manrope.className}`}>
                  Demande de devis gratuit
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all"
                        aria-label="Nom complet"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all"
                        aria-label="Email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all"
                        aria-label="Téléphone"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service requis *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all"
                        aria-label="Service requis"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Urgence de l'intervention
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value="normal"
                          checked={formData.urgency === 'normal'}
                          onChange={handleChange}
                          className="mr-2"
                          aria-label="Intervention normale"
                        />
                        <span className="text-gray-700">Normal (sous 48h)</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value="urgent"
                          checked={formData.urgency === 'urgent'}
                          onChange={handleChange}
                          className="mr-2"
                          aria-label="Intervention urgente"
                        />
                        <span className="text-red-600 font-medium">Urgent (aujourd'hui)</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Description du problème *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all resize-none"
                      placeholder="Décrivez votre problème ou votre projet..."
                      aria-label="Description du problème"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900'
                    }`}
                    aria-label="Envoyer la demande"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer la demande
                      </>
                    )}
                  </motion.button>
                </form>
                
                {/* Success/Error Messages */}
                <AnimatePresence>
                  {submitStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`mt-4 p-4 rounded-lg flex items-center gap-3 ${
                        submitStatus === 'success' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Votre demande a été envoyée avec succès ! Nous vous contacterons sous peu.</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-5 h-5" />
                          <span>Une erreur s'est produite. Veuillez réessayer ou nous contacter par téléphone.</span>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              {/* Map/Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Urgency Banner */}
                <motion.div
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-6 shadow-xl"
                >
                  <h3 className={`text-2xl font-bold mb-2 ${manrope.className}`}>
                    Urgence plomberie ?
                  </h3>
                  <p className="mb-4">
                    Intervention rapide 24h/7j pour toutes vos urgences
                  </p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                    aria-label="Appel urgent"
                  >
                    <Phone className="w-5 h-5" />
                    Appel urgent : {siteConfig.phoneDisplay}
                  </a>
                </motion.div>
                
                {/* Business Hours */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className={`text-xl font-bold mb-4 ${manrope.className}`}>
                    Horaires d'ouverture
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Lundi - Vendredi</span>
                      <span className="font-medium">{siteConfig.businessHours.weekdays}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Samedi</span>
                      <span className="font-medium">{siteConfig.businessHours.saturday}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Dimanche</span>
                      <span className="font-medium text-red-600">{siteConfig.businessHours.sunday}</span>
                    </div>
                  </div>
                </div>
                
                {/* Service Area */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                  <h3 className={`text-xl font-bold mb-4 ${manrope.className}`}>
                    Zone d'intervention
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Nous intervenons rapidement dans toute l'agglomération rennaise :
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {['Rennes Centre', 'Cesson-Sévigné', 'Chantepie', 'Saint-Grégoire', 
                      'Betton', 'Pacé', 'Bruz', 'Vezin-le-Coquet'].map(city => (
                      <motion.div
                        key={city}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        {city}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}