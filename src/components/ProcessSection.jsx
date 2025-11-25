import React from 'react';
import { FileSearch, FileSignature, Bug, FileText, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: <FileSearch className="w-8 h-8" />,
        title: "1. Analyse Initiale Gratuite",
        description: "Nous discutons de vos besoins en cybersécurité, identifions les systèmes à tester et définissons le périmètre de l'intervention. Cette consultation initiale est entièrement gratuite et sans engagement."
    },
    {
        icon: <FileSignature className="w-8 h-8" />,
        title: "2. Cadrage & Autorisation",
        description: "Signature d'un contrat clair définissant les objectifs, le périmètre, les méthodologies et les règles d'engagement. Vous nous fournissez l'autorisation écrite obligatoire pour effectuer les tests en toute légalité (conformité loi Godfrain)."
    },
    {
        icon: <Bug className="w-8 h-8" />,
        title: "3. Tests d'Intrusion",
        description: "Nos hackers éthiques certifiés simulent des attaques réelles sur vos systèmes en utilisant les mêmes outils et techniques que les pirates malveillants. Nous testons vos applications web, mobiles, réseaux et infrastructures cloud selon les méthodologies OWASP et PTES."
    },
    {
        icon: <FileText className="w-8 h-8" />,
        title: "4. Rapport Détaillé",
        description: "Vous recevez un rapport technique complet classant toutes les vulnérabilités découvertes par niveau de criticité (critique, élevé, moyen, faible). Pour chaque faille, nous fournissons une description, une preuve de concept, l'impact potentiel et des recommandations de correction précises."
    },
    {
        icon: <CheckCircle className="w-8 h-8" />,
        title: "5. Support & Contre-Audit",
        description: "Nous vous accompagnons dans la mise en œuvre des correctifs recommandés. Une fois les corrections appliquées, nous effectuons un contre-audit gratuit pour vérifier l'efficacité des mesures de sécurité et vous délivrer un certificat de conformité."
    }
];

const ProcessSection = () => {
    return (
        <div className="bg-gradient-to-b from-cyber-black to-cyber-dark py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
                        NOTRE PROCESSUS <span className="text-cyber-green">EN 5 ÉTAPES</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Une méthodologie éprouvée pour garantir la sécurité maximale de vos systèmes informatiques
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyber-green/50 to-transparent"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                <div className="flex-1 md:text-right">
                                    {index % 2 === 0 && (
                                        <div className="bg-cyber-dark border border-white/10 rounded-xl p-6 hover:border-cyber-green/50 transition-colors">
                                            <h3 className="text-xl font-bold text-white mb-3 font-mono">{step.title}</h3>
                                            <p className="text-gray-300 leading-relaxed">{step.description}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="relative flex items-center justify-center">
                                    <div className="bg-cyber-green/10 border-2 border-cyber-green rounded-full p-4 backdrop-blur-sm">
                                        <div className="text-cyber-green">
                                            {step.icon}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    {index % 2 !== 0 && (
                                        <div className="bg-cyber-dark border border-white/10 rounded-xl p-6 hover:border-cyber-green/50 transition-colors">
                                            <h3 className="text-xl font-bold text-white mb-3 font-mono">{step.title}</h3>
                                            <p className="text-gray-300 leading-relaxed">{step.description}</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;
