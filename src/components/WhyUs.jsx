import React from 'react';
import { Award, Shield, Eye, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Award className="w-10 h-10" />,
        title: "Experts Certifiés",
        description: "Nos hackers éthiques détiennent les certifications les plus reconnues du marché international : OSCP (Offensive Security Certified Professional), CEH (Certified Ethical Hacker) et CISSP. Avec plus de 10 ans d'expérience cumulée en cybersécurité offensive, notre équipe maîtrise les dernières techniques d'attaque et de défense."
    },
    {
        icon: <Shield className="w-10 h-10" />,
        title: "Conformité Totale",
        description: "Nous respectons scrupuleusement toutes les réglementations françaises et européennes : loi Godfrain, RGPD, directive NIS2, et les recommandations de l'ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information). Nos processus sont certifiés ISO 27001 et ISO 27701 pour garantir la gestion sécurisée de vos données."
    },
    {
        icon: <Eye className="w-10 h-10" />,
        title: "Confidentialité Absolue",
        description: "La discrétion est au cœur de notre métier. Chaque mission débute par la signature d'un accord de confidentialité (NDA) strict. Vos données sensibles et les vulnérabilités découvertes ne sont jamais partagées avec des tiers. Tous nos rapports sont chiffrés et transmis via des canaux sécurisés."
    },
    {
        icon: <Clock className="w-10 h-10" />,
        title: "Disponibilité & Réactivité",
        description: "Nous comprenons que la sécurité ne peut pas attendre. Notre équipe est disponible pour des interventions d'urgence en cas d'incident de sécurité. Support technique 7j/7 pour nos clients sous contrat. Délais d'intervention rapides : première analyse sous 48h ouvrées après signature du contrat."
    }
];

const stats = [
    { value: "500+", label: "Vulnérabilités Corrigées" },
    { value: "150+", label: "Entreprises Protégées" },
    { value: "100%", label: "Taux de Satisfaction" },
    { value: "10+", label: "Années d'Expérience" }
];

const WhyUs = () => {
    return (
        <div className="bg-cyber-black py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
                        POURQUOI NOUS <span className="text-cyber-green">CHOISIR ?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        La cybersécurité de votre entreprise mérite les meilleurs experts. Voici ce qui nous distingue de la concurrence.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center bg-cyber-dark border border-white/10 rounded-xl p-6"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-cyber-green font-mono mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-cyber-dark border border-white/10 rounded-xl p-8 hover:border-cyber-green/50 transition-colors group"
                        >
                            <div className="text-cyber-green mb-4 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-mono">{feature.title}</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-cyber-dark border border-white/10 rounded-xl px-8 py-4">
                        <div className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-cyber-green" />
                            <span className="text-gray-300 text-sm">Agréé ANSSI</span>
                        </div>
                        <div className="hidden md:block w-px h-6 bg-white/10"></div>
                        <div className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-cyber-green" />
                            <span className="text-gray-300 text-sm">ISO 27001:2013</span>
                        </div>
                        <div className="hidden md:block w-px h-6 bg-white/10"></div>
                        <div className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-cyber-green" />
                            <span className="text-gray-300 text-sm">Conforme RGPD</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
