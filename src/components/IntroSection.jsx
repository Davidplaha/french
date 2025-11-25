import React from 'react';
import { motion } from 'framer-motion';

const IntroSection = () => {
    return (
        <div className="bg-cyber-black py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="prose prose-invert max-w-none"
                >
                    <div className="text-gray-300 leading-relaxed space-y-6">
                        <p className="text-lg">
                            Vous cherchez à <strong className="text-white">embaucher un hacker</strong> pour protéger votre entreprise contre les cyberattaques ? Vous êtes au bon endroit. Chez <strong className="text-cyber-green">WhiteHat France</strong>, nous proposons des services de <strong className="text-white">hacking éthique 100% légal</strong>, également appelé cybersécurité offensive ou tests d'intrusion (pentest).
                        </p>

                        <p>
                            Contrairement aux pirates informatiques malveillants (Black Hat), nos <strong className="text-white">hackers éthiques certifiés</strong> travaillent avec votre autorisation pour identifier et corriger les failles de sécurité avant qu'elles ne soient exploitées par des cybercriminels. En France, cette pratique est parfaitement légale et même encouragée par l'<strong className="text-white">ANSSI</strong> (Agence Nationale de la Sécurité des Systèmes d'Information).
                        </p>

                        <div className="bg-cyber-dark border-l-4 border-cyber-green p-6 my-8 rounded-r-lg">
                            <h3 className="text-xl font-bold text-white mb-3 font-mono">🔐 Qu'est-ce qu'un Hacker Éthique (White Hat) ?</h3>
                            <p className="mb-0">
                                Un hacker éthique est un expert en cybersécurité qui utilise ses compétences techniques pour <strong className="text-white">tester la sécurité de vos systèmes informatiques</strong> avec votre autorisation explicite. Son objectif est de détecter les vulnérabilités avant que des pirates malveillants ne les exploitent, protégeant ainsi vos données sensibles, votre infrastructure et la confiance de vos clients.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold text-white font-mono mt-12 mb-4">Pourquoi Embaucher un Hacker Éthique en France ?</h3>

                        <p>
                            Les <strong className="text-white">cyberattaques en France</strong> sont en constante augmentation. En 2023, <strong className="text-cyber-green">54% des entreprises françaises</strong> ont été victimes d'au moins une attaque cyber, avec des conséquences dramatiques : vol de données clients, demandes de rançon (ransomware), interruption d'activité et perte de réputation.
                        </p>

                        <p>
                            Les PME sont particulièrement vulnérables car elles disposent souvent de budgets de sécurité limités et de systèmes informatiques mal protégés. <strong className="text-white">330 000 cyberattaques</strong> ont ciblé les PME françaises en 2022, avec un temps de récupération moyen de <strong className="text-white">6,4 mois</strong> et des coûts pouvant atteindre plusieurs centaines de milliers d'euros.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                            <div className="bg-cyber-dark border border-cyber-green/30 rounded-lg p-4 text-center">
                                <div className="text-3xl font-bold text-cyber-green mb-2">54%</div>
                                <div className="text-sm text-gray-400">Entreprises attaquées en 2023</div>
                            </div>
                            <div className="bg-cyber-dark border border-cyber-green/30 rounded-lg p-4 text-center">
                                <div className="text-3xl font-bold text-cyber-green mb-2">59%</div>
                                <div className="text-sm text-gray-400">Victimes de ransomware</div>
                            </div>
                            <div className="bg-cyber-dark border border-cyber-green/30 rounded-lg p-4 text-center">
                                <div className="text-3xl font-bold text-cyber-green mb-2">75%</div>
                                <div className="text-sm text-gray-400">Attaques dues à l'erreur humaine</div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white font-mono mt-12 mb-4">Nos Services de Hacking Éthique</h3>

                        <p>
                            Nous proposons une gamme complète de services de cybersécurité offensive pour sécuriser tous les aspects de votre infrastructure numérique :
                        </p>

                        <ul className="space-y-3 ml-6">
                            <li className="flex items-start">
                                <span className="text-cyber-green mr-2">▸</span>
                                <span><strong className="text-white">Tests d'Intrusion (Pentest)</strong> : Web, Mobile, Réseau, API, Cloud - Simulation d'attaques réelles selon les méthodologies OWASP et PTES</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyber-green mr-2">▸</span>
                                <span><strong className="text-white">Audit de Sécurité</strong> : Analyse de code source, architecture réseau, conformité RGPD/NIS2/ISO 27001</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyber-green mr-2">▸</span>
                                <span><strong className="text-white">Ingénierie Sociale</strong> : Tests de phishing simulés, intrusion physique, formation des employés</span>
                            </li>
                        </ul>

                        <div className="bg-gradient-to-r from-cyber-green/10 to-cyber-purple/10 border border-cyber-green/30 rounded-lg p-6 my-8">
                            <h4 className="text-lg font-bold text-white mb-3">⚖️ Légalité & Conformité en France</h4>
                            <p className="mb-0 text-sm">
                                Embaucher un hacker éthique est <strong className="text-white">100% légal en France</strong> lorsque les tests sont effectués avec votre autorisation écrite. La <strong className="text-white">loi pour une République numérique de 2016</strong> protège même les hackers éthiques qui signalent de bonne foi des vulnérabilités à l'ANSSI. Nous respectons scrupuleusement la <strong className="text-white">loi Godfrain</strong> (accès frauduleux), le <strong className="text-white">RGPD</strong> et toutes les recommandations de l'ANSSI.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default IntroSection;
