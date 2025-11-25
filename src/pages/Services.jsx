import React from 'react';
import { Shield, Search, Server, Lock, FileCode, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Shield className="w-8 h-8 text-cyber-green" />,
        title: "Tests d'Intrusion (Pentest)",
        description: "Simulation d'attaques réelles sur vos applications web, mobiles et infrastructures pour identifier les failles avant les pirates.",
        features: ["Black Box / Grey Box / White Box", "Rapport technique détaillé", "Contre-audit de validation"]
    },
    {
        icon: <Search className="w-8 h-8 text-cyber-purple" />,
        title: "Audit de Code & Architecture",
        description: "Analyse approfondie de votre code source et de votre architecture réseau pour déceler les vulnérabilités de conception.",
        features: ["Revue de code sécurisé", "Audit de configuration Cloud", "Conformité RGPD / ISO 27001"]
    },
    {
        icon: <Users className="w-8 h-8 text-blue-400" />,
        title: "Ingénierie Sociale",
        description: "Testez la vigilance de vos employés face aux attaques de phishing et aux manipulations psychologiques.",
        features: ["Campagnes de Phishing simulées", "Tests d'intrusion physique", "Formation et sensibilisation"]
    }
];

const Services = () => {
    return (
        <div className="bg-cyber-black min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
                        NOS SERVICES <span className="text-cyber-green">OFFENSIFS</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Nous utilisons les mêmes outils et techniques que les pirates malveillants, mais pour renforcer votre sécurité.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-cyber-dark border border-white/10 rounded-xl p-6 hover:border-cyber-green/50 transition-colors group"
                        >
                            <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-cyber-green/10 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-300">
                                        <div className="w-1.5 h-1.5 bg-cyber-green rounded-full mr-2"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
